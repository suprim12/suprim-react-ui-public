"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CodeStyle = require("./CodeStyle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Code = function Code(_ref) {
  var blocks = _ref.blocks,
      width = _ref.width,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["blocks", "width", "children", "className"]);

  return /*#__PURE__*/_react.default.createElement(_CodeStyle.CodeStyle, _extends({
    width: width,
    className: "".concat(blocks ? 'block' : '', " ").concat(className ? className : '')
  }, rest), children);
};

Code.propTypes = {
  blocks: _propTypes.default.bool,
  width: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = Code;
exports.default = _default;