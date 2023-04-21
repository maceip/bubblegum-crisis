import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { mechs, type Mech } from '$lib/db'
import { createTRPCRouter, privateProcedure, publicProcedure } from '~/server/api/trpc'

// import { Ratelimit } from '@upstash/ratelimit' // for deno: see above
// import { Redis } from '@upstash/redis'

const addUserDataToMechs = async (Mechs: Mech[]) => {
    return {}
}

// Create a new ratelimiter, that allows 3 requests per 1 minute
// const ratelimit = new Ratelimit({
//   redis: Redis.fromEnv(),
//   limiter: Ratelimit.slidingWindow(3, '1 m'),
//   analytics: true,
// })

export const mechsRouter = createTRPCRouter({
  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    const queryMechs = await ctx.db.select().from(Mechs).where(eq(Mechs.id, input.id)).limit(1)

    if (!queryMechs[0]) throw new TRPCError({ code: 'NOT_FOUND' })

    return (await addUserDataToMechs(queryMechs))[0]
  }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const queryMechs = await ctx.db.select().from(mechs).limit(100).orderBy(desc(mechs.createdAt))

    return addUserDataToMechs(queryMechs)
  }),

  getMechsByUserId: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(({ ctx, input }) =>
      ctx.db
        .select()
        .from(mechs)
        .where(eq(mechs.authorId, input.userId))
        .limit(100)
        .orderBy(desc(mechs.createdAt))
        .then(addUserDataToMechs)
    ),

  create: privateProcedure
    .input(
      z.object({
        content: z.string().emoji('Only emojis are allowed').min(1).max(280),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId

      // const { success } = await ratelimit.limit(authorId)
      // if (!success) throw new TRPCError({ code: 'TOO_MANY_REQUESTS' })

      const post = await ctx.db
        .insert(mechs)
        .values({
          id: undefined,
          authorId,
          content: input.content,
        })
        .execute()

      return post
    }),
})