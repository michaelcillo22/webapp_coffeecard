"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_cup2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/cup2.jpg */ \"./public/cup2.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_cup2_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  /* background-color: var(--color-lightbrown); */\\n}\\n\\n:root {\\n  --color-primary: #000000;\\n  --color-secondary: #40312e;\\n  --color-coffee: #6a513b;\\n  --color-white: #ffffff;\\n  --color-lightbrown: #fffdf1;\\n  --box-shadow-1: 0 3px 15px rgba(0, 0, 0, 0.2);\\n  --background-image-1: linear-gradient(\\n    to bottom,\\n    #fffdf1,\\n    #f9f6e2,\\n    #fef7cf,\\n    #d8d1a5,\\n    #c6bc82\\n  );\\n}\\n\\n.bg-img {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-position: center;\\n  box-shadow: var(--box-shadow-1);\\n}\\n\\n/* LANDING */\\n\\n.ld-btn {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 200px;\\n  align-items: center;\\n}\\n\\n/*BUTTON STYLE*/\\n.btn-style {\\n  background-color: '#6a513b';\\n  color: 'white';\\n}\\n\\n/*Spinner*/\\n\\n.spinner {\\n  animation: spinner 6s linear infinite;\\n}\\n\\n@keyframes spinner {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n/*Navbar*/\\n\\n.navbar-toggler {\\n  border: none;\\n}\\n\\n/*CUP page*/\\n\\n.box {\\n  position: relative;\\n  background: #40312e;\\n  outline: 0;\\n  overflow: hidden;\\n  /* border-bottom-right-radius: 5px;\\n  border-bottom-left-radius: 5px; */\\n  color: var(--color-white);\\n}\\n\\n.box::before {\\n  /* content: 'fill'; */\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.box::after {\\n  content: '';\\n  position: absolute;\\n  height: 700px;\\n  width: 700px;\\n  background-color: white;\\n  bottom: -50%;\\n  left: -50%;\\n  border-radius: 40%;\\n  animation: spin 6s ease-in-out infinite;\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: translateY(0) rotate(0deg);\\n  }\\n  100% {\\n    transform: translateY(-100%) rotate(500deg);\\n  }\\n}\\n\\n/*CARDS*/\\n\\n.cards {\\n  margin-top: 500px;\\n}\\n\\n.card {\\n  margin-top: -5rem;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;AACxE;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,+CAA+C;AACjD;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,2BAA2B;EAC3B,6CAA6C;EAC7C;;;;;;;GAOC;AACH;;AAEA;EACE,yDAA2C;EAC3C,sBAAsB;EACtB,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;AACrB;;AAEA,eAAe;AACf;EACE,2BAA2B;EAC3B,cAAc;AAChB;;AAEA,UAAU;;AAEV;EACE,qCAAqC;AACvC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA,SAAS;;AAET;EACE,YAAY;AACd;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,gBAAgB;EAChB;mCACiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE;IACE,qCAAqC;EACvC;EACA;IACE,2CAA2C;EAC7C;AACF;;AAEA,QAAQ;;AAER;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  /* background-color: var(--color-lightbrown); */\\n}\\n\\n:root {\\n  --color-primary: #000000;\\n  --color-secondary: #40312e;\\n  --color-coffee: #6a513b;\\n  --color-white: #ffffff;\\n  --color-lightbrown: #fffdf1;\\n  --box-shadow-1: 0 3px 15px rgba(0, 0, 0, 0.2);\\n  --background-image-1: linear-gradient(\\n    to bottom,\\n    #fffdf1,\\n    #f9f6e2,\\n    #fef7cf,\\n    #d8d1a5,\\n    #c6bc82\\n  );\\n}\\n\\n.bg-img {\\n  background-image: url('../public/cup2.jpg');\\n  background-size: cover;\\n  background-position: center;\\n  box-shadow: var(--box-shadow-1);\\n}\\n\\n/* LANDING */\\n\\n.ld-btn {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 200px;\\n  align-items: center;\\n}\\n\\n/*BUTTON STYLE*/\\n.btn-style {\\n  background-color: '#6a513b';\\n  color: 'white';\\n}\\n\\n/*Spinner*/\\n\\n.spinner {\\n  animation: spinner 6s linear infinite;\\n}\\n\\n@keyframes spinner {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n/*Navbar*/\\n\\n.navbar-toggler {\\n  border: none;\\n}\\n\\n/*CUP page*/\\n\\n.box {\\n  position: relative;\\n  background: #40312e;\\n  outline: 0;\\n  overflow: hidden;\\n  /* border-bottom-right-radius: 5px;\\n  border-bottom-left-radius: 5px; */\\n  color: var(--color-white);\\n}\\n\\n.box::before {\\n  /* content: 'fill'; */\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.box::after {\\n  content: '';\\n  position: absolute;\\n  height: 700px;\\n  width: 700px;\\n  background-color: white;\\n  bottom: -50%;\\n  left: -50%;\\n  border-radius: 40%;\\n  animation: spin 6s ease-in-out infinite;\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: translateY(0) rotate(0deg);\\n  }\\n  100% {\\n    transform: translateY(-100%) rotate(500deg);\\n  }\\n}\\n\\n/*CARDS*/\\n\\n.cards {\\n  margin-top: 500px;\\n}\\n\\n.card {\\n  margin-top: -5rem;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ3dIO0FBQ087QUFDaEU7QUFDL0QsOEJBQThCLGtIQUEyQjtBQUN6RCx5Q0FBeUMscUhBQStCLENBQUMsNkNBQTZCO0FBQ3RHO0FBQ0EsdURBQXVELGVBQWUsY0FBYyx3SkFBd0osR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxPQUFPLDJCQUEyQixrREFBa0QsS0FBSyxXQUFXLDZCQUE2QiwrQkFBK0IsNEJBQTRCLDJCQUEyQixnQ0FBZ0Msa0RBQWtELHFJQUFxSSxHQUFHLGFBQWEsc0VBQXNFLDJCQUEyQixnQ0FBZ0Msb0NBQW9DLEdBQUcsOEJBQThCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLGtCQUFrQix3QkFBd0IsR0FBRyxrQ0FBa0MsZ0NBQWdDLG1CQUFtQixHQUFHLDZCQUE2QiwwQ0FBMEMsR0FBRyx3QkFBd0IsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUcsbUNBQW1DLGlCQUFpQixHQUFHLDBCQUEwQix1QkFBdUIsd0JBQXdCLGVBQWUscUJBQXFCLHVDQUF1QyxvQ0FBb0MsZ0NBQWdDLEdBQUcsa0JBQWtCLHdCQUF3QixrQkFBa0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsaUJBQWlCLGdCQUFnQix1QkFBdUIsa0JBQWtCLGlCQUFpQiw0QkFBNEIsaUJBQWlCLGVBQWUsdUJBQXVCLDRDQUE0QyxHQUFHLHFCQUFxQixRQUFRLDRDQUE0QyxLQUFLLFVBQVUsa0RBQWtELEtBQUssR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUcsV0FBVyxzQkFBc0IsR0FBRyxTQUFTLG9GQUFvRixVQUFVLFVBQVUsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksdUNBQXVDLGVBQWUsY0FBYyx3SkFBd0osR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxPQUFPLDJCQUEyQixrREFBa0QsS0FBSyxXQUFXLDZCQUE2QiwrQkFBK0IsNEJBQTRCLDJCQUEyQixnQ0FBZ0Msa0RBQWtELHFJQUFxSSxHQUFHLGFBQWEsZ0RBQWdELDJCQUEyQixnQ0FBZ0Msb0NBQW9DLEdBQUcsOEJBQThCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLGtCQUFrQix3QkFBd0IsR0FBRyxrQ0FBa0MsZ0NBQWdDLG1CQUFtQixHQUFHLDZCQUE2QiwwQ0FBMEMsR0FBRyx3QkFBd0IsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUcsbUNBQW1DLGlCQUFpQixHQUFHLDBCQUEwQix1QkFBdUIsd0JBQXdCLGVBQWUscUJBQXFCLHVDQUF1QyxvQ0FBb0MsZ0NBQWdDLEdBQUcsa0JBQWtCLHdCQUF3QixrQkFBa0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsaUJBQWlCLGdCQUFnQix1QkFBdUIsa0JBQWtCLGlCQUFpQiw0QkFBNEIsaUJBQWlCLGVBQWUsdUJBQXVCLDRDQUE0QyxHQUFHLHFCQUFxQixRQUFRLDRDQUE0QyxLQUFLLFVBQVUsa0RBQWtELEtBQUssR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUcsV0FBVyxzQkFBc0IsR0FBRyxxQkFBcUI7QUFDajBLO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzRiNTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvY3VwMi5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0YnJvd24pOyAqL1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXByaW1hcnk6ICMwMDAwMDA7XFxuICAtLWNvbG9yLXNlY29uZGFyeTogIzQwMzEyZTtcXG4gIC0tY29sb3ItY29mZmVlOiAjNmE1MTNiO1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItbGlnaHRicm93bjogI2ZmZmRmMTtcXG4gIC0tYm94LXNoYWRvdy0xOiAwIDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIC0tYmFja2dyb3VuZC1pbWFnZS0xOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSxcXG4gICAgI2ZmZmRmMSxcXG4gICAgI2Y5ZjZlMixcXG4gICAgI2ZlZjdjZixcXG4gICAgI2Q4ZDFhNSxcXG4gICAgI2M2YmM4MlxcbiAgKTtcXG59XFxuXFxuLmJnLWltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctMSk7XFxufVxcblxcbi8qIExBTkRJTkcgKi9cXG5cXG4ubGQtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qQlVUVE9OIFNUWUxFKi9cXG4uYnRuLXN0eWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICcjNmE1MTNiJztcXG4gIGNvbG9yOiAnd2hpdGUnO1xcbn1cXG5cXG4vKlNwaW5uZXIqL1xcblxcbi5zcGlubmVyIHtcXG4gIGFuaW1hdGlvbjogc3Bpbm5lciA2cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qTmF2YmFyKi9cXG5cXG4ubmF2YmFyLXRvZ2dsZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKkNVUCBwYWdlKi9cXG5cXG4uYm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICM0MDMxMmU7XFxuICBvdXRsaW5lOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7ICovXFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4uYm94OjpiZWZvcmUge1xcbiAgLyogY29udGVudDogJ2ZpbGwnOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm94OjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNzAwcHg7XFxuICB3aWR0aDogNzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvdHRvbTogLTUwJTtcXG4gIGxlZnQ6IC01MCU7XFxuICBib3JkZXItcmFkaXVzOiA0MCU7XFxuICBhbmltYXRpb246IHNwaW4gNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSByb3RhdGUoNTAwZGVnKTtcXG4gIH1cXG59XFxuXFxuLypDQVJEUyovXFxuXFxuLmNhcmRzIHtcXG4gIG1hcmdpbi10b3A6IDUwMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBtYXJnaW4tdG9wOiAtNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNUO3dFQUNzRTtBQUN4RTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw2Q0FBNkM7RUFDN0M7Ozs7Ozs7R0FPQztBQUNIOztBQUVBO0VBQ0UseURBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBLGVBQWU7QUFDZjtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLFlBQVk7QUFDZDs7QUFFQSxXQUFXOztBQUVYO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCO21DQUNpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7RUFDQTtJQUNFLDJDQUEyQztFQUM3QztBQUNGOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodGJyb3duKTsgKi9cXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjMDAwMDAwO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICM0MDMxMmU7XFxuICAtLWNvbG9yLWNvZmZlZTogIzZhNTEzYjtcXG4gIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XFxuICAtLWNvbG9yLWxpZ2h0YnJvd246ICNmZmZkZjE7XFxuICAtLWJveC1zaGFkb3ctMTogMCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAtLWJhY2tncm91bmQtaW1hZ2UtMTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBib3R0b20sXFxuICAgICNmZmZkZjEsXFxuICAgICNmOWY2ZTIsXFxuICAgICNmZWY3Y2YsXFxuICAgICNkOGQxYTUsXFxuICAgICNjNmJjODJcXG4gICk7XFxufVxcblxcbi5iZy1pbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvY3VwMi5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LTEpO1xcbn1cXG5cXG4vKiBMQU5ESU5HICovXFxuXFxuLmxkLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKkJVVFRPTiBTVFlMRSovXFxuLmJ0bi1zdHlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAnIzZhNTEzYic7XFxuICBjb2xvcjogJ3doaXRlJztcXG59XFxuXFxuLypTcGlubmVyKi9cXG5cXG4uc3Bpbm5lciB7XFxuICBhbmltYXRpb246IHNwaW5uZXIgNnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKk5hdmJhciovXFxuXFxuLm5hdmJhci10b2dnbGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLypDVVAgcGFnZSovXFxuXFxuLmJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjNDAzMTJlO1xcbiAgb3V0bGluZTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvKiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4OyAqL1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuLmJveDo6YmVmb3JlIHtcXG4gIC8qIGNvbnRlbnQ6ICdmaWxsJzsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJveDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDcwMHB4O1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3R0b206IC01MCU7XFxuICBsZWZ0OiAtNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNDAlO1xcbiAgYW5pbWF0aW9uOiBzcGluIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgcm90YXRlKDUwMGRlZyk7XFxuICB9XFxufVxcblxcbi8qQ0FSRFMqL1xcblxcbi5jYXJkcyB7XFxuICBtYXJnaW4tdG9wOiA1MDBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgbWFyZ2luLXRvcDogLTVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css\n"));

/***/ })

});