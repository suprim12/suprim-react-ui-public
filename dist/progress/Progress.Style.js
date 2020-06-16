"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressStyle = _styledComponents.default.div.withConfig({
  displayName: "ProgressStyle__ProgressStyle",
  componentId: "sc-1816oou-0"
})(["position:relative;width:100%;height:0.625rem;background-color:", ";border-radius:50px;&.progress-default{.progress-inner{background-color:", ";}}&.progress-secondary{.progress-inner{background-color:", ";}}&.progress-primary{.progress-inner{background-color:", ";}}&.progress-danger{.progress-inner{background-color:", ";}}&.progress-warning{.progress-inner{background-color:", ";}}&.progress-success{.progress-inner{background-color:", ";}}.progress-inner{position:absolute;top:0px;left:0px;height:100%;bottom:0px;background-color:", ";width:", "%;transition:all 100ms ease-in 0s;border-radius:5px;}.progress-bar{position:fixed;top:-1000px;opacity:0;visibility:hidden;pointer-events:none;}"], function (props) {
  return props.theme.borderColor || _styles.defaultTheme.borderColor;
}, function (props) {
  return (props.color ? props.color : props.theme.secondaryColor) || _styles.defaultTheme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor || _styles.defaultTheme.secondaryColor;
}, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.theme.errorColor || _styles.defaultTheme.errorColor;
}, function (props) {
  return props.theme.warningColor || _styles.defaultTheme.warningColor;
}, function (props) {
  return props.theme.successColor || _styles.defaultTheme.successColor;
}, function (props) {
  return (props.color ? props.color : props.theme.secondaryColor) || _styles.defaultTheme.secondaryColor;
}, function (props) {
  return props.value / props.max * 100;
});

exports.ProgressStyle = ProgressStyle;