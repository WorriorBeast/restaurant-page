/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./dark-chocolate-tile-pieces-covered-chocolate-powder.jpeg */ "./src/dark-chocolate-tile-pieces-covered-chocolate-powder.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./lava-cake.jpeg */ "./src/lava-cake.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./white-dough-tamara-gak-unsplash.jpeg */ "./src/white-dough-tamara-gak-unsplash.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./ceo-profile-pic.jpeg */ "./src/ceo-profile-pic.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
   font-size: 16px;
   font-family: Verdana, Arial, sans-serif, Georgia, Garamond, serif;
   --tab-color: aliceblue;
   --content-background-color: #d9f6ff;
   --minimum-width: 401px;
   --content-container-width:max(60vw, var(--minimum-width));
}

html, body {
   height: 100%;
}

body {
   margin: 0;
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
   background-attachment: fixed;
   background-size: contain;
}

header {
   height: 100px;
   display: grid;
   justify-content: center;
   min-width: var(--minimum-width);
}

nav {
   display: grid;
   grid-template-columns: repeat(3, minmax(88px, 1fr));
   align-items: end;
}

button {
   background-color: var(--tab-color);
   height: 50px;
   border-bottom: none;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   font-size: 1rem;
   padding: 0;
   cursor: pointer;
   border: none;
   position: relative;
}

button::before {
   content: "";
   position: absolute;
   bottom: 0;
   left: -19px;
   height: 20px;
   width: 20px;
   pointer-events: none;
}

button::after {
   content: "";
   position: absolute;
   bottom: 0;
   right: -20px;
   height: 20px;
   width: 20px;
   pointer-events: none;
}

button:hover {
   background-color: #89ddf8;
}

#home::before,
#home::after {
   background-color: transparent;
}

#menu::before,
#menu::after {
   background-color: transparent;
}

#about::before,
#about::after {
   background-color: transparent;
}

.tab-curve {
   position: absolute;
   box-sizing: border-box;
   border-style: solid;
   border-width: 20px;
   border-radius: 50%;
   pointer-events: none;
}

.home-left-circle {
   border-color: transparent;
   transform: rotate(45deg);
}

.home-right-circle {
   border-color: transparent;
   transform: rotate(135deg);

}

.menu-left-circle {
   border-color: transparent;
   transform: rotate(45deg);
}

.menu-right-circle {
   border-color: transparent;
   transform: rotate(45deg);
}

.about-left-circle {
   border-color: transparent;
   transform: rotate(45deg);
}

.about-right-circle {
   border-color: transparent;
   transform: rotate(45deg);
}

#home.selected-home::before,
#home.selected-home::after,
#menu.selected-menu::before,
#menu.selected-menu::after,
#about.selected-about::before,
#about.selected-about::after {
   background-color: var(--content-background-color);
}

#home.selected-home::after,
#menu.selected-menu::after,
#about.selected-about::after {
   z-index: 1;
}

#content {
   height: fit-content;
   width: var(--content-container-width);
   min-width: var(--minimum-width);
   margin-left: max(calc(calc(100vw - var(--content-container-width)) / 2), 0px);
   background-color: var(--content-background-color);
   border-radius: 20px;
   margin-bottom: 5vh;
   line-height: 1.6;
   padding: 20px 25px;
}

.home-header {
   text-align: center;
   color: var(--content-background-color);
   margin: 0;
   font-size: 5rem;
   font-family: cursive;
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
   height: 300px;
   border-radius: 20px;
   background-position: center;
   background-repeat: no-repeat;
   box-shadow: 0px 10px 20px 0px #434242;
   overflow: hidden;
   max-width: 1000px;
}

.home-intro {
   margin-top: 30px;
}

.home-review {
   display: block;
   font-size: 0.8rem;
}

.home-reviewer-name {
   display: block;
   font-size: 1rem;
   margin-top: 10px;
}

ul {
   padding: 0;
   line-height: 2;
}

li {
   list-style: none;
}

img {
   height: auto;
   width: 300px;
   max-height: 350px;
   border-radius: 20px;
}

.food-container {
   display: grid;
   justify-items: center;
   position: relative;
}

.food-container::after {
   content: '';
   border: 1px solid black;
   width: calc(var(--content-container-width) * 0.7);
   position: relative;
   bottom: 20px;
   min-width: 400px;
}

.food-container:last-child::after {
   border: none;
}

.food-name {
   font-family: 'Comic Sans MS', cursive;
   font-size: 1.6rem;
}

.food-description {
   max-width: 450px;
}

.food-price {
   margin-bottom: 45px;
   width: calc(var(--content-container-width) - 25px);
   max-width: 450px;
   text-align: end;
   font-family: Luminari, fantasy;
}

.about-header {
   background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
   color: var(--content-background-color);
   background-repeat: no-repeat;
   background-size: cover;
   height: 300px;
   margin: 0px;
   border-radius: 20px 20px 0 0;
   padding-left: 15px;
}

.letter {
   background-color: white;
   padding-bottom: 15px;
}

.letter-header {
   display: grid;
   grid-template-columns: 150px 1fr;
   grid-template-areas: "pic name"
                        "pic title";
   align-items: end;
}

.ceo-pic {
   background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
   width: 150px;
   height: 150px;
   background-size: cover;
   background-position-x: -50px;
   background-position-y: 20px;
   background-repeat: no-repeat;
   clip-path: circle(35% at 50% 50%);
   grid-area: pic;
}

.ceo-name {
   grid-area: name;
   font-size: 1.1rem;
}

.ceo-title {
   grid-area: title;
   align-self: baseline;
   font-size: 0.8rem;
}

