"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastCloseStyle = exports.ToastStyle = exports.ToastWrapperStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToastWrapperStyle = _styledComponents.default.div.withConfig({
  displayName: "ToastStyle__ToastWrapperStyle",
  componentId: "sc-6zs2g3-0"
})(["position:fixed;width:420px;max-width:90vw;bottom:16pt;right:16pt;z-index:2000;box-sizing:border-box;transition:all 400ms ease 0s;&.hover{transform:translate3d(0px,-10px,0px);}"]);

exports.ToastWrapperStyle = ToastWrapperStyle;

var ToastStyle = _styledComponents.default.div.withConfig({
  displayName: "ToastStyle__ToastStyle",
  componentId: "sc-6zs2g3-1"
})(["width:420px;max-width:90vw;max-height:75px;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;background-color:", ";color:", ";position:absolute;bottom:0px;right:0px;opacity:", ";box-shadow:", ";transform:translate3d(0px,100%,0px) scale(1);border-width:0px;border-style:initial;border-color:", ";border-image:initial;border-radius:5px;padding:16pt;transition:transform 400ms ease 0ms,visibility 200ms ease 0ms,opacity 200ms ease 0ms;&.suprim-ui-toast-primary{background-color:", ";color:", ";.supirm-ui-toast--close-btn{svg{color:", ";}}}&.suprim-ui-toast-success{background-color:", ";color:", ";.supirm-ui-toast--close-btn{svg{color:", ";}}}&.suprim-ui-toast-danger{background-color:", ";color:", ";.supirm-ui-toast--close-btn{svg{color:", ";}}}&.suprim-ui-toast-warning{background-color:", ";color:", ";.supirm-ui-toast--close-btn{svg{color:", ";}}}&.suprim-ui-toast-secondary{background-color:", ";color:", ";.supirm-ui-toast--close-btn{svg{color:", ";}}}&.hide{opacity:0;visibility:hidden;pointer-events:none;}&.visible{opacity:1;transform:", ";}"], function (props) {
  return props.theme.subbackgroundInverseColor;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.count >= 4 ? 0 : 1;
}, function (props) {
  return props.count > 4 ? 'none' : 'rgba(0, 0, 0, 0.12) 0px 5px 10px';
}, function (props) {
  return props.theme.borderColor;
}, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  return props.theme.successColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  return props.theme.warningColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  return props.theme.primarybtntextColor;
}, function (props) {
  var calc = "100% + -75px + -".concat(20 * props.count, "px");
  if (props.count >= 4) return "translate3d(0, -75px, -".concat(props.count, "}px) scale(.7); opacity: 0;");

  if (props.hovered) {
    return "translate3d(0, ".concat(props.count * -75, "px, -").concat(props.count, "px) scale(").concat(props.total === 1 ? 1 : 0.98205, ")");
  }

  return "translate3d(0, calc(".concat(calc, "), -").concat(props.count, "px) scale(").concat(1 - 0.05 * props.count, ")");
});

exports.ToastStyle = ToastStyle;

var ToastCloseStyle = _styledComponents.default.button.withConfig({
  displayName: "ToastStyle__ToastCloseStyle",
  componentId: "sc-6zs2g3-2"
})(["background:transparent;border:none;cursor:pointer;outline:none;svg{height:18px;color:", ";}"], function (props) {
  return props.theme.textColor;
});

exports.ToastCloseStyle = ToastCloseStyle;