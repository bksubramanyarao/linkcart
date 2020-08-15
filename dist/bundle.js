/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/helper.js":
/*!**********************!*\
  !*** ./js/helper.js ***!
  \**********************/
/*! exports provided: removeElement, copyToClipboard, makeCsv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeElement\", function() { return removeElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copyToClipboard\", function() { return copyToClipboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeCsv\", function() { return makeCsv; });\n\r\n/**\r\n ** @param id of element\r\n ** DESCRIPTION: delete html element by id\r\n */\r\nfunction removeElement(id) {\r\n\tvar elem = document.getElementById(id)\r\n\tif (elem) {\r\n\t\treturn elem.parentNode.removeChild(elem)\r\n\t}\r\n}\r\n\r\n\r\n/**\r\n ** @param str String\r\n ** DESCRIPTION: copies to clipboard\r\n */\r\nfunction copyToClipboard(str) {\r\n\tvar el = document.createElement('textarea')\r\n\tel.value = str\r\n\tdocument.body.appendChild(el)\r\n\tel.select()\r\n\tdocument.execCommand('copy')\r\n\tdocument.body.removeChild(el)\r\n}\r\n\r\n\r\n/**\r\n ** @param arr Array\r\n ** DESCRIPTION: convert array to csv string\r\n */\r\nfunction makeCsv(arr) {\r\n\tvar csv = arr.map(function (v) { return v.join(',') }).join('\\n')\r\n\treturn encodeURI(\"data:text/csv,\" + csv)\r\n}\r\n\n\n//# sourceURL=webpack:///./js/helper.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\")\r\n\r\n\r\nconst { removeElement, copyToClipboard, makeCsv } = __webpack_require__(/*! ./helper */ \"./js/helper.js\");\r\n\r\n\r\n\r\n\r\n/**\r\n ** DESCRIPTION: adds linkcart context menu on installing the extension\r\n */\r\nchrome.runtime.onInstalled.addListener(() => {\r\n\tchrome.contextMenus.create({\r\n\t\ttitle: 'add to linkcart',\r\n\t\tid: 'linkcart',\r\n\t\tcontexts: ['all']\r\n\t})\r\n\tchrome.storage.sync.set({ links: '' }, function () {\r\n\t})\r\n})\r\n\r\n/**\r\n ** DESCRIPTION: context menu to add links\r\n */\r\nchrome.contextMenus.onClicked.addListener((itemData) => {\r\n\tif (itemData.menuItemId == \"linkcart\") {\r\n\t\tchrome.tabs.executeScript({\r\n\t\t\tcode: '(' + modifyDOM + ')();'\r\n\t\t}, (result) => {\r\n\t\t\tvar coll = document.querySelectorAll(\".collapsible\").length + 1\r\n\t\t\tvar acco = `\r\n\t\t\t\t\t<div id=\"accordion-${coll}\">\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"collapsible\">\r\n\t\t\t\t\t\t\t\t${result[0].title}\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<span class=\"info-del\"><a href=\"#\" class=\"delete_acc\">DELETE</a></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t<a href=\"${result[0].link}\" class=\"d-none\"></a>\r\n\t\t\t\t\t\t\t<p>${result[0].description}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t`\r\n\t\t\tchrome.storage.sync.get(null, function (result) {\r\n\t\t\t\tvar links = result.links + acco\r\n\t\t\t\tchrome.storage.sync.set({ links }, function () {\r\n\t\t\t\t})\r\n\t\t\t})\r\n\t\t})\r\n\t}\r\n})\r\n\r\nwindow.onload = (e) => {\r\n\tcopyCartLink()\r\n\tgetLinks()\r\n\taddLinks()\r\n\tclearLinks()\r\n\tdeleteAccordion()\r\n\texportToCsv()\r\n\taddToBookmark()\r\n}\r\n\r\n\r\n/**\r\n ** DESCRIPTION: gets tabs dom\r\n */\r\nfunction modifyDOM() {\r\n\tvar tab_dom = {}\r\n\tvar description = document.querySelector(`meta[name=\"description\"]`)\r\n\r\n\ttab_dom.description = description ? description.getAttribute('content') : document.title\r\n\ttab_dom.title = document.title ? document.title : ''\r\n\ttab_dom.link = window.location.href || ''\r\n\treturn tab_dom\r\n}\r\n\r\n\r\n/**\r\n ** DESCRIPTION: copies all links in cart\r\n */\r\nfunction copyCartLink() {\r\n\tvar copylinks = document.querySelector('#copy-links')\r\n\tvar links = ``\r\n\tif (copylinks) {\r\n\t\tcopylinks.addEventListener('click', (e) => {\r\n\t\t\tvar a_tags = document.querySelectorAll('.content a')\r\n\t\t\tif (a_tags.length > 0) {\r\n\t\t\t\tfor (var a_tag of a_tags) {\r\n\t\t\t\t\tlinks += a_tag.getAttribute('href') + '\\n\\n'\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tcopyToClipboard(links)\r\n\t\t\tcopylinks.innerHTML = 'COPIED !'\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\tcopylinks.innerHTML = 'COPY LINKS'\r\n\t\t\t}, 2000)\r\n\t\t})\r\n\t}\r\n}\r\n\r\n/**\r\n ** DESCRIPTION: delete a single accordion\r\n */\r\nfunction deleteAccordion() {\r\n\tvar delete_acc = document.querySelectorAll(\".delete_acc\")\r\n\tif (delete_acc) {\r\n\t\tdelete_acc.forEach((el) => {\r\n\t\t\tel.addEventListener(\"click\", function (e) {\r\n\t\t\t\tvar accordion_id = e.target.parentNode.parentNode.parentNode.getAttribute('id')\r\n\t\t\t\tremoveElement(accordion_id)\r\n\t\t\t\tsaveLinks()\r\n\t\t\t\texportToCsv(false)\r\n\t\t\t})\r\n\t\t})\r\n\t}\r\n}\r\n\r\n/**\r\n ** DESCRIPTION: fixes accordion to new links\r\n */\r\nfunction accordion() {\r\n\tvar coll = document.querySelectorAll(\".collapsible\")\r\n\tcoll.forEach((el) => {\r\n\t\tel.addEventListener(\"click\", function (e) {\r\n\t\t\tthis.classList.toggle(\"active\")\r\n\t\t\tvar content = this.parentNode.parentNode.querySelector('.content')\r\n\t\t\tif (content.style.display === \"block\") {\r\n\t\t\t\tcontent.style.display = \"none\"\r\n\t\t\t} else {\r\n\t\t\t\tcontent.style.display = \"block\"\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n}\r\n\r\n\r\n/**\r\n ** DESCRIPTION: get stored links\r\n */\r\nfunction getLinks() {\r\n\tchrome.storage.sync.get(null, function (result) {\r\n\t\tvar main = document.querySelector('main')\r\n\t\tif (main) {\r\n\t\t\tmain.innerHTML = result.links\r\n\t\t\taccordion()\r\n\t\t\tdeleteAccordion()\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/**\r\n ** DESCRIPTION: adds new link\r\n */\r\nfunction addLinks() {\r\n\tvar add_link = document.getElementById('add-link')\r\n\r\n\r\n\tif (add_link) {\r\n\t\tadd_link.addEventListener('click', (e) => {\r\n\r\n\t\t\tchrome.tabs.executeScript({\r\n\t\t\t\tcode: '(' + modifyDOM + ')();'\r\n\t\t\t}, (result) => {\r\n\t\t\t\tvar coll = document.querySelectorAll(\".collapsible\").length + 1\r\n\t\t\t\tvar acco = `\r\n\t\t\t\t\t<div id=\"accordion-${coll}\">\r\n\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"collapsible\">\r\n\t\t\t\t\t\t\t\t${result[0].title}\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<span class=\"info-del\"><a href=\"#\" class=\"delete_acc\">DELETE</a></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t<a href=\"${result[0].link}\" class=\"d-none\"></a>\r\n\t\t\t\t\t\t\t<p>${result[0].description}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t`\r\n\r\n\t\t\t\taccordion()\r\n\t\t\t\tdeleteAccordion()\r\n\r\n\t\t\t\tdocument.querySelector('main').insertAdjacentHTML('beforeend', acco)\r\n\r\n\t\t\t\taccordion()\r\n\t\t\t\tdeleteAccordion()\r\n\r\n\t\t\t\tsaveLinks()\r\n\r\n\t\t\t\texportToCsv(false)\r\n\t\t\t})\r\n\t\t})\r\n\t}\r\n}\r\n\r\n/**\r\n ** DESCRIPTION: clears all links in store\r\n */\r\nfunction clearLinks() {\r\n\tvar clear_link = document.querySelector('#clear-link')\r\n\tif (clear_link) {\r\n\t\tclear_link.addEventListener('click', (e) => {\r\n\t\t\tchrome.storage.sync.set({ links: '' }, function () {\r\n\t\t\t\tdocument.querySelector('main').innerHTML = ''\r\n\t\t\t})\r\n\t\t})\r\n\t}\r\n}\r\n\r\n/**\r\n ** DESCRIPTION: saves links to store\r\n */\r\nfunction saveLinks() {\r\n\tvar accs_data = document.querySelector('main').innerHTML\r\n\tchrome.storage.sync.set({ links: accs_data }, function () {\r\n\t})\r\n}\r\n\r\n/**\r\n ** DESCRIPTION: generates csv file with id, links, description\r\n */\r\nfunction exportToCsv(fire = true) {\r\n\tvar export_to_csv_button_tag = document.querySelector('#export-to-csv')\r\n\tvar fire_click = fire\r\n\tif (export_to_csv_button_tag) {\r\n\t\texport_to_csv_button_tag.addEventListener('click', (event) => {\r\n\t\t\tevent.preventDefault()\r\n\t\t\tchrome.storage.sync.get(null, function (result) {\r\n\t\t\t\tvar accordions = result.links\r\n\t\t\t\tvar doc = new DOMParser().parseFromString(accordions, \"text/html\")\r\n\t\t\t\tvar accordion = doc.querySelectorAll('body > div')\r\n\t\t\t\tvar link_descriptions = [...doc.querySelectorAll('body .d-flex .collapsible')]\r\n\t\t\t\t\t.map((button) => (button.innerText.trim()))\r\n\t\t\t\tvar links = [...doc.querySelectorAll('body .content a')].map((a) => (a.href))\r\n\t\t\t\tvar csv = []\r\n\r\n\t\t\t\tif (accordion.length > 0) {\r\n\t\t\t\t\tfor (var i = 0; i < accordion.length; i++) {\r\n\t\t\t\t\t\tlet id = i + 1\r\n\t\t\t\t\t\tlet urls = links[i]\r\n\t\t\t\t\t\tlet description = link_descriptions[i]\r\n\t\t\t\t\t\tcsv.push([id, urls, description])\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvar csv_output = makeCsv([\r\n\t\t\t\t\t\t['id', 'links', 'dscriptions'],\r\n\t\t\t\t\t\t...csv\r\n\t\t\t\t\t])\r\n\r\n\t\t\t\t\tdocument.querySelector('#csv-dump').setAttribute('href', csv_output)\r\n\t\t\t\t\tif (fire_click) document.querySelector('#csv-dump').click()\r\n\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t})\r\n\t}\r\n}\r\n\r\n/**\r\n ** DESCRIPTION: bookmarks all links in cart\r\n */\r\nfunction addToBookmark(fire = true) {\r\n\tvar add_to_bookmark_button_tag = document.querySelector('#add-to-bookmark')\r\n\tvar fire_click = fire\r\n\tif (add_to_bookmark_button_tag) {\r\n\t\tadd_to_bookmark_button_tag.addEventListener('click', (event) => {\r\n\t\t\tevent.preventDefault()\r\n\t\t\tvar bookmark_folder_name = prompt('Please enter folder name for bookmarks', 'linkcart')\r\n\t\t\tchrome.storage.sync.get(null, function (result) {\r\n\t\t\t\tvar accordions = result.links\r\n\t\t\t\tvar doc = new DOMParser().parseFromString(accordions, \"text/html\")\r\n\t\t\t\tvar accordion = doc.querySelectorAll('body > div')\r\n\t\t\t\tvar link_descriptions = [...doc.querySelectorAll('body .d-flex .collapsible')]\r\n\t\t\t\t\t.map((button) => (button.innerText.trim()))\r\n\t\t\t\tvar links = [...doc.querySelectorAll('body .content a')].map((a) => (a.href))\r\n\r\n\t\t\t\tif (accordion.length > 0) {\r\n\t\t\t\t\tchrome.bookmarks.create({\r\n\t\t\t\t\t\ttitle: bookmark_folder_name,\r\n\t\t\t\t\t\turl: null\r\n\t\t\t\t\t}, (bookmarkItem) => {\r\n\t\t\t\t\t\tfor (var i = 0; i < accordion.length; i++) {\r\n\t\t\t\t\t\t\tlet urls = links[i]\r\n\t\t\t\t\t\t\tlet description = link_descriptions[i]\r\n\t\t\t\t\t\t\tchrome.bookmarks.create({\r\n\t\t\t\t\t\t\t\tparentId: bookmarkItem.id,\r\n\t\t\t\t\t\t\t\ttitle: description,\r\n\t\t\t\t\t\t\t\turl: urls\r\n\t\t\t\t\t\t\t})\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t})\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t})\r\n\t}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ })

/******/ });