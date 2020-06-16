"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinnerCircleOneStyle = exports.SpinnerCircleStyle = exports.SpinnerOrginialStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styles = require("../styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var loadingdot = (0, _styledComponents.keyframes)(["0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}"]);
var spin = (0, _styledComponents.keyframes)(["to{transform:rotate(360deg);}"]);
var svganimation = (0, _styledComponents.keyframes)(["0%{transform:rotateZ(0deg);}100%{transform:rotateZ(360deg)}"]);
var circleanimation = (0, _styledComponents.keyframes)(["0%,25%{stroke-dashoffset:280;transform:rotate(0);}50%,75%{stroke-dashoffset:75;transform:rotate(45deg);}100%{stroke-dashoffset:280;transform:rotate(360deg);}"]);

var SpinnerOrginialStyle = _styledComponents.default.div.withConfig({
  displayName: "SpinnerStyle__SpinnerOrginialStyle",
  componentId: "sc-1fmzdhk-0"
})([".loading{width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:transparent;user-select:none;}i{width:5px;height:5px;border-radius:50%;background-color:", ";margin:0 5px;display:inline-block;animation:", " 1.4s infinite both;}i:nth-child(2){animation-delay:0.2s;}i:nth-child(3){animation-delay:0.4s;}"], function (props) {
  return props.theme.loadingColor || _styles.defaultTheme.loadingColor;
}, loadingdot);

exports.SpinnerOrginialStyle = SpinnerOrginialStyle;

var SpinnerCircleStyle = _styledComponents.default.div.withConfig({
  displayName: "SpinnerStyle__SpinnerCircleStyle",
  componentId: "sc-1fmzdhk-1"
})(["display:flex;justify-content:center;align-items:center;.circle-small{max-width:28px;height:24px;}.circle-mid{max-width:50px;height:40px;}.circle-large{max-width:100px;}svg{animation:2s linear infinite ", ";max-width:100px;}circle{animation:1.4s ease-in-out infinite both ", ";display:block;fill:transparent;stroke:", ";stroke-linecap:round;stroke-dasharray:283;stroke-dashoffset:280;stroke-width:10px;transform-origin:50% 50%;}"], svganimation, circleanimation, function (props) {
  return props.theme.loadingColor || _styles.defaultTheme.loadingColor;
});

exports.SpinnerCircleStyle = SpinnerCircleStyle;

var SpinnerCircleOneStyle = _styledComponents.default.div.withConfig({
  displayName: "SpinnerStyle__SpinnerCircleOneStyle",
  componentId: "sc-1fmzdhk-2"
})(["display:flex;justify-content:center;align-items:center;.donut{width:2rem;height:2rem;border-radius:50%;border:0.2rem solid rgba(202,202,202,0.2);border-top-color:", ";animation:0.5s ", " infinite linear;&.donut-small{width:1.5rem;height:1.5rem;border:0.1rem solid  rgba(202,202,202,0.2);border-top-color:", ";animation:0.5s ", " infinite linear;}&.donut-mid{width:2rem;height:2rem;border:0.2rem solid  rgba(202,202,202,0.2);border-top-color:", ";animation:0.5s ", " infinite linear;}&.donut-large{width:2.5rem;height:2.5rem;border:0.2rem solid  rgba(202,202,202,0.2);border-top-color:", ";animation:0.5s ", " infinite linear;}&.multi{border:0.2rem solid  rgba(202,202,202,0.2);border-bottom-color:", ";}}"], function (props) {
  return props.theme.loadingColor || _styles.defaultTheme.loadingColor;
}, spin, function (props) {
  return props.theme.loadingColor || _styles.defaultTheme.loadingColor;
}, spin, function (props) {
  return props.theme.loadingColor || _styles.defaultTheme.loadingColor;
}, spin, function (props) {
  return props.theme.loadingColor || _styles.defaultTheme.loadingColor;
}, spin, function (props) {
  return props.theme.loadingColor || _styles.defaultTheme.loadingColor;
});

exports.SpinnerCircleOneStyle = SpinnerCircleOneStyle;