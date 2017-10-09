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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Support = function () {
  function Support() {
    _classCallCheck(this, Support);

    return this;
  }

  _createClass(Support, [{
    key: 'init',
    value: function init(values) {
      var participants_max = values.participants_max,
          participants_val = values.participants_val,
          target = values.target,
          collected = values.collected,
          target_elem_id = values.target_elem_id;

      // calculatete valuebar width

      var valuebar_width = Math.ceil(collected / target * 100);
      // cap to 100%
      valuebar_width = valuebar_width > 100 ? 100 : valuebar_width;

      var s = "";
      // valuebar
      s += '<div class="support-box__stats__valuebar">';
      s += '<span style="width:' + valuebar_width + '%;"></span>';
      s += '</div>';
      // participants
      s += '<div class="support-box__stats__participant">';
      s += '<span class="val"><span>' + participants_val.toLocaleString("de-DE") + '</span><span> Mitglier</span></span>';
      s += '<span class="max">von ' + participants_max.toLocaleString("de-DE") + '</span>';
      s += '</div>';
      // collected amount
      s += '<div class="support-box__stats__amount">';
      s += '<span class="val">&euro; ' + collected.toLocaleString("de-DE") + '</span>';
      s += '<span class="max">von &euro; ' + target.toLocaleString("de-DE") + '</span>';
      s += '</div>';

      var target_elem = document.getElementById(target_elem_id);
      target_elem.setAttribute('class', 'support-box__stats');
      target_elem.innerHTML = s;
    }
  }]);

  return Support;
}();

window.Support = Support;

/***/ })

/******/ });