"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = require("./Grid.Style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Grid = function Grid(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Grid.GridStyle, _extends({
    className: "row ".concat(className ? className : '')
  }, rest), children);
};

var GridItem = function GridItem(_ref2) {
  var sm = _ref2.sm,
      lg = _ref2.lg,
      md = _ref2.md,
      xl = _ref2.xl,
      className = _ref2.className,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["sm", "lg", "md", "xl", "className", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Grid.GridItemStyle, _extends({
    className: "wrap ".concat(md ? "wrap-md-".concat(md) : '', "   ").concat(sm ? "wrap-sm-".concat(sm) : '', "  ").concat(lg ? "wrap-lg-".concat(lg) : '', " ").concat(xl ? "wrap-xl-".concat(xl) : '', "  ").concat(className ? className : '')
  }, rest), children);
};

Grid.Item = GridItem;
var _default = Grid;
exports.default = _default;