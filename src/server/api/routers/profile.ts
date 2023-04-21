import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import db from "$lib/db";
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const profileRouter = createTRPCRouter({
  getUserByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const [user] = await db.users.getUserList({
        username: [input.username],
      })

      if (!user) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'User not found',
        })
      }

      return user
    }),
})