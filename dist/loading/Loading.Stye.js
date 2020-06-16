"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styles = require("../styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0.2;\n  }\n\n  20% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.2;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loadingdot = (0, _styledComponents.keyframes)(_templateObject());

var LoadingStyle = _styledComponents.default.div.withConfig({
  displayName: "LoadingStye__LoadingStyle",
  componentId: "sc-19f3wtj-0"
})(["display:inline-flex;align-items:center;position:relative;width:100%;height:100%;label{margin-right:5px;color:", ";}label:global(*){margin:0;}.loading{width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:transparent;user-select:none;}i{width:5px;height:5px;border-radius:50%;background-color:", ";margin:0 5px;display:inline-block;animation:", " 1.4s infinite both;}i:nth-child(2){animation-delay:0.2s;}i:nth-child(3){animation-delay:0.4s;}"], function (props) {
  return props.theme.loadinglabelColor || _styles.defaultTheme.loadinglabelColor;
}, function (props) {
  return props.theme.loadingColor || _styles.defaultTheme.loadingColor;
}, loadingdot);

exports.LoadingStyle = LoadingStyle;