.letter > p {
   padding: 0 10px 0 20px;
   font-size: 0.9rem;
}
.list-image-layout {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;GACG,eAAe;GACf,iEAAiE;GACjE,sBAAsB;GACtB,mCAAmC;GACnC,sBAAsB;GACtB,yDAAyD;AAC5D;;AAEA;GACG,YAAY;AACf;;AAEA;GACG,SAAS;GACT,yDAAiF;GACjF,4BAA4B;GAC5B,wBAAwB;AAC3B;;AAEA;GACG,aAAa;GACb,aAAa;GACb,uBAAuB;GACvB,+BAA+B;AAClC;;AAEA;GACG,aAAa;GACb,mDAAmD;GACnD,gBAAgB;AACnB;;AAEA;GACG,kCAAkC;GAClC,YAAY;GACZ,mBAAmB;GACnB,4BAA4B;GAC5B,6BAA6B;GAC7B,eAAe;GACf,UAAU;GACV,eAAe;GACf,YAAY;GACZ,kBAAkB;AACrB;;AAEA;GACG,WAAW;GACX,kBAAkB;GAClB,SAAS;GACT,WAAW;GACX,YAAY;GACZ,WAAW;GACX,oBAAoB;AACvB;;AAEA;GACG,WAAW;GACX,kBAAkB;GAClB,SAAS;GACT,YAAY;GACZ,YAAY;GACZ,WAAW;GACX,oBAAoB;AACvB;;AAEA;GACG,yBAAyB;AAC5B;;AAEA;;GAEG,6BAA6B;AAChC;;AAEA;;GAEG,6BAA6B;AAChC;;AAEA;;GAEG,6BAA6B;AAChC;;AAEA;GACG,kBAAkB;GAClB,sBAAsB;GACtB,mBAAmB;GACnB,kBAAkB;GAClB,kBAAkB;GAClB,oBAAoB;AACvB;;AAEA;GACG,yBAAyB;GACzB,wBAAwB;AAC3B;;AAEA;GACG,yBAAyB;GACzB,yBAAyB;;AAE5B;;AAEA;GACG,yBAAyB;GACzB,wBAAwB;AAC3B;;AAEA;GACG,yBAAyB;GACzB,wBAAwB;AAC3B;;AAEA;GACG,yBAAyB;GACzB,wBAAwB;AAC3B;;AAEA;GACG,yBAAyB;GACzB,wBAAwB;AAC3B;;AAEA;;;;;;GAMG,iDAAiD;AACpD;;AAEA;;;GAGG,UAAU;AACb;;AAEA;GACG,mBAAmB;GACnB,qCAAqC;GACrC,+BAA+B;GAC/B,6EAA6E;GAC7E,iDAAiD;GACjD,mBAAmB;GACnB,kBAAkB;GAClB,gBAAgB;GAChB,kBAAkB;AACrB;;AAEA;GACG,kBAAkB;GAClB,sCAAsC;GACtC,SAAS;GACT,eAAe;GACf,oBAAoB;GACpB,yDAAuC;GACvC,aAAa;GACb,mBAAmB;GACnB,2BAA2B;GAC3B,4BAA4B;GAC5B,qCAAqC;GACrC,gBAAgB;GAChB,iBAAiB;AACpB;;AAEA;GACG,gBAAgB;AACnB;;AAEA;GACG,cAAc;GACd,iBAAiB;AACpB;;AAEA;GACG,cAAc;GACd,eAAe;GACf,gBAAgB;AACnB;;AAEA;GACG,UAAU;GACV,cAAc;AACjB;;AAEA;GACG,gBAAgB;AACnB;;AAEA;GACG,YAAY;GACZ,YAAY;GACZ,iBAAiB;GACjB,mBAAmB;AACtB;;AAEA;GACG,aAAa;GACb,qBAAqB;GACrB,kBAAkB;AACrB;;AAEA;GACG,WAAW;GACX,uBAAuB;GACvB,iDAAiD;GACjD,kBAAkB;GAClB,YAAY;GACZ,gBAAgB;AACnB;;AAEA;GACG,YAAY;AACf;;AAEA;GACG,qCAAqC;GACrC,iBAAiB;AACpB;;AAEA;GACG,gBAAgB;AACnB;;AAEA;GACG,mBAAmB;GACnB,kDAAkD;GAClD,gBAAgB;GAChB,eAAe;GACf,8BAA8B;AACjC;;AAEA;GACG,mDAAuD;GACvD,sCAAsC;GACtC,4BAA4B;GAC5B,sBAAsB;GACtB,aAAa;GACb,WAAW;GACX,4BAA4B;GAC5B,kBAAkB;AACrB;;AAEA;GACG,uBAAuB;GACvB,oBAAoB;AACvB;;AAEA;GACG,aAAa;GACb,gCAAgC;GAChC;mCACgC;GAChC,gBAAgB;AACnB;;AAEA;GACG,mDAAuC;GACvC,YAAY;GACZ,aAAa;GACb,sBAAsB;GACtB,4BAA4B;GAC5B,2BAA2B;GAC3B,4BAA4B;GAC5B,iCAAiC;GACjC,cAAc;AACjB;;AAEA;GACG,eAAe;GACf,iBAAiB;AACpB;;AAEA;GACG,gBAAgB;GAChB,oBAAoB;GACpB,iBAAiB;AACpB;;AAEA;GACG,sBAAsB;GACtB,iBAAiB;AACpB;AACA;GACG,aAAa;GACb,eAAe;GACf,8BAA8B;AACjC","sourcesContent":[":root {\n   font-size: 16px;\n   font-family: Verdana, Arial, sans-serif, Georgia, Garamond, serif;\n   --tab-color: aliceblue;\n   --content-background-color: #d9f6ff;\n   --minimum-width: 401px;\n   --content-container-width:max(60vw, var(--minimum-width));\n}\n\nhtml, body {\n   height: 100%;\n}\n\nbody {\n   margin: 0;\n   background-image: url(./dark-chocolate-tile-pieces-covered-chocolate-powder.jpeg);\n   background-attachment: fixed;\n   background-size: contain;\n}\n\nheader {\n   height: 100px;\n   display: grid;\n   justify-content: center;\n   min-width: var(--minimum-width);\n}\n\nnav {\n   display: grid;\n   grid-template-columns: repeat(3, minmax(88px, 1fr));\n   align-items: end;\n}\n\nbutton {\n   background-color: var(--tab-color);\n   height: 50px;\n   border-bottom: none;\n   border-top-left-radius: 10px;\n   border-top-right-radius: 10px;\n   font-size: 1rem;\n   padding: 0;\n   cursor: pointer;\n   border: none;\n   position: relative;\n}\n\nbutton::before {\n   content: \"\";\n   position: absolute;\n   bottom: 0;\n   left: -19px;\n   height: 20px;\n   width: 20px;\n   pointer-events: none;\n}\n\nbutton::after {\n   content: \"\";\n   position: absolute;\n   bottom: 0;\n   right: -20px;\n   height: 20px;\n   width: 20px;\n   pointer-events: none;\n}\n\nbutton:hover {\n   background-color: #89ddf8;\n}\n\n#home::before,\n#home::after {\n   background-color: transparent;\n}\n\n#menu::before,\n#menu::after {\n   background-color: transparent;\n}\n\n#about::before,\n#about::after {\n   background-color: transparent;\n}\n\n.tab-curve {\n   position: absolute;\n   box-sizing: border-box;\n   border-style: solid;\n   border-width: 20px;\n   border-radius: 50%;\n   pointer-events: none;\n}\n\n.home-left-circle {\n   border-color: transparent;\n   transform: rotate(45deg);\n}\n\n.home-right-circle {\n   border-color: transparent;\n   transform: rotate(135deg);\n\n}\n\n.menu-left-circle {\n   border-color: transparent;\n   transform: rotate(45deg);\n}\n\n.menu-right-circle {\n   border-color: transparent;\n   transform: rotate(45deg);\n}\n\n.about-left-circle {\n   border-color: transparent;\n   transform: rotate(45deg);\n}\n\n.about-right-circle {\n   border-color: transparent;\n   transform: rotate(45deg);\n}\n\n#home.selected-home::before,\n#home.selected-home::after,\n#menu.selected-menu::before,\n#menu.selected-menu::after,\n#about.selected-about::before,\n#about.selected-about::after {\n   background-color: var(--content-background-color);\n}\n\n#home.selected-home::after,\n#menu.selected-menu::after,\n#about.selected-about::after {\n   z-index: 1;\n}\n\n#content {\n   height: fit-content;\n   width: var(--content-container-width);\n   min-width: var(--minimum-width);\n   margin-left: max(calc(calc(100vw - var(--content-container-width)) / 2), 0px);\n   background-color: var(--content-background-color);\n   border-radius: 20px;\n   margin-bottom: 5vh;\n   line-height: 1.6;\n   padding: 20px 25px;\n}\n\n.home-header {\n   text-align: center;\n   color: var(--content-background-color);\n   margin: 0;\n   font-size: 5rem;\n   font-family: cursive;\n   background-image: url(./lava-cake.jpeg);\n   height: 300px;\n   border-radius: 20px;\n   background-position: center;\n   background-repeat: no-repeat;\n   box-shadow: 0px 10px 20px 0px #434242;\n   overflow: hidden;\n   max-width: 1000px;\n}\n\n.home-intro {\n   margin-top: 30px;\n}\n\n.home-review {\n   display: block;\n   font-size: 0.8rem;\n}\n\n.home-reviewer-name {\n   display: block;\n   font-size: 1rem;\n   margin-top: 10px;\n}\n\nul {\n   padding: 0;\n   line-height: 2;\n}\n\nli {\n   list-style: none;\n}\n\nimg {\n   height: auto;\n   width: 300px;\n   max-height: 350px;\n   border-radius: 20px;\n}\n\n.food-container {\n   display: grid;\n   justify-items: center;\n   position: relative;\n}\n\n.food-container::after {\n   content: '';\n   border: 1px solid black;\n   width: calc(var(--content-container-width) * 0.7);\n   position: relative;\n   bottom: 20px;\n   min-width: 400px;\n}\n\n.food-container:last-child::after {\n   border: none;\n}\n\n.food-name {\n   font-family: 'Comic Sans MS', cursive;\n   font-size: 1.6rem;\n}\n\n.food-description {\n   max-width: 450px;\n}\n\n.food-price {\n   margin-bottom: 45px;\n   width: calc(var(--content-container-width) - 25px);\n   max-width: 450px;\n   text-align: end;\n   font-family: Luminari, fantasy;\n}\n\n.about-header {\n   background: url(./white-dough-tamara-gak-unsplash.jpeg);\n   color: var(--content-background-color);\n   background-repeat: no-repeat;\n   background-size: cover;\n   height: 300px;\n   margin: 0px;\n   border-radius: 20px 20px 0 0;\n   padding-left: 15px;\n}\n\n.letter {\n   background-color: white;\n   padding-bottom: 15px;\n}\n\n.letter-header {\n   display: grid;\n   grid-template-columns: 150px 1fr;\n   grid-template-areas: \"pic name\"\n                        \"pic title\";\n   align-items: end;\n}\n\n.ceo-pic {\n   background: url(./ceo-profile-pic.jpeg);\n   width: 150px;\n   height: 150px;\n   background-size: cover;\n   background-position-x: -50px;\n   background-position-y: 20px;\n   background-repeat: no-repeat;\n   clip-path: circle(35% at 50% 50%);\n   grid-area: pic;\n}\n\n.ceo-name {\n   grid-area: name;\n   font-size: 1.1rem;\n}\n\n.ceo-title {\n   grid-area: title;\n   align-self: baseline;\n   font-size: 0.8rem;\n}\n\n.letter > p {\n   padding: 0 10px 0 20px;\n   font-size: 0.9rem;\n}\n.list-image-layout {\n   display: flex;\n   flex-wrap: wrap;\n   justify-content: space-between;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about-tab-info.js":
/*!*******************************!*\
  !*** ./src/about-tab-info.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const tabInfo = {
	headerPhrases: [`Special Customers.`, `Special Chefs.`, `Special Food.`],
	story: [`Sweetly was founded in 2001 by a young 22 year old who loved baking desserts more than anything else
		  in the world. The founder, Emmanuel Sanchez happened to have a sweet tooth and a creative imagination.
		  The passion was unmatched. Unfortunately Emmanuel realized baking without a source of income to fund
		  his passion was not possible if he wanted to continue baking. Emmanuel baked from home fulfilling
		  orders made by friends, family, and customers who came from word of mouth.`, 
		  `Eventually he gained traction and became too busy to keep baking from home. Emmanuel opened up a
		  small shop where he was able to bake more efficiently and grow Sweetly. Occasionally, he would
		  temporarily close shop to compete in competitions.`,
		  `In a paris competition he won, he networked with a private investor who was really impressed and saw the
		  vast potential Sweetly had. This lead to Emmanuel being able to relocate and open a large restaurant
		  in a prominent area of Dixon. After winning the Paris competition, he became widely recognized as an elite
		  baker. With this, he was able to recruit top talent to work at Sweetly.`],
	ceoProfilePic: '/Users/Emmanuel/repos/restaurant-page/src/ceo-profile-pic.jpeg',
	letter: {
		p1: `Our goal is to be an innovative hub where talented chefs who want to continue inventing new delicious 
			  desserts while serving some of the best desserts in the world to sweet-craving customers`,
		p2: `We are more than just a business. This is our second home where we get to enjoy our hobby while 
			  satisfying your sweet palate. Nothing makes us happier than seeing customers savor and melt from
			  the first bite. Seeing all the satisfied expressions motivates us to experiment creating new delicious
			  treats`,
		p3: `Our chefs take great pride in being the best of the best in world. In fact, all of our chefs are 
			  currently competing in major dessert competitions or have competed in the past. We can truly claim
			  to have top notch talent`
		},
	achievements: ['2013 World Dessert Champion', '2015 World Dessert Champion',
						'2016 National Banana Pudding Cook Off', '2016 World Dessert Championship',
						'2017 Cacao Barry World Chocolate Masters', '2017 Taste of World', '2017 Sugar Rush',
						'2017 US Pastry Competition'],
	trophyImage: '/Users/Emmanuel/repos/restaurant-page/src/trophy-collection-jelly-dollar-unsplash.jpeg'
};

let header = () => {
	const content = document.getElementById('content');
	const headerPhrase = document.createElement('h1');

	headerPhrase.classList.add('about-header');
	content.appendChild(headerPhrase);

	for (let i = 0; i < tabInfo.headerPhrases.length; i++) {
		const phrase = document.createElement('div');

		phrase.textContent = tabInfo.headerPhrases[i];

		headerPhrase.appendChild(phrase);
	}
};

let companyStory = () => {
	const storyContainer = document.createElement('div');
	const storyHeader = document.createElement('h2');
	const story = document.createElement('div');

	content.appendChild(storyContainer);

	storyHeader.textContent = 'Story';
	storyContainer.appendChild(storyHeader);

	story.textContent = tabInfo.p2;
	storyContainer.appendChild(story);

	for (let i = 0; i < tabInfo.story.length; i++) {
		const paragraph = document.createElement('p');

		paragraph.textContent = tabInfo.story[i];

		story.appendChild(paragraph);
	}
};

let letter = () => {
	const ceoLetter = document.createElement('div');
	const letterHeader = document.createElement('div');
	const ceoImage = document.createElement('div');

	ceoLetter.classList.add('letter');
	letterHeader.classList.add('letter-header');
	ceoImage.classList.add('ceo-pic');

	content.appendChild(ceoLetter);
	ceoLetter.appendChild(letterHeader);
	letterHeader.appendChild(ceoImage);

	const ceoName = document.createElement('div');
	const ceoTitle = document.createElement('div');

	ceoName.textContent = 'Emmanuel Sanchez';
	ceoTitle.textContent = 'CEO & FOUNDER';

	ceoName.classList.add('ceo-name');
	ceoTitle.classList.add('ceo-title');

	letterHeader.appendChild(ceoName);
	letterHeader.appendChild(ceoTitle);

	for (const paragraph in tabInfo.letter) {
		const p = document.createElement('p');

		p.textContent = tabInfo.letter[paragraph];

		ceoLetter.appendChild(p);
	}
};

let achievements = () => {
	const achievementContainer = document.createElement('div');
	const achievementHeader = document.createElement('h2');
	const listImageContainer = document.createElement('div');
	const achievementList = document.createElement('ul');

	content.appendChild(achievementContainer);

	achievementHeader.textContent = 'Competitions Won';
	achievementContainer.appendChild(achievementHeader);

	achievementContainer.appendChild(listImageContainer);

	listImageContainer.classList.add('list-image-layout');
	listImageContainer.appendChild(achievementList);

	for (let i = 0; i < tabInfo.achievements.length; i++) {
		const achievement = document.createElement('li');

		achievement.textContent = tabInfo.achievements[i];

		achievementList.appendChild(achievement);
	}
	
	const trophyImage = document.createElement('img');

	trophyImage.setAttribute('src', tabInfo.trophyImage);

	listImageContainer.appendChild(trophyImage);
};
					
let appendAbout = () => {
	header();
	companyStory();
	letter();
	achievements();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendAbout);

/***/ }),

