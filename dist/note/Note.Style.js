"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoteStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoteStyle = _styledComponents.default.div.withConfig({
  displayName: "NoteStyle__NoteStyle",
  componentId: "sc-1590m5q-0"
})(["font-size:", ";line-height:1.8;color:", ";background-color:", ";padding:8pt 16pt;border-width:1px;border-style:solid;border-color:", ";border-image:initial;border-radius:5px;&.note-secondary{border-color:", ";color:", ";}&.note-primary{border-color:", ";color:", ";}&.note-danger{border-color:", ";color:", ";}&.note-warning{border-color:", ";color:", ";}&.note-success{border-color:", ";color:", ";}.note-label{text-transform:uppercase;user-select:none;line-height:1.5;padding-right:4pt;font-size:inherit;color:inherit;font-weight:700;}"], _styles.typography.small, function (props) {
  return props.theme.textColor || _styles.defaultTheme.textColor;
}, function (props) {
  return props.theme.backgroundColor || _styles.defaultTheme.backgroundColor;
}, function (props) {
  return props.theme.borderColor || _styles.defaultTheme.borderColor;
}, function (props) {
  return props.theme.secondaryColor || _styles.defaultTheme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor || _styles.defaultTheme.secondaryColor;
}, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.errorColor || _styles.defaultTheme.errorColor;
}, function (props) {
  return props.theme.errorColor || _styles.defaultTheme.errorColor;
}, function (props) {
  return props.theme.warningColor || _styles.defaultTheme.warningColor;
}, function (props) {
  return props.theme.warningColor || _styles.defaultTheme.warningColor;
}, function (props) {
  return props.theme.successColor || _styles.defaultTheme.successColor;
}, function (props) {
  return props.theme.successColor || _styles.defaultTheme.successColor;
});

exports.NoteStyle = NoteStyle;