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
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1rbck8i{padding:1rem 0rem 2rem}p.svelte-1rbck8i{padding:1rem 0rem}.img-container.svelte-1rbck8i{width:100%}img.svelte-1rbck8i{width:100%;border-radius:1rem}.movie-details.svelte-1rbck8i{margin:2rem 20%}span.svelte-1rbck8i{font-weight:bold}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${"de2c51f440418b70b539c039e316b8b4"}&language=en-US`);
  const movieDetail = await res.json();
  if (res.ok) {
    return { props: { movieDetail } };
  }
}
const U5Bidu5D = (0, import_index_310c2c62.c)(($$result, $$props, $$bindings, slots) => {
  let { movieDetail } = $$props;
  if ($$props.movieDetail === void 0 && $$bindings.movieDetail && movieDetail !== void 0)
    $$bindings.movieDetail(movieDetail);
  $$result.css.add(css);
  return `<div class="${"movie-details svelte-1rbck8i"}"><div class="${"img-container svelte-1rbck8i"}"><img${(0, import_index_310c2c62.b)("src", "https://image.tmdb.org/t/p/original" + movieDetail.backdrop_path, 0)}${(0, import_index_310c2c62.b)("alt", movieDetail.title, 0)} class="${"svelte-1rbck8i"}"></div>
    <div class="${"txt-container"}"><h1 class="${"svelte-1rbck8i"}">${(0, import_index_310c2c62.e)(movieDetail.title)}</h1>
        <p class="${"overview svelte-1rbck8i"}">${(0, import_index_310c2c62.e)(movieDetail.overview)}</p>
        <p class="${"svelte-1rbck8i"}"><span class="${"svelte-1rbck8i"}">Release date:</span>${(0, import_index_310c2c62.e)(movieDetail.release_date)} <br>
            <span class="${"svelte-1rbck8i"}">Budget:</span> $${(0, import_index_310c2c62.e)(movieDetail.budget)} <br>
            <span class="${"svelte-1rbck8i"}">Rating:</span> $${(0, import_index_310c2c62.e)(movieDetail.vote_average)} <br>
            <span class="${"svelte-1rbck8i"}">Runtime:</span> $${(0, import_index_310c2c62.e)(movieDetail.runtime)} <br></p></div>
</div>`;
});
