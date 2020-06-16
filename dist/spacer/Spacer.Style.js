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
})(["display:block;height:1px;width:1px;margin-left:calc(20.3333px  ", ");margin-top:calc(20.3333px  ", ");"], function (props) {
  return props.x ? "* ".concat(props.x) : '';
}, function (props) {
  return props.y ? "* ".concat(props.y) : '';
});

exports.SpacerStyle = SpacerStyle;