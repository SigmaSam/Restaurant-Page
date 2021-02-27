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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ \"./src/modules/page.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\n\nconst addNavEvents =() => {\n  const homeBtn = document.getElementById('home');\n  const menuBtn = document.getElementById('menu');\n  const contactBtn = document.getElementById('contact');\n\n  homeBtn.addEventListener('click', _modules_home__WEBPACK_IMPORTED_MODULE_1__.default);\n  menuBtn.addEventListener('click', _modules_menu__WEBPACK_IMPORTED_MODULE_2__.default);\n  contactBtn.addEventListener('click', _modules_contact__WEBPACK_IMPORTED_MODULE_3__.default);\n}\n\nconst skeleton = ()=> {\n  ;(0,_modules_page__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n  (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n  addNavEvents();\n}\n\nskeleton();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setSwap = (id) => {\n  const actBtn = document.querySelector('.tab.active');\n  if (actBtn) actBtn.classList.remove('active');\n\n  const homeBtn = document.getElementById(id);\n  homeBtn.classList.add('active');\n}\n\nconst addSection = (name, data) => {\n  const section = document.createElement('section');\n  section.className = 'section font-mono mt-5 capitalize mx-5';\n\n  const title = document.createElement('h2');\n  title.className = ' font-bold text-4xl';\n  title.textContent = name;\n  section.appendChild(title);\n\n  data.forEach((d) => {\n    const info = document.createElement('p');\n    info.className = '';\n    info.textContent = d;\n    section.appendChild(info);\n  });\n\n  return section;\n}\n\nconst contact = () => {\n  const content = document.getElementById('tab-content');\n\n  content.textContent = '';\n\n  const section = document.createElement('section');\n  section.className = 'w-screen text-center flex justify-center';\n  content.appendChild(section);\n\n\n  setSwap('contact');\n\n  const phone = addSection('Phones', ['1234-567-8910',\n    '1234-567-8910']);\n\n  const address = addSection('address', ['somewhere arround']);\n\n  section.appendChild(phone);\n  section.appendChild(address);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setSwap = (id) => {\n  const actBtn = document.querySelector('.tab.active');\n  if (actBtn) actBtn.classList.remove('active');\n\n  const homeBtn = document.getElementById(id);\n  homeBtn.classList.add('active');\n}\n\nconst  addAbout = () => {\n  const about = document.createElement('section');\n  about.className = ('section w-screen flex flex-col items-center text-center border-t-2 border-black');\n\n  const title = document.createElement('h2');\n  title.className = ('section-title text-5xl font-bold mt-5 mb-6 font-mono');\n  title.textContent = ('Who are we?');\n\n  about.appendChild(title);\n\n  const filler = document.createElement('p');\n  filler.className = 'section-filler font-mono w-2/3';\n  filler.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium porro dolor modi rem! Provident iure eligendi tempore. Ducimus dolorem iure aperiam incidunt iste nostrum perspiciatis molestiae veniam praesentium repellendus ut ipsum quasi doloribus adipisci non, quaerat nesciunt rem delectus quia numquam? Architecto ea vero earum reprehenderit ab? Magnam, delectus.';\n\n  about.appendChild(filler);\n  return about;\n}\n\nconst about = () => {\n  const content = document.getElementById('tab-content');\n\n  content.textContent = '';\n\n  const aboutSection = addAbout();\n\n  setSwap('home');\n\n  content.appendChild(aboutSection);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setSwap = (id) => {\n  const actBtn = document.querySelector('.tab.active');\n  if (actBtn) actBtn.classList.remove('active');\n\n  const homeBtn = document.getElementById(id);\n  homeBtn.classList.add('active');\n}\n\nconst addDish = (src, text, price, alt) => {\n  const dish = document.createElement('div');\n  dish.className = 'food p-2 m2';\n\n  const img = document.createElement('img');\n  img.setAttribute('src', src);\n  img.setAttribute('alt', alt);\n  img.className = 'rounded ring ring-black max-h-40 min-w-60';\n\n  const filler = document.createElement('div');\n  filler.className = 'description text-center font-mono';\n\n  const name = document.createElement('h3');\n  name.textContent = text;\n  name.className = 'font-bold capitalize';\n\n  const cost = document.createElement('h2');\n  cost.textContent = price;\n\n  filler.appendChild(name);\n  filler.appendChild(cost);\n\n  dish.appendChild(img);\n  dish.appendChild(filler);\n\n  return dish;\n}\n\nconst menu = () => {\n  const content = document.getElementById('tab-content');\n  content.textContent = '';\n\n  const gridBox = document.createElement('div');\n  gridBox.className = ' mt-2 w-screen grid grid-cols-3 justify-items-center';\n\n  content.appendChild(gridBox);\n\n  setSwap('menu');\n\n  const dishes = [\n    addDish(\n      'https://picsum.photos/200/200',\n      'lorem Ipsum',\n      '999',\n      'Lorem Ipsum Coffee',\n    ),\n    addDish(\n      'https://picsum.photos/200/200',\n      'lorem Ipsum',\n      '999',\n      'Lorem Ipsum Coffee',\n    ),\n    addDish(\n      'https://picsum.photos/200/200',\n      'lorem Ipsum',\n      '999',\n      'Lorem Ipsum Coffee',\n    ),\n    addDish(\n      'https://picsum.photos/200/200',\n      'lorem Ipsum',\n      '999',\n      'Lorem Ipsum Coffee',\n    ),\n    addDish(\n      'https://picsum.photos/200/200',\n      'lorem Ipsum',\n      '999',\n      'Lorem Ipsum Coffee',\n    ),\n  ];\n\n  dishes.forEach((dish) => {\n    gridBox.appendChild(dish);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addHeader = (id) => {\n  const header = document.createElement('header');\n  header.setAttribute('id', id);\n  header.className = 'min-w-full bg-red-700';\n  const logo = document.createElement('h1');\n  logo.textContent = 'Restaurant';\n  logo.className = 'text-center text-7xl my-2 font-serif italic font-extrabold ';\n  header.appendChild(logo);\n\n  return header;\n}\n\nconst addBtn = (id, text) => {\n  const btn = document.createElement('button');\n  btn.setAttribute('id', id);\n  btn.innerHTML = text;\n  btn.className = 'bg-yellow-400 px-4 py-2 mx-5 rounded border-2 border-black ring ring-white my-2 font-bold capitalize italic';\n\n  return btn;\n}\n\nconst addNav = (id) => {\n  const nav = document.createElement('nav');\n  nav.setAttribute('id', id);\n  nav.className = 'flex justify-around';\n\n  const homeBtn = addBtn('home', 'home');\n  const menuBtn = addBtn('menu', 'menu');\n  const contactBtn = addBtn('contact', 'contact');\n\n  nav.appendChild(homeBtn);\n  nav.appendChild(menuBtn);\n  nav.appendChild(contactBtn);\n  return nav;\n}\n\nconst addMain = (id) => {\n  const main = document.createElement('main');\n  main.setAttribute('id', id);\n  main.className = 'bg-gray-200 h-full';\n  return main;\n}\n\nconst  addFooter = (id, text) => {\n  const footer = document.createElement('footer');\n  footer.setAttribute('id', id);\n  const h3 = document.createElement('h3');\n  const link = document.createElement('h3');\n  link.innerHTML = \"<a href='https://github.com/SigmaSam' target='_blank'>Samuel Almao</a>\";\n\n  footer.className = 'bg-yellow-500 w-screen text-center font-mono';\n  h3.textContent = text;\n  footer.appendChild(h3);\n\n  footer.appendChild(link);\n\n  return footer;\n}\n\nconst render = () => {\n  const content = document.getElementById('content');\n  content.className = 'min-w-full h-screen flex flex-col items-center';\n\n  const header = addHeader('header');\n  content.appendChild(header);\n\n  const nav = addNav('nav');\n  header.appendChild(nav);\n\n  const tabContent = addMain('tab-content');\n  content.appendChild(tabContent);\n\n  const footer = addFooter('footer', 'Made with Coffe, Mate and a touch of JavaScript by');\n\n\n  content.appendChild(footer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/page.js?");

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