"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = require("./Card.Style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Card = function Card(_ref) {
  var className = _ref.className,
      hoverable = _ref.hoverable,
      shadow = _ref.shadow,
      width = _ref.width,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "hoverable", "shadow", "width", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Card.CardStyle, _extends({
    width: width,
    className: "card ".concat(shadow ? 'shadow' : '', " ").concat(hoverable ? 'hoverable' : '', " ").concat(className ? className : '')
  }, rest), children);
};

var CardContent = function CardContent(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["className", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Card.CardContentStyle, _extends({
    className: "card-body ".concat(className ? className : '')
  }, rest), children);
};

var CardImage = function CardImage(_ref3) {
  var className = _ref3.className,
      overlay = _ref3.overlay,
      width = _ref3.width,
      children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ["className", "overlay", "width", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Card.CardImageStyle, _extends({
    width: width,
    className: "card-img ".concat(overlay ? 'overlay' : '', " ").concat(className ? className : '')
  }, rest), children);
};

var CardTitle = function CardTitle(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      rest = _objectWithoutProperties(_ref4, ["className", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Card.CardTitleStyle, _extends({
    className: "card-title ".concat(className ? className : '')
  }, rest), children);
};

var CardDescription = function CardDescription(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      rest = _objectWithoutProperties(_ref5, ["className", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Card.CardDescStyle, _extends({
    className: "card-desc ".concat(className ? className : '')
  }, rest), children);
};

var CardFooter = function CardFooter(_ref6) {
  var className = _ref6.className,
      children = _ref6.children,
      rest = _objectWithoutProperties(_ref6, ["className", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Card.CardFooterStyle, _extends({
    className: "card-footer ".concat(className ? className : '')
  }, rest), children);
};

var CardDivider = function CardDivider(_ref7) {
  var className = _ref7.className,
      children = _ref7.children,
      rest = _objectWithoutProperties(_ref7, ["className", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Card.CardDividerStyle, _extends({
    className: "card-divider ".concat(className ? className : '')
  }, rest), children);
};

Card.propTypes = {
  hoverable: _propTypes.default.bool,
  className: _propTypes.default.string
};
Card.Content = CardContent;
Card.Divider = CardDivider;
Card.Image = CardImage;
Card.Title = CardTitle;
Card.Desc = CardDescription;
Card.Footer = CardFooter;
var _default = Card;
exports.default = _default;