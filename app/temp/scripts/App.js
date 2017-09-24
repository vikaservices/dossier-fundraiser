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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nav = __webpack_require__(1);

var _nav2 = _interopRequireDefault(_nav);

var _headerSticky = __webpack_require__(2);

var _headerSticky2 = _interopRequireDefault(_headerSticky);

var _btn = __webpack_require__(3);

var _btn2 = _interopRequireDefault(_btn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = new _nav2.default();
var headerSticky = new _headerSticky2.default();
var btnPrimary = new _btn2.default("btn--primary");
var btnSecondary = new _btn2.default("btn--secondary");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nav = function () {
  function Nav() {
    _classCallCheck(this, Nav);

    // regular header links
    this.navLinks = document.getElementsByClassName("nav-link");
    // sticky menu title
    this.stickyMenu = document.getElementsByClassName("header-sticky__title")[0];
    // sticky menu links box
    this.stickyMenuContent = document.getElementsByClassName("header-sticky__links")[0];
    // sticky header links
    this.stickyLinks = document.getElementsByClassName("sticky-link");
    this.events();
  }

  _createClass(Nav, [{
    key: "events",
    value: function events() {
      console.log(this.navLinks);
      for (var i = 0; i < this.navLinks.length; i++) {
        this.navLinks[i].addEventListener("click", this.handleClick.bind(this));
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      console.log("click");
      console.log(e.target);
      // remove active from all links
      for (var i = 0; i < this.navLinks.length; i++) {
        this.navLinks[i].classList.remove("header__links--active");
      }
      // remove active from all sticky header links
      for (var _i = 0; _i < this.stickyLinks.length; _i++) {
        this.stickyLinks[_i].classList.remove("header-sticky__links--active");
      }
      // make clicked link active
      e.target.classList.toggle("header__links--active");
      // hide sticky menu if open and remove active state from it't title
      this.stickyMenu.classList.remove("header-sticky__title--is-active");
      this.stickyMenuContent.classList.remove("header-sticky__links--is-visible");
    }
  }]);

  return Nav;
}();

exports.default = Nav;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderSticky = function () {
  function HeaderSticky() {
    _classCallCheck(this, HeaderSticky);

    // sticky menu title
    this.menu = document.getElementsByClassName("header-sticky__title")[0];
    // sticky menu links box
    this.menuContent = document.getElementsByClassName("header-sticky__links")[0];
    // sticky header links
    this.stickyLinks = document.getElementsByClassName("sticky-link");
    // mobile hamburger icon
    this.menuIcon = document.getElementsByClassName("header-sticky__menu-icon")[0];
    // regular header links
    this.navLinks = document.getElementsByClassName("nav-link");
    this.events();
  }

  _createClass(HeaderSticky, [{
    key: "events",
    value: function events() {
      // click handler for sticky menu title
      this.menu.addEventListener("click", this.handleTitleClick.bind(this));
      // click handler for mobile
      this.menuIcon.addEventListener("click", this.handleTitleClick.bind(this));
      // click handlers for sticky menu link items
      for (var i = 0; i < this.stickyLinks.length; i++) {
        this.stickyLinks[i].addEventListener("click", this.handleLinkClick.bind(this));
      }
    }
  }, {
    key: "handleLinkClick",
    value: function handleLinkClick(e) {
      // close menu
      this.menuContent.classList.remove("header-sticky__links--is-visible");
      // remove active from all sticky header links
      for (var i = 0; i < this.stickyLinks.length; i++) {
        this.stickyLinks[i].classList.remove("header-sticky__links--active");
      }
      // remove selected class from regular header nav links
      for (var _i = 0; _i < this.navLinks.length; _i++) {
        this.navLinks[_i].classList.remove("header__links--active");
      }
      e.target.classList.toggle("header-sticky__links--active");
    }
  }, {
    key: "handleTitleClick",
    value: function handleTitleClick(e) {
      // toggle active class from menu title
      this.menu.classList.toggle("header-sticky__title--is-active");
      // toggle menu visibility
      this.menuContent.classList.toggle("header-sticky__links--is-visible");

      this.menuIcon.classList.toggle("header-sticky__menu-icon--close-x");
    }
  }]);

  return HeaderSticky;
}();

exports.default = HeaderSticky;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Btn = function () {
  function Btn(my_class) {
    _classCallCheck(this, Btn);

    this.my_class = my_class;
    this.btns = document.getElementsByClassName(my_class);
    this.events();
  }

  _createClass(Btn, [{
    key: "events",
    value: function events() {
      for (var i = 0; i < this.btns.length; i++) {
        this.btns[i].addEventListener("mousedown", this.handleMouseDown.bind(this));
        this.btns[i].addEventListener("mouseup", this.handleMouseUp.bind(this));
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      e.target.classList.add(this.my_class + "--pressed");
      e.stopPropagation();
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      e.target.classList.remove(this.my_class + "--pressed");
    }
  }]);

  return Btn;
}();

exports.default = Btn;

/***/ })
/******/ ]);