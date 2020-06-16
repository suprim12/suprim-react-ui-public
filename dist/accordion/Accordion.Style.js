"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionHeaderStyle = exports.AccordionContentStyle = exports.AccordionDescStyle = exports.AccordionTitleStyle = exports.AccordionItemStyle = exports.AccordionStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionStyle = _styledComponents.default.div.withConfig({
  displayName: "AccordionStyle__AccordionStyle",
  componentId: "sc-3hfcx6-0"
})(["&.padded{.accordion-item-header{padding:16pt;}}&.shadow{.accordion-item{margin-bottom:1.5rem;}.accordion-item-header{border-radius:5px;box-shadow:", ";border-top:none;padding:16pt;border:1px solid rgb(234,234,234);}}"], function (props) {
  return props.theme.shadow || _styles.defaultTheme.shadow;
});

exports.AccordionStyle = AccordionStyle;

var AccordionItemStyle = _styledComponents.default.div.withConfig({
  displayName: "AccordionStyle__AccordionItemStyle",
  componentId: "sc-3hfcx6-1"
})(["&.shadow{margin-bottom:1.5rem;.accordion-item-header{border-radius:5px;box-shadow:", ";border-top:none;padding:16pt;}}"], function (props) {
  return props.theme.shadow || _styles.defaultTheme.shadow;
});

exports.AccordionItemStyle = AccordionItemStyle;

var AccordionTitleStyle = _styledComponents.default.h3.withConfig({
  displayName: "AccordionStyle__AccordionTitleStyle",
  componentId: "sc-3hfcx6-2"
})(["display:flex;width:100%;align-items:center;justify-content:space-between;font-size:", ";letter-spacing:-0.029375rem;font-weight:600;color:", ";svg,i{width:25px;height:25px;}"], _styles.typography.h3, function (props) {
  return props.theme.texttitleColor || _styles.defaultTheme.texttitleColor;
});

exports.AccordionTitleStyle = AccordionTitleStyle;

var AccordionDescStyle = _styledComponents.default.p.withConfig({
  displayName: "AccordionStyle__AccordionDescStyle",
  componentId: "sc-3hfcx6-3"
})(["font-size:", ";color:", ""], _styles.typography.small, function (props) {
  return props.theme.subtextColor || _styles.defaultTheme.subtextColor;
});

exports.AccordionDescStyle = AccordionDescStyle;

var AccordionContentStyle = _styledComponents.default.div.withConfig({
  displayName: "AccordionStyle__AccordionContentStyle",
  componentId: "sc-3hfcx6-4"
})(["margin:0 16pt;overflow:hidden;transition:0.2s ease-in-out;&.active{margin:16pt;}"]);

exports.AccordionContentStyle = AccordionContentStyle;

var AccordionHeaderStyle = _styledComponents.default.div.withConfig({
  displayName: "AccordionStyle__AccordionHeaderStyle",
  componentId: "sc-3hfcx6-5"
})(["display:flex;align-items:center;justify-content:space-between;padding:16pt 0px;border-top:1px solid rgb(234,234,234);border-bottom:1px solid rgb(234,234,234);cursor:pointer;&.shadow{border-top:none;padding:16pt;}&.active{svg,i{transform:rotate(180deg);}}.accordion-item-header--item{svg,i{width:25px;height:25px;transition:0.2s ease-in-out;}}"]);

exports.AccordionHeaderStyle = AccordionHeaderStyle;