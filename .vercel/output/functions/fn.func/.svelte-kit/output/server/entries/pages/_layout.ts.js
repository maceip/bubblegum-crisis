import { B as BROWSER } from "../../chunks/prod-ssr.js";
import { Q as QueryClient } from "../../chunks/queryClient.esm.js";
const browser = BROWSER;
const load = async ({ data }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser
      }
    }
  });
  return { ...data, queryClient };
};
const ssr = false;
export {
  load,
  ssr
};
