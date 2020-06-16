"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContainerStyle = _styledComponents.default.div.withConfig({
  displayName: "ContainerStyle__ContainerStyle",
  componentId: "sc-1fvbatp-0"
})(["width:100%;padding-right:", ";padding-left:", ";margin-right:auto;margin-left:auto;&.fluid{width:100%;max-width:100%;padding-right:", ";padding-left:", ";margin-right:auto;margin-left:auto;}@media (min-width:576px){max-width:540px;}@media (min-width:768px){max-width:720px;}@media (min-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1400px;}"], _styles.layout.gutter, _styles.layout.gutter, _styles.layout.gutter, _styles.layout.gutter);

exports.ContainerStyle = ContainerStyle;