/***/ "./src/change-tab-styles.js":
/*!**********************************!*\
  !*** ./src/change-tab-styles.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeAboutTab: () => (/* binding */ activeAboutTab),
/* harmony export */   activeHomeTab: () => (/* binding */ activeHomeTab),
/* harmony export */   activeMenuTab: () => (/* binding */ activeMenuTab),
/* harmony export */   activeTabStyle: () => (/* binding */ activeTabStyle)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const tabBtn = document.getElementsByTagName('button');

const activeTabStyle = {
   home: {
      square: {
         before: {
            backgroundColor: 'var(--content-background-color)'
         },
         after: {
            backgroundColor: 'var(--content-background-color)',
            zIndex: 1
         }
      },
      circle: {
         left: {
            borderColor: 'transparent #2a1717 transparent transparent',
            zIndex: 1
         },
         right: {
            borderColor: 'transparent var(--tab-color) transparent transparent',
            zIndex: 1
         }
      },
      button: {
         backgroundColor: 'var(--content-background-color)',
      }
   },
   menu: {
      square: {
         before: {
            backgroundColor: 'var(--content-background-color)'
         },
         after: {
            backgroundColor: 'var(--content-background-color)'
         }
      },
      circle: {
         left: {
            borderColor: 'transparent var(--tab-color) transparent transparent',
            zIndex: 1
         },
         right: {
            borderColor: 'transparent transparent var(--tab-color) transparent',
            zIndex: 1
         }
      },
      button: {
         backgroundColor: 'var(--content-background-color)'
      }
   },
   about: {
      square: {
         before: {
            backgroundColor: 'var(--content-background-color)'
         },
         after: {
            backgroundColor: 'var(--content-background-color)'
         }
      },
      circle: {
         left: {
            borderColor: 'transparent var(--tab-color) transparent transparent',
            zIndex: 1
         },
         right: {
            borderColor: 'transparent transparent #160b0b transparent',
            zIndex: 1
         }
      },
      button: {
         backgroundColor: 'var(--content-background-color)'
      }
   }
};

