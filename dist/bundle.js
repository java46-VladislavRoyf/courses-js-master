/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models/course.js":
/*!******************************!*\
  !*** ./src/models/course.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCourse": () => (/* binding */ createCourse)
/* harmony export */ });
function createCourse(id, name, lecturer, hours, cost, openingDate) {
    return {id, name, lecturer, hours, cost, openingDate}
}

/***/ }),

/***/ "./src/utilities/random.js":
/*!*********************************!*\
  !*** ./src/utilities/random.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomDate": () => (/* binding */ getRandomDate),
/* harmony export */   "getRandomElement": () => (/* binding */ getRandomElement),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber)
/* harmony export */ });
function getRandomNumber(min, max) {
    (min > max) && ([max, min] = [min, max]); 
    return Math.floor(Math.random() * (max+1 - min) + min);
}


function getRandomElement(array) {
    return array[getRandomNumber(0, array.length - 1)];
}

function getRandomDate(minYear, maxYear) {
    const year = getRandomNumber(minYear, maxYear);
    const month = getRandomNumber(0, 11);
    const day = getRandomNumber(1, 31);
    const date = new Date(year, month, day);
    return date;
    
}



/***/ }),

/***/ "./src/utilities/randomCourse.js":
/*!***************************************!*\
  !*** ./src/utilities/randomCourse.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomCourse": () => (/* binding */ getRandomCourse)
/* harmony export */ });
/* harmony import */ var _models_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/course */ "./src/models/course.js");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random */ "./src/utilities/random.js");


function getRandomCourse(courseData) {
    
    const id = (0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(courseData["minId"], courseData["maxId"]);
    const name = (0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(courseData["courses"]);
    const lecturer = (0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomElement)(courseData["lectors"]);
    const hours = Math.round((0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(courseData["minHours"], courseData["maxHours"]) / 10) * 100;
    const cost = Math.round((0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(courseData["minCost"], courseData["maxCost"]) / 100) * 100;
    const openingDate = (0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomDate)(courseData["minYear"], courseData["maxYear"]);
    return (0,_models_course__WEBPACK_IMPORTED_MODULE_0__.createCourse)(id, name, lecturer, hours, cost, openingDate);
}


/***/ }),

/***/ "./src/config/courseData.json":
/*!************************************!*\
  !*** ./src/config/courseData.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"courses":["Java","Java Technologies","QA","React","JavaScript","HTML/CSS"],"lectors":["Abraham","Yakob","Sara","Yosef","Itshak","Vasya","Moshe"],"minCost":5000,"maxCost":30000,"minHours":80,"maxHours":500,"minYear":2000,"maxYear":2022,"minId":100000,"maxId":999999}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_courseData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/courseData.json */ "./src/config/courseData.json");
/* harmony import */ var _utilities_randomCourse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/randomCourse */ "./src/utilities/randomCourse.js");


const N_COURSES = 10;
function createCourses() {
    const courses = [];
    for(let i = 0; i < N_COURSES; i++) {
        courses.push((0,_utilities_randomCourse__WEBPACK_IMPORTED_MODULE_1__.getRandomCourse)(_config_courseData_json__WEBPACK_IMPORTED_MODULE_0__));
    }
    return courses;
}

function getCourseItems(courses) {
    return courses.map(i => `<li>${JSON.stringify(i)}<li>`).join('');
}
const ulElem = document.getElementById("courses");
ulElem.innerHTML = `${getCourseItems(createCourses())}`
//TODO rendering inside <ul>

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map