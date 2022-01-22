var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => U5Bidu5D,
  load: () => load
});
var import_index_310c2c62 = __toModule(require("../../../chunks/index-310c2c62.js"));
var import_MovieCard_9fd85cd2 = __toModule(require("../../../chunks/MovieCard-9fd85cd2.js"));
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".searched-movies.svelte-kgt10w{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px,1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${"de2c51f440418b70b539c039e316b8b4"}&language=en-US&query=${params.id}&page=1&include_adult=false`);
  const data = await res.json();
  if (res.ok) {
    return { props: { searchedMovie: data.results } };
  }
}
const U5Bidu5D = (0, import_index_310c2c62.c)(($$result, $$props, $$bindings, slots) => {
  let { searchedMovie } = $$props;
  if ($$props.searchedMovie === void 0 && $$bindings.searchedMovie && searchedMovie !== void 0)
    $$bindings.searchedMovie(searchedMovie);
  $$result.css.add(css);
  return `<div class="${"searched-movies svelte-kgt10w"}">${(0, import_index_310c2c62.a)(searchedMovie, (movie) => {
    return `${(0, import_index_310c2c62.v)(import_MovieCard_9fd85cd2.M, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