let activeHomeTab = (circleHome, btnHome, defaultTab) => {
   const hLeftCircle = document.querySelector('.home-left-circle');
   const hRightCircle = document.querySelector('.home-right-circle');
   const mLeftCircle = document.querySelector('.menu-left-circle');

   const hLeftCircleStyles = getComputedStyle(hLeftCircle);
   let hLeft = hLeftCircleStyles.getPropertyValue('left');

   const hRightCircleStyles = getComputedStyle(hRightCircle);
   let hRight = hRightCircleStyles.getPropertyValue('right');

   const mLeftCircleStyles = getComputedStyle(mLeftCircle);
   let mLeft = mLeftCircleStyles.getPropertyValue('left');

   hLeftCircle.style.cssText = `border-color: ${circleHome.left.borderColor};
                                 z-index: ${circleHome.left.zIndex};
                                 left: ${hLeft}`;
   hRightCircle.style.cssText = `border-color: ${circleHome.right.borderColor};
                                 z-index: ${circleHome.right.zIndex};
                                 right: ${hRight}`;

   mLeftCircle.style.cssText = `border-color: transparent;
                                 left: ${mLeft}`;

   if (tabBtn[1].classList.contains('selected-menu')) {
      const aLeftCircle = document.querySelector('.about-left-circle');
      const aLeftCircleStyles = getComputedStyle(aLeftCircle);
      let aLeft = aLeftCircleStyles.getPropertyValue('left');

      aLeftCircle.style.cssText = `border-color: transparent; left: ${aLeft}`;
   }

   if (tabBtn[2].classList.contains('selected-about')) {
      const mRightCircle = document.querySelector('.menu-right-circle');
      const mRightCircleStyles = getComputedStyle(mRightCircle);
      let mRight = mRightCircleStyles.getPropertyValue('right');

      mRightCircle.style.cssText = `background-color: transparent; right: ${mRight}`;
   }

   tabBtn[0].style['background-color'] = btnHome.backgroundColor;
   tabBtn[0].classList.add('selected-home');

   tabBtn[1].removeAttribute('style');
   tabBtn[1].classList.remove('selected-menu');

   tabBtn[2].removeAttribute('style');
   tabBtn[2].classList.remove('selected-about');

   defaultTab = 2;
};

