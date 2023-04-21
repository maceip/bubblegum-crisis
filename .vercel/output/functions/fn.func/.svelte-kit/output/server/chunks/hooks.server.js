import { createTRPCHandle } from "trpc-sveltekit";
import { initTRPC, TRPCError } from "@trpc/server";
import { ZodError, z } from "zod";
import superjson from "superjson";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
const createTRPCContext = async (event) => {
  const userId = event.locals.session?.userId;
  return {
    db,
    userId
  };
};
const t = initTRPC.context().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null
      }
    };
  }
});
const createTRPCRouter = t.router;
const publicProcedure = t.procedure;
const enforceUserIsAuthed = t.middleware(async ({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({
      code: "UNAUTHORIZED"
    });
  }
  return next({
    ctx: {
      userId: ctx.userId
    }
  });
});
const privateProcedure = t.procedure.use(enforceUserIsAuthed);
const addUserDataToMechs = async (Mechs) => {
  return {};
};
const mechsRouter = createTRPCRouter({
  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    const queryMechs = await ctx.db.select().from(mech).where(eq(mech.id, input.id)).limit(1);
    if (!queryMechs[0])
      throw new TRPCError({ code: "NOT_FOUND" });
    return (await addUserDataToMechs())[0];
  }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    await ctx.db.select().from(mech).limit(100).orderBy(desc(mech.createdAt));
    return addUserDataToMechs();
  }),
  getMechsByUserId: publicProcedure.input(
    z.object({
      userId: z.string()
    })
  ).query(
    ({ ctx, input }) => ctx.db.select().from(mech).where(eq(mech.authorId, input.userId)).limit(100).orderBy(desc(mech.createdAt)).then(addUserDataToMechs)
  ),
  create: privateProcedure.input(
    z.object({
      content: z.string().emoji("Only emojis are allowed").min(1).max(280)
    })
  ).mutation(async ({ ctx, input }) => {
    const authorId = ctx.userId;
    const post = await ctx.db.insert(mech).values({
      id: void 0,
      authorId,
      content: input.content
    }).execute();
    return post;
  })
});
const profileRouter = createTRPCRouter({
  getUserByUsername: publicProcedure.input(z.object({ username: z.string() })).query(async ({ input }) => {
    const [user] = await db.users.getUserList({
      username: [input.username]
    });
    if (!user) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "User not found"
      });
    }
    return user;
  })
});
const appRouter = createTRPCRouter({
  mechs: mechsRouter,
  profile: profileRouter
});
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          return i < length - 1 ? apply_handle(i + 1, event3, { transformPageChunk }) : resolve(event3, { transformPageChunk });
        }
      });
    }
  };
}
const handle = sequence(
  createTRPCHandle({ router: appRouter, createContext: createTRPCContext }),
  async ({ event, resolve }) => {
    const res = await resolve(event);
    return res;
  }
);
export {
  handle
};
