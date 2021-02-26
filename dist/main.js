/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page.js */ \"./src/modules/page.js\");\n\n\nfunction skeleton() {\n    (0,_modules_page_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\nskeleton();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addHeader(id) {\n    const header = document.createElement('header');\n    header.setAttribute('id',id);\n    const logo = document.createElement('h1');\n    logo.textContent = 'Restaurant';\n    logo.className = 'text-7xl my-2 font-serif italic font-extrabold'\n    header.appendChild(logo);\n    \n    return header;\n}\n\nfunction addBtn(id, text) {\n    const btn = document.createElement('button');\n    btn.setAttribute('id', id);\n    btn.innerHTML = text;\n    btn.className = 'bg-yellow-400 px-4 py-2 mx-5 rounded border-2 border-black ring ring-white my-2 font-bold capitalize italic';\n    \n    return btn;\n}\n\nfunction addNav(id) {\n    const nav = document.createElement('nav');\n    nav.setAttribute('id', id);\n    nav.className = 'flex justify-between w-100'\n\n    const homeBtn = addBtn('home', 'home');\n    const menuBtn = addBtn('menu', 'menu');\n    const contactBtn = addBtn('contact', 'contact');\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    return nav;\n}\n\nfunction addMain(id) {\n    const main = document.createElement('main');\n    main.setAttribute('id', id);\n    return main;\n}\n\nfunction addFooter(id, text) {\n    const footer = document.createElement('footer');\n    footer.setAttribute('id', id);\n    const h3 = document.createElement('h3');\n    h3.textContent = text;\n    footer.appendChild(h3);\n    return footer;\n}\n\nfunction render() {\n    const content = document.getElementById('content');\n    content.className = 'min-w-full bg-red-700 flex flex-col items-center'\n    \n    const header = addHeader('header');\n    content.appendChild(header);\n\n    const nav = addNav('nav');\n    content.appendChild(nav);\n\n    const tabContent = addMain('tab-content');\n    content.appendChild(tabContent);\n    const footer = addFooter('footer', 'Made with a lot of coofee and selfdoubt');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;