let activeMenuTab = (circleMenu, btnMenu) => {
   const mLeftCircle = document.querySelector('.menu-left-circle');
   const mRightCircle = document.querySelector('.menu-right-circle');
   const hRightCircle = document.querySelector('.home-right-circle');

   const mLeftCircleStyles = getComputedStyle(mLeftCircle);
   let mLeft = mLeftCircleStyles.getPropertyValue('left');

   const mRightCircleStyles = getComputedStyle(mRightCircle);
   let mRight = mRightCircleStyles.getPropertyValue('right');

   const hRightCircleStyles = getComputedStyle(hRightCircle);
   let hRight = hRightCircleStyles.getPropertyValue('right');

   mLeftCircle.style.cssText = `border-color: ${circleMenu.left.borderColor};
                                 z-index: ${circleMenu.left.zIndex};
                                 left: ${mLeft}`;
   mRightCircle.style.cssText = `border-color: ${circleMenu.right.borderColor};
                                 z-index: ${circleMenu.right.zIndex};
                                 right: ${mRight}`;

   hRightCircle.style.cssText = `border-color: ${activeTabStyle.home.circle.right.borderColor};
                                 right: ${hRight}`;

   if (tabBtn[2].classList.contains('selected-about')) {
      const aLeftCircle = document.querySelector('.about-left-circle');
      const aLeftCircleStyles = getComputedStyle(aLeftCircle);
      let aLeft = aLeftCircleStyles.getPropertyValue('left');

      aLeftCircle.style.cssText = `border-color: transparent transparent var(--content-background-color);
                                    z-index: ${activeTabStyle.about.circle.left.zIndex};
                                    left: ${aLeft}`;
   }

   tabBtn[1].style['background-color'] = btnMenu.backgroundColor;
   tabBtn[1].classList.add('selected-menu');

   tabBtn[0].removeAttribute('style');
   tabBtn[0].classList.remove('selected-home');

   tabBtn[2].removeAttribute('style');
   tabBtn[2].classList.remove('selected-about');
};

let activeAboutTab = (circleAbout, btnAbout) => {
   const aLeftCircle = document.querySelector('.about-left-circle');
   const aRightCircle = document.querySelector('.about-right-circle');
   const mRightCircle = document.querySelector('.menu-right-circle');

   const aLeftCircleStyles = getComputedStyle(aLeftCircle);
   let aLeft = aLeftCircleStyles.getPropertyValue('left');

   const aRightCircleStyles = getComputedStyle(aRightCircle);
   let aRight = aRightCircleStyles.getPropertyValue('right');

   const mRightCircleStyles = getComputedStyle(mRightCircle);
   let mRight = mRightCircleStyles.getPropertyValue('right');

   aLeftCircle.style.cssText = `border-color: ${circleAbout.left.borderColor};
                                 z-index: ${circleAbout.left.zIndex};
                                 left: ${aLeft}`;
   aRightCircle.style.cssText = `border-color: ${circleAbout.right.borderColor};
                                 z-index: ${circleAbout.right.zIndex};
                                 right: ${aRight}`;

   mRightCircle.style.cssText = `border-color: transparent; right: ${mRight}`;
                     
   tabBtn[2].style.cssText = `background-color: ${btnAbout.backgroundColor}`
   tabBtn[2].classList.add('selected-about');

   tabBtn[0].removeAttribute('style');
   tabBtn[0].classList.remove('selected-home');

   tabBtn[1].removeAttribute('style');
   tabBtn[1].classList.remove('selected-menu');
};

(function hoverTab() {
   [...tabBtn].map(btn => btn.addEventListener('mouseenter', function(e) {
      let id = e.target.id;
      const circleHome = activeTabStyle.home.circle;
      const circleMenu = activeTabStyle.menu.circle;
      const circleAbout = activeTabStyle.about.circle;

      if (id == 'menu') {
         const rightCircle = document.querySelector('.home-right-circle');
         const leftCircle = document.querySelector('.about-left-circle');

         const hRightCircleStyles = getComputedStyle(rightCircle);
         let hRight = hRightCircleStyles.getPropertyValue('right');

         const aLeftCircleStyles = getComputedStyle(leftCircle);
         let aLeft = aLeftCircleStyles.getPropertyValue('left');


         rightCircle.style.cssText = `border-color: transparent #89ddf8 transparent transparent;
                                      z-index: ${circleHome.right.zIndex};
                                      right: ${hRight}`;
         leftCircle.style.cssText = `transparent transparent #89ddf8 transparent;
                                     left: ${aLeft}`;

         if (tabBtn[1].classList.contains('selected-menu')) {
            rightCircle.style.cssText = `border-color: transparent;
                                         z-index: ${circleHome.right.zIndex};
                                         right: ${hRight}`;
         }

         if (tabBtn[2].classList.contains('selected-about')) {
            leftCircle.style.cssText = `border-color: transparent #89ddf8 transparent transparent;
                                        z-index: ${circleAbout.left.zIndex};
                                        left: ${aLeft}`;
         }

      } else if (id == 'home') {
         const leftCircle = document.querySelector('.menu-left-circle');
         const mLeftCircleStyles = getComputedStyle(leftCircle);
         let mLeft = mLeftCircleStyles.getPropertyValue('left');
         
         leftCircle.style.cssText = `border-color: transparent; left: ${mLeft}`;

         if (!tabBtn[0].classList.contains('selected-home')) {
            leftCircle.style.cssText = `border-color: transparent #89ddf8 transparent transparent;
                                        z-index: ${circleMenu.left.zIndex};
                                        left: ${mLeft}`;
         }

         if (tabBtn[1].classList.contains('selected-menu')) {
            const mRightCircle = document.querySelector('.menu-right-circle');
            const mRightCircleStyles = getComputedStyle(mRightCircle);
            let mRight = mRightCircleStyles.getPropertyValue('right');

            mRightCircle.style.cssText = `border-color: transparent transparent var(--tab-color) transparent;
                                          z-index: ${circleMenu.right.zIndex};
                                          right: ${mRight}`;
         }

      } else if (id == 'about') {
         const rightCircle = document.querySelector('.menu-right-circle');
         const mRightCircleStyles = getComputedStyle(rightCircle);
         let mRight = mRightCircleStyles.getPropertyValue('right');

         rightCircle.style.cssText = `border-color: transparent transparent #89ddf8 transparent;
                                      z-index: ${circleMenu.right.zIndex};
                                      right: ${mRight}`;

         if (tabBtn[2].classList.contains('selected-about')) {
            rightCircle.style.cssText = `border-color: transparent transparent var(--content-background-color) transparent;
                                         z-index: ${circleMenu.right.zIndex};
                                         right: ${mRight}`;
         }
      }
   }));

   [...tabBtn].map(btn => btn.addEventListener('mouseleave', function(e) {
      let id = e.target.id;
      const circleHome = activeTabStyle.home.circle;
      const circleMenu = activeTabStyle.menu.circle;
      const circleAbout = activeTabStyle.about.circle;

      if (id == 'menu' && !tabBtn[1].classList.contains('selected-menu')) {
         const rightCircle = document.querySelector('.home-right-circle');
         const leftCircle = document.querySelector('.about-left-circle');

         const hRightCircleStyles = getComputedStyle(rightCircle);
         let hRight = hRightCircleStyles.getPropertyValue('right');

         const aLeftCircleStyles = getComputedStyle(leftCircle);
         let aLeft = aLeftCircleStyles.getPropertyValue('left');

         rightCircle.style.cssText = `border-color: ${circleHome.right.borderColor};
                                      z-index: ${circleHome.right.zIndex};
                                      right: ${hRight}`;
         leftCircle.style.cssText = `border-color: transparent;
                                     z-index: ${circleAbout.left.zIndex};
                                     left: ${aLeft}`;

         if (tabBtn[2].classList.contains('selected-about')) {
            leftCircle.style.cssText = `border-color: ${circleAbout.left.borderColor};
                                        z-index: ${circleAbout.left.zIndex};
                                        left: ${aLeft}`;
         }

      } else if (id == 'home' && !tabBtn[0].classList.contains('selected-home')) {
         const leftCircle = document.querySelector('.menu-left-circle');
         const mLeftCircleStyles = getComputedStyle(leftCircle);
         let mLeft = mLeftCircleStyles.getPropertyValue('left');

         leftCircle.style.cssText = `border-color: ${circleMenu.left.borderColor};
                                     z-index: ${circleMenu.left.zIndex};
                                     left: ${mLeft}`;

      } else if (id == 'about' && !tabBtn[2].classList.contains('selected-about')) {
         const rightCircle = document.querySelector('.menu-right-circle');
         const mRightCircleStyles = getComputedStyle(rightCircle);
         let mRight = mRightCircleStyles.getPropertyValue('right');

         rightCircle.style.cssText = `border-color: ${circleMenu.right.borderColor};
                                      z-index: ${circleMenu.right.zIndex};
                                      right: ${mRight}`;
      }
   }));
})();

