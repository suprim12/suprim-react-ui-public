"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Loading = require("./Loading.Style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_Loading.LoadingStyle, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "loading"
  }, children && /*#__PURE__*/_react.default.createElement("label", null, children), /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("i", null)));
};

var _default = Loading;
exports.default = _default;