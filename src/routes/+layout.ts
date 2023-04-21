import { QueryClient } from '@tanstack/svelte-query'
import { browser } from '$app/environment'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ data }) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          enabled: browser,
        },
      },
    })
  
    return { ...data, queryClient }
  }
  
export const ssr = false;