let adjustCirclePosition = () => {
   const hLeftCircle = document.querySelector('.home-left-circle');
   const hRightCircle = document.querySelector('.home-right-circle');
   const windowWidth = document.querySelector('html').clientWidth;

   let homeLeftPosition = tabBtn[0].getBoundingClientRect().left - 40;
   let homeRightPosition = windowWidth - tabBtn[0].getBoundingClientRect().right - 40;

   let hLeftCircleStyles = hLeftCircle.getAttribute('style');
   let hRightCircleStyles = hRightCircle.getAttribute('style');

   hLeftCircle.style.cssText = `${hLeftCircleStyles} left: ${homeLeftPosition}px`;
   hRightCircle.style.cssText = `${hRightCircleStyles} right: ${homeRightPosition}px`;

   const mLeftCircle = document.querySelector('.menu-left-circle');
   const mRightCircle = document.querySelector('.menu-right-circle');

   let menuLeftPosition = tabBtn[1].getBoundingClientRect().left - 40;
   let menuRightPosition = tabBtn[1].getBoundingClientRect().left - 40;

   let mLeftCircleStyles = mLeftCircle.getAttribute('style');
   let mRightCircleStyles = mRightCircle.getAttribute('style');

   mLeftCircle.style.cssText = `${mLeftCircleStyles} left: ${menuLeftPosition}px;`;
   mRightCircle.style.cssText = `${mRightCircleStyles} right: ${menuRightPosition}px`;

   const aLeftCircle = document.querySelector('.about-left-circle');
   const aRightCircle = document.querySelector('.about-right-circle');

   let aboutLeftPosition = tabBtn[2].getBoundingClientRect().left - 40;
   let aboutRightPosition = windowWidth - tabBtn[2].getBoundingClientRect().right - 40;

   let aLeftCircleStyles = aLeftCircle.getAttribute('style');
   let aRightCircleStyles = aRightCircle.getAttribute('style');

   aLeftCircle.style.cssText = `${aLeftCircleStyles} left: ${aboutLeftPosition}px`;
   aRightCircle.style.cssText = `${aRightCircleStyles} right: ${aboutRightPosition}px`;
};

let pageLoadCirclePosition = () => {
   const hLeftCircle = document.querySelector('.home-left-circle');
   const hRightCircle = document.querySelector('.home-right-circle');
   const windowWidth = document.querySelector('html').clientWidth;

   let homeLeftPosition = tabBtn[0].getBoundingClientRect().left - 40;
   let homeRightPosition = windowWidth - tabBtn[0].getBoundingClientRect().right - 40;

   let hLeftCircleStyles = hLeftCircle.getAttribute('style');
   let hRightCircleStyles = hRightCircle.getAttribute('style');

   hLeftCircle.style.cssText = `${hLeftCircleStyles} left: ${homeLeftPosition}px`;
   hRightCircle.style.cssText = `${hRightCircleStyles} right: ${homeRightPosition}px`;

   const mLeftCircle = document.querySelector('.menu-left-circle');
   const mRightCircle = document.querySelector('.menu-right-circle');

   let menuLeftPosition = tabBtn[1].getBoundingClientRect().left - 40;
   let menuRightPosition = tabBtn[1].getBoundingClientRect().left - 40;

   let mLeftCircleStyles = mLeftCircle.getAttribute('style');

   mLeftCircle.style.cssText = `${mLeftCircleStyles} left: ${menuLeftPosition}px`;
   mRightCircle.style.cssText = `right: ${menuRightPosition}px`;

   const aLeftCircle = document.querySelector('.about-left-circle');
   const aRightCircle = document.querySelector('.about-right-circle');

   let aboutLeftPosition = tabBtn[2].getBoundingClientRect().left - 40;
   let aboutRightPosition = windowWidth - tabBtn[2].getBoundingClientRect().right - 40;

   aLeftCircle.style.cssText = `left: ${aboutLeftPosition}px`;
   aRightCircle.style.cssText = `right: ${aboutRightPosition}px`;
};

document.addEventListener('DOMContentLoaded', pageLoadCirclePosition);

window.addEventListener('resize', adjustCirclePosition);



/***/ }),

