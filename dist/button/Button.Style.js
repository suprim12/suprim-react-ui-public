"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaulButtonStyle = _styledComponents.default.button.withConfig({
  displayName: "ButtonStyle__DefaulButtonStyle",
  componentId: "sc-3cfark-0"
})(["display:flex;min-height:2.5rem;min-width:10.5rem;font-family:", ";width:max-content;font-weight:500;font-size:0.875rem;letter-spacing:0.2px;user-select:none;text-transform:capitalize;-webkit-box-pack:center;justify-content:center;align-items:center;text-align:center;white-space:nowrap;position:relative;color:", ";background-color:", ";cursor:pointer;pointer-events:auto;box-shadow:none;padding:0.75rem 2rem;border-radius:5px;outline:none;transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms,border 200ms ease 0ms,color 200ms ease 0ms;overflow:hidden;border-width:1px;border-style:solid;border-color:", ";border-image:initial;&:hover{border-color:", ";color:", ";}&.leadingicon,&.trailingicon{svg,i{height:16px;}}&.leadingicon{svg,i{margin-right:0.5rem;}}&.trailingicon{svg,i{margin-left:0.5rem;}}&:disabled{user-select:none;color:rgb(204,204,204);background-color:", ";cursor:not-allowed;pointer-events:auto;}&.shadow-btn:hover{cursor:pointer;pointer-events:auto;box-shadow:rgba(0,0,0,0.1) 0px 3px 8px;transform:translate3d(0px,-1px,0px);}"], _styles.typography.primaryFont, function (props) {
  return props.theme.btntextColor || _styles.defaultTheme.btntextColor;
}, function (props) {
  return props.theme.btnbackgroundColor || _styles.defaultTheme.btnbackgroundColor;
}, function (props) {
  return props.theme.borderColor || _styles.defaultTheme.borderColor;
}, function (props) {
  return props.theme.borderHoverColor || _styles.defaultTheme.borderHoverColor;
}, function (props) {
  return props.theme.btntextHoverColor || _styles.defaultTheme.btntextHoverColor;
}, function (props) {
  return props.theme.btndisabledbackgroundColor || _styles.defaultTheme.btndisabledbackgroundColor;
});

var ButtonStyle = (0, _styledComponents.default)(DefaulButtonStyle).withConfig({
  displayName: "ButtonStyle__ButtonStyle",
  componentId: "sc-3cfark-1"
})(["&.suprim-btn-size-auto{min-width:auto;}&.suprim-btn-size-small{min-width:auto;min-height:1rem;padding:0.5rem;font-size:0.75rem;}&.suprim-btn-size-mid{min-width:auto;min-height:1.5rem;padding:0.65rem 1.2rem;}&.suprim-btn-size-large{font-size:1rem;min-width:12.5rem;}&.suprim-btn-size-fluid{font-size:1rem;width:100%;min-width:auto;}&.suprim-btn-primary{border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";color:#fff;}&.ghost{background-color:transparent;color:", ";&:hover{border-color:", ";background-color:", ";color:#fff;}}}&.suprim-btn-success{border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";color:#fff;}&.ghost{background-color:transparent;color:", ";&:hover{border-color:", ";background-color:", ";color:#fff;}}}&.suprim-btn-danger{border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";color:#fff;}&.ghost{background-color:transparent;color:", ";&:hover{border-color:", ";background-color:", ";color:#fff;}}}&.suprim-btn-warning{border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";color:#fff;}&.ghost{background-color:transparent;color:", ";&:hover{border-color:", ";background-color:", ";color:#fff;}}}"], function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.primarybtntextColor || _styles.defaultTheme.primarybtntextColor;
}, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.successColor || _styles.defaultTheme.successColor;
}, function (props) {
  return props.theme.successColor || _styles.defaultTheme.successColor;
}, function (props) {
  return props.theme.primarybtntextColor || _styles.defaultTheme.primarybtntextColor;
}, function (props) {
  return props.theme.successdarkColor || _styles.defaultTheme.successdarkColor;
}, function (props) {
  return props.theme.successdarkColor || _styles.defaultTheme.successdarkColor;
}, function (props) {
  return props.theme.successColor || _styles.defaultTheme.successColor;
}, function (props) {
  return props.theme.successdarkColor || _styles.defaultTheme.successdarkColor;
}, function (props) {
  return props.theme.successdarkColor || _styles.defaultTheme.successdarkColor;
}, function (props) {
  return props.theme.errorColor || _styles.defaultTheme.errorColor;
}, function (props) {
  return props.theme.errorColor || _styles.defaultTheme.errorColor;
}, function (props) {
  return props.theme.primarybtntextColor || _styles.defaultTheme.primarybtntextColor;
}, function (props) {
  return props.theme.errordarkColor || _styles.defaultTheme.errordarkColor;
}, function (props) {
  return props.theme.errordarkColor || _styles.defaultTheme.errordarkColor;
}, function (props) {
  return props.theme.errorColor || _styles.defaultTheme.errorColor;
}, function (props) {
  return props.theme.errordarkColor || _styles.defaultTheme.errordarkColor;
}, function (props) {
  return props.theme.errordarkColor || _styles.defaultTheme.errordarkColor;
}, function (props) {
  return props.theme.warningColor || _styles.defaultTheme.warningColor;
}, function (props) {
  return props.theme.warningColor || _styles.defaultTheme.warningColor;
}, function (props) {
  return props.theme.primarybtntextColor || _styles.defaultTheme.primarybtntextColor;
}, function (props) {
  return props.theme.warningdarkColor || _styles.defaultTheme.warningdarkColor;
}, function (props) {
  return props.theme.warningdarkColor || _styles.defaultTheme.warningdarkColor;
}, function (props) {
  return props.theme.warningColor || _styles.defaultTheme.warningColor;
}, function (props) {
  return props.theme.warningdarkColor || _styles.defaultTheme.warningdarkColor;
}, function (props) {
  return props.theme.warningdarkColor || _styles.defaultTheme.warningdarkColor;
});
exports.ButtonStyle = ButtonStyle;