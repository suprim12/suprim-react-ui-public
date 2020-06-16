"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeStyle = _styledComponents.default.code.withConfig({
  displayName: "CodeStyle",
  componentId: "sk65x4-0"
})(["display:inline-flex;font-size:1rem;font-family:", ";font-weight:600;color:", ";user-select:all;white-space:nowrap;font-style:italic;&.block{display:flex;flex-direction:column;width:", ";border:1px solid;border-color:", ";padding:0.5rem 1.2rem;overflow-x:scroll;border-radius:5px;user-select:none;&::-webkit-scrollbar{display:none;}code{&:last-child{margin-bottom:0rem;}}}"], _styles.typography.primaryFont, function (props) {
  return props.theme.primaryColor || _styles.defaultTheme.primaryColor;
}, function (props) {
  return props.width || "100%";
}, function (props) {
  return props.theme.borderColor || _styles.defaultTheme.borderColor;
});

exports.CodeStyle = CodeStyle;