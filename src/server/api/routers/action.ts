import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export interface Action {
    actionID?: string;
    description: string;
    checked: boolean;
  }
  
  export type Actions = Action[];

  const actionAPI = import.meta.env.VITE_ACTION_API;


export const actionRouter = createTRPCRouter({
  createAction: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }:Action) => {
        return fetch(`${actionAPI}/todo`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          });
    }),
    getAction: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
        return fetch(`${actionAPI}/todo`, {
            credentials: "include",
          });
    }),
    updateAction: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
        return fetch(`${actionAPI}/todo/${input.id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({input.checked}),
          });
    }),
    deleteAction: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => { 
        return fetch(`${actionAPI}/todo/${input.id}`, {
            method: "DELETE",
            credentials: "include",
          });

    }),
    logoutAction: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ }) => {
        return fetch(`${actionAPI}/logout`, {
            credentials: "include",
          });
    }),
})