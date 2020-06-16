"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Progress = require("./Progress.Style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Progress = function Progress(_ref) {
  var children = _ref.children,
      type = _ref.type,
      value = _ref.value,
      max = _ref.max,
      color = _ref.color,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "type", "value", "max", "color", "className"]);

  return /*#__PURE__*/_react.default.createElement(_Progress.ProgressStyle, _extends({
    value: value,
    max: max,
    color: color,
    className: "progress progress-".concat(type, "  ").concat(className ? className : '')
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-inner"
  }), /*#__PURE__*/_react.default.createElement("progress", {
    value: value,
    max: max,
    className: "progress-bar"
  }));
};

Progress.propTypes = {
  type: _propTypes.default.oneOf(['default', 'secondary', 'primary', 'danger', 'warning', 'success']),
  value: _propTypes.default.string,
  max: _propTypes.default.string,
  className: _propTypes.default.string
};
Progress.defaultProps = {
  value: "0",
  max: "100",
  type: 'default'
};
var _default = Progress;
exports.default = _default;