/***/ "./src/home-tab-info.js":
/*!******************************!*\
  !*** ./src/home-tab-info.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const content = document.getElementById('content');

const tabInfo = {
   companyName: 'Sweetly',
   homeIntro: `Try out our seasonal menu before it's gone.
        Definitely do not want to miss out on our international 2024 Paris award winning spring treats.
        You'll be ordering extra to take home. Don't believe me? Have a look at the review down below.`,
   review: `"Such an amazing atmosphere. The service was impeccable. I actually felt welcomed.
            OH MY!!! Don't get me started with the food.
            I had to order extra for myself and an additional order for my family.
            I was blown away by how delicious and aesthetically pleasing the food were.
            This is truly a sweet tooths' paradise! Will be coming back for all the sweet goodness tomorrow😋🤤"`,
   reviewerName: 'Ashley',
   hours: [
      'Sunday: 10am - 8pm',
      'Monday: 8am - 9pm',
      'Tuesday: 8am - 9pm',
      'Wednesday: 8am - 9pm',
      'Thursday: 8am - 9pm',
      'Friday: 8am - 9pm',
      'Saturday: 10am - 8pm'
   ],
   contactInfo: {
      phoneNumber: '(707)234-8351',
      email: 'sweetlyTreats@sweetly.com'
   },
   address: '2331 Yummy Street, Dixon, California'
};

let restaurantName = () => {
   const header = document.createElement('h1');

   header.textContent = tabInfo.companyName;
   header.classList.add('home-header');
   
   content.appendChild(header);
}

let homeIntro = () => {
   const intro = document.createElement('p');

   intro.textContent = tabInfo.homeIntro;
   intro.classList.add('home-intro');

   content.appendChild(intro);
};

let review = () => {
   const reviewContainer = document.createElement('div');
   const review = document.createElement('strong');
   const reviewerName = document.createElement('em');

   review.textContent = tabInfo.review;
   reviewerName.textContent = tabInfo.reviewerName;

   content.appendChild(reviewContainer);
   reviewContainer.appendChild(review);
   reviewContainer.appendChild(reviewerName);

   reviewContainer.classList.add('home-review-container');
   review.classList.add('home-review');
   reviewerName.classList.add('home-reviewer-name');
};

let restaurantHours = () => {
   const hoursContainer = document.createElement('div');
   const hoursHeader = document.createElement('h2');
   const hoursList = document.createElement('ul');

   content.appendChild(hoursContainer);

   hoursHeader.textContent = 'Hours';

   hoursContainer.appendChild(hoursHeader);
   hoursContainer.appendChild(hoursList);

   for(let i = 0; i < tabInfo.hours.length; i++) {
      const openHours = document.createElement('li');

      openHours.textContent = tabInfo.hours[i];
      hoursList.appendChild(openHours);
   }
};

let contactInfo = () => {
   const contactInfoContainer = document.createElement('div');
   const contactHeader = document.createElement('h2');
   const contactList = document.createElement('ul');
   const phoneNumber = document.createElement('li');
   const email = document.createElement('li');

   content.appendChild(contactInfoContainer);
   content.appendChild(contactList);

   contactHeader.textContent = 'Contacts';
   contactInfoContainer.appendChild(contactHeader);

   contactInfoContainer.appendChild(contactList);

   phoneNumber.textContent = `Phone Number: ${tabInfo.contactInfo.phoneNumber}`;
   email.textContent = `Email: ${tabInfo.contactInfo.email}`;

   contactList.appendChild(phoneNumber);
   contactList.appendChild(email);
};

let address = () => {
   const addressContainer = document.createElement('div');
   const addressHeader = document.createElement('h2');
   const address = document.createElement('div');

   content.appendChild(addressContainer);

   addressHeader.textContent = 'Address';
   address.textContent = tabInfo.address;

   addressContainer.appendChild(addressHeader);
   addressContainer.appendChild(address);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
   restaurantName();
   homeIntro();
   review();
   restaurantHours();
   contactInfo();
   address();
});

/***/ }),

/***/ "./src/menu-tab-info.js":
/*!******************************!*\
  !*** ./src/menu-tab-info.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _lava_cake_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lava-cake.jpeg */ "./src/lava-cake.jpeg");
/* harmony import */ var _flan_pexels_teresa_jang_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flan-pexels-teresa-jang.jpeg */ "./src/flan-pexels-teresa-jang.jpeg");
/* harmony import */ var _cr_me_br_l_e_orkun_orcan_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crème-brûlée-orkun-orcan-unsplash.jpeg */ "./src/crème-brûlée-orkun-orcan-unsplash.jpeg");
/* harmony import */ var _black_forest_g_teau_jacob_thomas_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./black-forest-gâteau-jacob-thomas-unsplash.jpeg */ "./src/black-forest-gâteau-jacob-thomas-unsplash.jpeg");
/* harmony import */ var _cr_pes_with_ice_cream_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crêpes-with-ice-cream.jpeg */ "./src/crêpes-with-ice-cream.jpeg");
/* harmony import */ var _tiramisu_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tiramisu.jpeg */ "./src/tiramisu.jpeg");
/* harmony import */ var _japanese_mochi_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./japanese-mochi.jpeg */ "./src/japanese-mochi.jpeg");
/* harmony import */ var _pi_a_colada_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./piña-colada.jpeg */ "./src/piña-colada.jpeg");










const menuItems = {
   lavaCake: {
   name: 'Lava Cake',
   description: `Our world famous lave cake has an outer soft chocolate bread lightly covered with fine powder,
                 filled with warm melted 60% cacoa dark chocolate, topped with a few red raspberries and a
                 mint leaf`,
   imagePath: _lava_cake_jpeg__WEBPACK_IMPORTED_MODULE_1__,
   price: '15'
   },
   flan: {
      name: 'Flan',
      description: `One of our top sellers for a very good reason. Cold served soft and delicious custard topped 
                    with caramelized brown sugar to add sweetness`,
      imagePath: _flan_pexels_teresa_jang_jpeg__WEBPACK_IMPORTED_MODULE_2__,
      price: '18'
   },
   cremeBrulee: {
      name: 'Crème Brûlée',
      description: `Very creamy cold served custard with a blow torched brown sugar top layer with berries on top`,
      imagePath: _cr_me_br_l_e_orkun_orcan_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_3__,
      price: '13'
   },
   blackForestGateau: {
      name: 'Black Forest Gâteau',
      description: `German three layered chocolate sponge cake filled with lots of cream and washington cherries`,
      imagePath: _black_forest_g_teau_jacob_thomas_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__,
      price: '14'
   },
   crepes: {
      name: 'Crêpes',
      description: `Crepes are filled with banana and hazelnut nutella. Comes with mildly sweet cherry sauce
                    and vanilla bean ice cream on top`,
      imagePath: _cr_pes_with_ice_cream_jpeg__WEBPACK_IMPORTED_MODULE_5__,
      price: '10'
   },
   tiramisu: {
      name: 'Tiramisu',
      description: `Classic Italian dessert made of layers of ladyfingers dipped in coffee with cream in 
                    between the layers and outside. Outer top layer covered in cocoa powder`,
      imagePath: _tiramisu_jpeg__WEBPACK_IMPORTED_MODULE_6__,
      price: '12'
   },
   mochi: {
      name: 'Handmade Japanese Mochi',
      description: `Chewy and light treat made from pounded rice grains. Center is filled with red bean paste.
                    Mochi comes in strawberry, green tea, and mango flavors`,
      imagePath: _japanese_mochi_jpeg__WEBPACK_IMPORTED_MODULE_7__,
      price: '8'
   },
   piñaColada: {
      name: 'Piña Colada',
      description: `Drink consists of pineapple, coconut cream, and ice. Our Piña Colada is non-alcoholic`,
      imagePath: _pi_a_colada_jpeg__WEBPACK_IMPORTED_MODULE_8__,
      price: '5'
   }
};

