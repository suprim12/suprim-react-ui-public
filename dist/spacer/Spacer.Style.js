"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpacerStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpacerStyle = _styledComponents.default.span.withConfig({
  displayName: "SpacerStyle__SpacerStyle",
  componentId: "sc-1sptzus-0"
})(["display:block;height:1px;width:1px;margin-left:", "px;margin-top:", "px;"], function (props) {
  return 20.3333 * props.x;
}, function (props) {
  return 20.3333 * props.y;
});

exports.SpacerStyle = SpacerStyle;