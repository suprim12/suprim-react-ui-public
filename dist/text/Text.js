"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextStyle = require("./TextStyle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Text = function Text(_ref) {
  var as = _ref.as,
      b = _ref.b,
      className = _ref.className,
      type = _ref.type,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["as", "b", "className", "type", "children"]);

  return /*#__PURE__*/_react.default.createElement(_TextStyle.TextStyle, _extends({
    as: as,
    type: type,
    className: "".concat(b ? 'b' : '', " ").concat(className ? className : '')
  }, rest), children);
};

Text.propTypes = {
  as: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'b', 'blockquote']),
  type: _propTypes.default.oneOf(['success', 'warning', 'primary', 'danger', 'secondary']),
  b: _propTypes.default.bool,
  className: _propTypes.default.string
};
var _default = Text;
exports.default = _default;