function appendMenu() {
   const content = document.getElementById('content');

   for (const food in menuItems) {
      const foodContainer = document.createElement('div');
      const foodName = document.createElement('div');
      const image = document.createElement('img');
      const foodDescription = document.createElement('p');
      const foodPrice = document.createElement('div');

      foodContainer.classList.add('food-container');
      content.appendChild(foodContainer);

      foodName.textContent = menuItems[food].name;
      foodContainer.appendChild(foodName);
      foodName.classList.add('food-name');

      image.setAttribute('src', `${menuItems[food].imagePath}`);
      image.setAttribute('alt', `${menuItems[food].name}`);

      foodContainer.appendChild(image);

      foodDescription.textContent = menuItems[food].description;
      foodContainer.appendChild(foodDescription);
      foodDescription.classList.add('food-description');

      foodPrice.textContent = menuItems[food].price;
      foodContainer.appendChild(foodPrice);
      foodPrice.classList.add('food-price');
   }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendMenu);

/***/ }),

/***/ "./src/black-forest-gâteau-jacob-thomas-unsplash.jpeg":
/*!************************************************************!*\
  !*** ./src/black-forest-gâteau-jacob-thomas-unsplash.jpeg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a227d0de282f69f26e4.jpeg";

/***/ }),

/***/ "./src/ceo-profile-pic.jpeg":
/*!**********************************!*\
  !*** ./src/ceo-profile-pic.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a90ee88ad0b7ef66ddfd.jpeg";

/***/ }),

/***/ "./src/crème-brûlée-orkun-orcan-unsplash.jpeg":
/*!****************************************************!*\
  !*** ./src/crème-brûlée-orkun-orcan-unsplash.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2a549f6c7246e2d8ae4.jpeg";

/***/ }),

/***/ "./src/crêpes-with-ice-cream.jpeg":
/*!****************************************!*\
  !*** ./src/crêpes-with-ice-cream.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8984898dc8df3e35090.jpeg";

/***/ }),

/***/ "./src/dark-chocolate-tile-pieces-covered-chocolate-powder.jpeg":
/*!**********************************************************************!*\
  !*** ./src/dark-chocolate-tile-pieces-covered-chocolate-powder.jpeg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51409b2b8bc26ade14dd.jpeg";

/***/ }),

/***/ "./src/flan-pexels-teresa-jang.jpeg":
/*!******************************************!*\
  !*** ./src/flan-pexels-teresa-jang.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37042bf81f20065728f1.jpeg";

/***/ }),

/***/ "./src/japanese-mochi.jpeg":
/*!*********************************!*\
  !*** ./src/japanese-mochi.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6f6e2bf4057c2b5fc29.jpeg";

/***/ }),

/***/ "./src/lava-cake.jpeg":
/*!****************************!*\
  !*** ./src/lava-cake.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d72eed44b2e94e7a6206.jpeg";

/***/ }),

/***/ "./src/piña-colada.jpeg":
/*!******************************!*\
  !*** ./src/piña-colada.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b648180933898508ac1.jpeg";

/***/ }),

/***/ "./src/tiramisu.jpeg":
/*!***************************!*\
  !*** ./src/tiramisu.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76cbbc01a43a2ba3fcc0.jpeg";

/***/ }),

/***/ "./src/white-dough-tamara-gak-unsplash.jpeg":
/*!**************************************************!*\
  !*** ./src/white-dough-tamara-gak-unsplash.jpeg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24002fa1fead5e85379c.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-tab-styles.js */ "./src/change-tab-styles.js");
/* harmony import */ var _home_tab_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-tab-info.js */ "./src/home-tab-info.js");
/* harmony import */ var _menu_tab_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-tab-info.js */ "./src/menu-tab-info.js");
/* harmony import */ var _about_tab_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-tab-info.js */ "./src/about-tab-info.js");





const tabBtn = document.getElementsByTagName('button');

(function changeTab() {
   const circleHome = _change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__.activeTabStyle.home.circle;
   const btnHome = _change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__.activeTabStyle.home.button;
   const circleMenu = _change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__.activeTabStyle.menu.circle;
   const btnMenu = _change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__.activeTabStyle.menu.button;
   const circleAbout = _change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__.activeTabStyle.about.circle;
   const btnAbout = _change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__.activeTabStyle.about.button;

   [...tabBtn].map(btn => btn.addEventListener('click', function(e) {
      const selectedHome = tabBtn[0].classList.contains('selected-home');
      const selectedMenu = tabBtn[1].classList.contains('selected-menu');
      const selectedAbout = tabBtn[2].classList.contains('selected-about');
      let id = e.target.id;
      let defaultTab = 1

      if (id == 'home' && !selectedHome && (selectedMenu || selectedAbout || defaultTab == 1)) {
         (0,_change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__.activeHomeTab)(circleHome, btnHome, defaultTab);
         removePreviousTab();
         (0,_home_tab_info_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

      } else if (id == 'menu' && !selectedMenu && (selectedHome || selectedAbout)) {
         (0,_change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__.activeMenuTab)(circleMenu, btnMenu);
         removePreviousTab();
         (0,_menu_tab_info_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

      } else if (id == 'about' && !selectedAbout && (selectedHome || selectedMenu)) {
         (0,_change_tab_styles_js__WEBPACK_IMPORTED_MODULE_0__.activeAboutTab)(circleAbout, btnAbout);
         removePreviousTab();
         (0,_about_tab_info_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      }
   }));
})();

(function defaultTab() {tabBtn[0].click()})();

function removePreviousTab() {
   const content = document.getElementById('content');

   while (content.lastChild !== null) {
      content.removeChild(content.lastChild);
   }
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map