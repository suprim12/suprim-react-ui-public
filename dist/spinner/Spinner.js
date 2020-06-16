"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Spinner = require("./Spinner.Style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Spinner = function Spinner(_ref) {
  var type = _ref.type,
      size = _ref.size,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["type", "size", "children"]);

  switch (type) {
    case 'orginal':
      return /*#__PURE__*/_react.default.createElement(_Spinner.SpinnerOrginialStyle, rest, /*#__PURE__*/_react.default.createElement("span", {
        className: "loading"
      }, /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("i", null)));

    case 'circle':
      return /*#__PURE__*/_react.default.createElement(_Spinner.SpinnerCircleStyle, _extends({
        size: size
      }, rest), /*#__PURE__*/_react.default.createElement("svg", {
        className: "circle circle-".concat(size),
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/_react.default.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "45"
      })));

    case 'circle-one':
      return /*#__PURE__*/_react.default.createElement(_Spinner.SpinnerCircleOneStyle, _extends({
        size: size
      }, rest), /*#__PURE__*/_react.default.createElement("div", {
        className: "donut donut-".concat(size)
      }));

    default:
      return /*#__PURE__*/_react.default.createElement(_Spinner.SpinnerOrginialStyle, rest, /*#__PURE__*/_react.default.createElement("span", {
        className: "loading"
      }, /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("i", null)));
  }
};

Spinner.defaultProps = {
  type: 'orginal',
  size: 'small'
};
Spinner.propTypes = {
  type: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'mid', 'large'])
};
var _default = Spinner;
exports.default = _default;