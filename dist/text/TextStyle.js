"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextStyle = _styledComponents.default.div.withConfig({
  displayName: "TextStyle",
  componentId: "sc-156kzrp-0"
})(["font-family:", ";margin:0 0 0.625rem 0;color:", ";", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " &.b{font-weight:600;}"], _styles.typography.primaryFont, function (props) {
  return props.theme.texttitleColor || _styles.defaultTheme.texttitleColor;
}, function (props) {
  return props.as === "h1" && "\n    font-size:".concat(_styles.typography.h1, ";\n    letter-spacing: -0.066875rem;\n    line-height: 1.5;\n    font-weight: 700;\n    color:").concat(props.theme.texttitleColor || _styles.defaultTheme.texttitleColor, ";\n    ");
}, function (props) {
  return props.as === "h2" && "\n    font-size:".concat(_styles.typography.h2, ";\n    letter-spacing: -0.020625rem;\n    font-weight: 600;\n    color:").concat(props.theme.texttitleColor || _styles.defaultTheme.texttitleColor, ";\n    ");
}, function (props) {
  return props.as === "h3" && "\n    font-size:".concat(_styles.typography.h3, ";\n    letter-spacing: -0.029375rem;\n    font-weight: 600;\n    color:").concat(props.theme.texttitleColor || _styles.defaultTheme.texttitleColor, ";\n    ");
}, function (props) {
  return props.as === "h4" && "\n    font-size:".concat(_styles.typography.h4, ";\n    letter-spacing: -0.020625rem;\n    font-weight: 600;\n    color:").concat(props.theme.texttitleColor || _styles.defaultTheme.texttitleColor, ";\n    \n    ");
}, function (props) {
  return props.as === "h5" && "\n    font-size:".concat(_styles.typography.h5, ";\n    letter-spacing: -0.01125rem;\n    font-weight: 600;\n    color:").concat(props.theme.texttitleColor || _styles.defaultTheme.texttitleColor, ";\n    ");
}, function (props) {
  return props.as === "h6" && "\n    font-size:".concat(_styles.typography.h6, ";\n    letter-spacing: -0.005625rem;\n    font-weight: 600;\n    color:").concat(props.theme.texttitleColor || _styles.defaultTheme.texttitleColor, ";\n    ");
}, function (props) {
  return props.as === "p" && "\n    font-size:".concat(_styles.typography.p, ";\n    line-height: 1.625em;\n    color:").concat(props.theme.textColor || _styles.defaultTheme.textColor, ";\n    ");
}, function (props) {
  return props.as === "b" && "\n    font-size:".concat(_styles.typography.p, ";\n    line-height: 1.625em;\n    color:").concat(props.theme.textColor || _styles.defaultTheme.textColor, ";\n    font-weight:600;\n    ");
}, function (props) {
  return props.as === "blockquote" && "\n        font-size:".concat(_styles.typography.p, ";\n        margin: 1.5rem 0px;\n        background-color: ").concat(props.theme.btndisabledbackgroundColor || _styles.defaultTheme.btndisabledbackgroundColor, ";\n        color:").concat(props.theme.textColor || _styles.defaultTheme.textColor, ";\n        padding:0.875rem 1rem;\n        border-radius:5px;\n    ");
}, function (props) {
  return props.type === "primary" && "\n    color:".concat(props.theme.primaryColor || _styles.defaultTheme.primaryColor, ";\n    ");
}, function (props) {
  return props.type === "success" && "\n    color:".concat(props.theme.successColor || _styles.defaultTheme.successColor, ";\n    ");
}, function (props) {
  return props.type === "warning" && "\n    color:".concat(props.theme.warningColor || _styles.defaultTheme.warningColor, ";\n    ");
}, function (props) {
  return props.type === "danger" && "\n    color:".concat(props.theme.errorColor || _styles.defaultTheme.errorColor, ";\n    ");
});

exports.TextStyle = TextStyle;