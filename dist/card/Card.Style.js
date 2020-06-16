"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardFooterStyle = exports.CardDividerStyle = exports.CardDescStyle = exports.CardTitleStyle = exports.CardImageStyle = exports.CardContentStyle = exports.CardStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardStyle = _styledComponents.default.div.withConfig({
  displayName: "CardStyle__CardStyle",
  componentId: "sc-1ca570p-0"
})(["display:flex;flex-direction:column;width:", ";box-shadow:none;box-sizing:border-box;color:rgb(0,0,0);background:", ";margin:0px;padding:0px;transition:all 0.2s ease 0s;border-radius:5px;border-width:1px;border-style:solid;border-color:", ";border-image:initial;margin-bottom:1rem;&.hoverable:hover{box-shadow:", ";}&.shadow{box-shadow:", ";}"], function (props) {
  return props.width || '100%';
}, function (props) {
  return props.theme.backgroundColor || _styles.defaultTheme.backgroundColor;
}, function (props) {
  return props.theme.borderColor || _styles.defaultTheme.borderColor;
}, function (props) {
  return props.theme.shadow || _styles.defaultTheme.shadow;
}, function (props) {
  return props.theme.shadow || _styles.defaultTheme.shadow;
});

exports.CardStyle = CardStyle;

var CardContentStyle = _styledComponents.default.div.withConfig({
  displayName: "CardStyle__CardContentStyle",
  componentId: "sc-1ca570p-1"
})(["padding:16pt;"]);

exports.CardContentStyle = CardContentStyle;

var CardImageStyle = _styledComponents.default.div.withConfig({
  displayName: "CardStyle__CardImageStyle",
  componentId: "sc-1ca570p-2"
})(["overflow:hidden;width:", ";height:auto;position:relative;max-width:100%;margin:0px auto;border-radius:5px;border-bottom-left-radius:0px;border-bottom-right-radius:0px;overflow:hidden;&.overlay::after{content:'';background:rgba(0,0,0,0.5);position:absolute;top:0;left:0;width:100%;height:100%;}"], function (props) {
  return props.width || '100%';
});

exports.CardImageStyle = CardImageStyle;

var CardTitleStyle = _styledComponents.default.h3.withConfig({
  displayName: "CardStyle__CardTitleStyle",
  componentId: "sc-1ca570p-3"
})(["font-weight:600;color:", ";a{text-decoration:none;color:", ";}"], function (props) {
  return props.theme.texttitleColor || _styles.defaultTheme.texttitleColor;
}, function (props) {
  return props.theme.texttitleColor || _styles.defaultTheme.texttitleColor;
});

exports.CardTitleStyle = CardTitleStyle;

var CardDescStyle = _styledComponents.default.small.withConfig({
  displayName: "CardStyle__CardDescStyle",
  componentId: "sc-1ca570p-4"
})(["font-size:", ";color:", ""], _styles.typography.small, function (props) {
  return props.theme.subtextColor || _styles.defaultTheme.subtextColor;
});

exports.CardDescStyle = CardDescStyle;

var CardDividerStyle = _styledComponents.default.div.withConfig({
  displayName: "CardStyle__CardDividerStyle",
  componentId: "sc-1ca570p-5"
})(["width:auto;max-width:100%;height:calc(1px);background-color:rgb(234,234,234);position:relative;margin:0px;"]);

exports.CardDividerStyle = CardDividerStyle;

var CardFooterStyle = _styledComponents.default.div.withConfig({
  displayName: "CardStyle__CardFooterStyle",
  componentId: "sc-1ca570p-6"
})(["display:flex;-webkit-box-align:center;align-items:center;color:inherit;background-color:inherit;font-size:0.875rem;border-bottom-left-radius:5px;border-bottom-right-radius:5px;min-height:calc(40pt);padding:8pt 16pt;overflow:hidden;border-top:1px solid  ", ";color:", ";&.js-between{justify-content:space-between;}"], function (props) {
  return props.theme.borderColor || _styles.defaultTheme.borderColor;
}, function (props) {
  return props.theme.texttitleColor || _styles.defaultTheme.texttitleColor;
});

exports.CardFooterStyle = CardFooterStyle;