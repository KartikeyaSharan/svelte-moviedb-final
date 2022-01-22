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
  default: () => Routes,
  load: () => load
});
var import_index_310c2c62 = __toModule(require("../../chunks/index-310c2c62.js"));
var import_MovieCard_9fd85cd2 = __toModule(require("../../chunks/MovieCard-9fd85cd2.js"));
var PopularMovies_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h3.svelte-sfv56a{padding:0 1rem}.popular-movies.svelte-sfv56a{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px,1fr));grid-column-gap:1rem;grid-row-gap:2rem}",
  map: null
};
const PopularMovies = (0, import_index_310c2c62.c)(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  $$result.css.add(css$1);
  return `<h3 class="${"svelte-sfv56a"}">Popular Movies</h3>

<div class="${"popular-movies svelte-sfv56a"}">${(0, import_index_310c2c62.a)(popular, (movie) => {
    return `${(0, import_index_310c2c62.v)(import_MovieCard_9fd85cd2.M, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
var SearchMovies_svelte_svelte_type_style_lang = "";
const css = {
  code: ".search.svelte-lip0sd{position:relative;width:30%;margin:1rem}button.svelte-lip0sd{font-size:0.7rem;padding:0rem 1rem;background:rgb(96,110,201);color:white;font-weight:bold;border:none;position:absolute;bottom:50%;right:0;transform:translate(0,50%);height:100%;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer}input.svelte-lip0sd{width:100%;border:none;font-size:1rem;font-family:'Poppins',sans-serif;outline:none;color:rgb(255, 255, 255);padding:0.5rem 0.1rem;transition:background 0.75s ease-out;font-weight:bold;background:rgb(63,63,63);border-radius:10px;padding:1rem}label.svelte-lip0sd{position:absolute;font-size:0.8rem;top:40%;left:0;transform:translate(0, -50);pointer-events:none;color:#fff;padding:0rem 1rem}input.selected.svelte-lip0sd{background:rgb(50, 50, 50)}",
  map: null
};
const SearchMovies = (0, import_index_310c2c62.c)(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  $$result.css.add(css);
  return `<form class="${"search svelte-lip0sd"}">${`<label for="${"search_movie"}" class="${"svelte-lip0sd"}">Search Movie</label>`}
    <input name="${"search_movie"}" type="${"text"}" class="${(0, import_index_310c2c62.e)((0, import_index_310c2c62.n)("")) + " svelte-lip0sd"}"${(0, import_index_310c2c62.b)("value", inputValue, 0)}>

    ${``}
</form>`;
});
async function load({ fetch }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${"de2c51f440418b70b539c039e316b8b4"}&language=en-US&page=1`);
  const data = await res.json();
  if (res.ok) {
    return { props: { popular: data.results } };
  }
}
const Routes = (0, import_index_310c2c62.c)(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<section>${(0, import_index_310c2c62.v)(SearchMovies, "SearchMovies").$$render($$result, {}, {}, {})}
    ${(0, import_index_310c2c62.v)(PopularMovies, "PopularMovies").$$render($$result, { popular }, {}, {})}</section>`;
});
