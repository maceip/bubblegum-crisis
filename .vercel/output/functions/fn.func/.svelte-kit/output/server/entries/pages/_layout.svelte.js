import { s as setContext, c as create_ssr_component, o as onDestroy, v as validate_component } from "../../chunks/index2.js";
import { Q as QueryClient } from "../../chunks/queryClient.esm.js";
const app = "";
const _contextKey = "$$_queryClient";
const setQueryClientContext = (client) => {
  setContext(_contextKey, client);
};
const QueryClientProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { client = new QueryClient() } = $$props;
  setQueryClientContext(client);
  onDestroy(() => {
    client.unmount();
  });
  if ($$props.client === void 0 && $$bindings.client && client !== void 0)
    $$bindings.client(client);
  return `${slots.default ? slots.default({}) : ``}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "html, body{height:100vh;width:100vw}canvas{image-rendering:crisp-edges}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(QueryClientProvider, "QueryClientProvider").$$render($$result, { client: data.queryClient }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
