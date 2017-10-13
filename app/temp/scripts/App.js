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

var _btn = __webpack_require__(2);

var _btn2 = _interopRequireDefault(_btn);

var _fluid_video = __webpack_require__(3);

var _fluid_video2 = _interopRequireDefault(_fluid_video);

var _share = __webpack_require__(4);

var _share2 = _interopRequireDefault(_share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = new _nav2.default();
// const headerMenu = new Menu();

// import Menu from './modules/menu';
var btnPrimary = new _btn2.default("btn--primary");
var btnSecondary = new _btn2.default("btn--secondary");
var btnSupportPrimary = new _btn2.default("btn-support--primary");
var btnSupportSecondary = new _btn2.default("btn-support--secondary");
var fluidVideo = new _fluid_video2.default();
var share = new _share2.default();

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

    this.events();
  }

  _createClass(Nav, [{
    key: "events",
    value: function events() {
      var that = this;
      $(document).ready(function () {
        $(".menu__dropdown").click(function (event) {
          // show menu
          $(".menu__dropdown .menu__dropdown__links").toggleClass("menu--show-item");
          event.stopPropagation();
        });

        // mobile hamburger menu icon click handler
        $(".menu__dropdown .menu__menu-icon").click(function () {
          // change menu icon
          $(this).toggleClass("menu__menu-icon--close-x");
          // disable scroll
          $("body").toggleClass("disable-scroll");
          // add opacity to rest of document
          $(".wrapper").toggleClass("opaque");
        });

        that.setLinkVisibility();
      });

      $(window).resize(function () {
        that.setLinkVisibility();
      });

      $(window).click(that.hideMenu);
    }
  }, {
    key: "setLinkVisibility",
    value: function setLinkVisibility() {
      $(".menu .menu__link").show();
      $(".menu__dropdown__links").children("li").hide();

      var elem_cnt = $(".menu .menu__link").length;
      for (var i = 0; i < elem_cnt; i++) {

        var menu_box_w = $(".header--middle").width();
        var menu_w = $(".menu").width();
        if (menu_w > menu_box_w) {
          // hide item in header
          $(".menu .menu__link:visible").last().hide();
          // show item in dropdown
          $(".menu__dropdown__links").children("li:hidden").last().css("display", "block");
        } else {
          break;
        }
      }
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      $(".menu__dropdown .menu__dropdown__links").removeClass("menu--show-item");
      $(".menu__dropdown .menu__menu-icon").removeClass("menu__menu-icon--close-x");
      $("body").removeClass("disable-scroll");
      $(".wrapper").removeClass("opaque");
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
      var el = e.target;
      while (el && !$(el).hasClass(this.my_class)) {
        el = el.parentNode;
      }
      el.classList.add(this.my_class + "--pressed");
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      var el = e.target;
      while (el && !$(el).hasClass(this.my_class)) {
        el = el.parentNode;
      }
      el.classList.remove(this.my_class + "--pressed");
    }
  }]);

  return Btn;
}();

exports.default = Btn;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FluidVideo = function () {
  function FluidVideo() {
    _classCallCheck(this, FluidVideo);

    this.allVideos = $(".news-item__video iframe, .news-item__video object, .news-item__video embed"), this.fluidEl = $(".news-item__video");

    this.allVideos.each(function () {

      $(this)
      // jQuery .data does not work on object/embed elements
      .attr('data-aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
    });

    this.events();
  }

  _createClass(FluidVideo, [{
    key: "events",
    value: function events() {
      var that = this;
      $(window).resize(function () {
        var newWidth = that.fluidEl.width();
        that.allVideos.each(function () {
          var $el = $(this);
          $el.width(newWidth);
          $el.height(newWidth * $el.attr('data-aspectRatio'));
        });
      }).resize();
    }
  }]);

  return FluidVideo;
}();

exports.default = FluidVideo;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Share = function () {
  function Share() {
    _classCallCheck(this, Share);

    this.shareBtns = document.getElementsByClassName("share__item");

    this.events();
  }

  _createClass(Share, [{
    key: "events",
    value: function events() {
      if (this.shareBtns === undefined) {
        return false;
      }
      for (var i = 0; i < this.shareBtns.length; i++) {
        this.shareBtns[i].addEventListener("mousedown", this.handleMouseDown.bind(this), false);
        this.shareBtns[i].addEventListener("mouseup", this.handleMouseUp.bind(this), false);
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      var el = e.target;
      while (el && !$(el).hasClass("share__item")) {
        el = el.parentNode;
      }
      if (el.dataset.name === undefined) {
        return false;
      }
      el.classList.add(el.dataset.name + "--pressed");
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      var el = e.target;
      while (el && !$(el).hasClass("share__item")) {
        el = el.parentNode;
      }
      if (el.dataset.name === undefined) {
        return false;
      }
      el.classList.remove(el.dataset.name + "--pressed");
    }
  }]);

  return Share;
}();

exports.default = Share;

/***/ })
/******/ ]);