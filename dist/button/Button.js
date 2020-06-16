"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("./Button.Style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Button(_ref) {
  var type = _ref.type,
      size = _ref.size,
      variation = _ref.variation,
      className = _ref.className,
      leadingicon = _ref.leadingicon,
      trailingicon = _ref.trailingicon,
      animate = _ref.animate,
      loading = _ref.loading,
      disabled = _ref.disabled,
      shadow = _ref.shadow,
      ghost = _ref.ghost,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["type", "size", "variation", "className", "leadingicon", "trailingicon", "animate", "loading", "disabled", "shadow", "ghost", "children"]);

  var buttonref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var current = buttonref.current;

    var rippleeffect = function rippleeffect(e) {
      var btn = e.target;
      var x = e.pageX - btn.offsetLeft;
      var y = e.pageY - btn.offsetTop;
      var duration = 1000;
      var animationFrame, animationStart;

      var animationStep = function animationStep(timestamp) {
        if (!animationStart) {
          animationStart = timestamp;
        }

        var frame = timestamp - animationStart;

        if (frame < duration) {
          var easing = frame / duration * (2 - frame / duration);
          var circle = "circle at " + x + "px " + y + "px";
          var color = "rgba(162, 162, 162, " + 0.5 * (1 - easing) + ")";
          var stop = 90 * easing + "%";
          btn.style.backgroundImage = "radial-gradient(" + circle + ", " + color + " " + stop + ", transparent " + stop + ")";
          animationFrame = window.requestAnimationFrame(animationStep);
        } else {
          btn.style.backgroundImage = "none";
          window.cancelAnimationFrame(animationFrame);
        }
      };

      animationFrame = window.requestAnimationFrame(animationStep);
    };

    current !== null && current.addEventListener('click', rippleeffect);
    return function () {
      current !== null && current.removeEventListener('click', rippleeffect);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.ButtonStyle, _extends({
    type: type,
    disabled: loading || disabled,
    ref: animate ? buttonref : null,
    className: "suprim-btn suprim-btn-".concat(variation, " suprim-btn-size-").concat(size, "\n                 ").concat(shadow ? 'shadow-btn' : '', " \n                 ").concat(ghost ? 'ghost' : '', " \n                 ").concat(leadingicon ? 'leadingicon' : '', "\n                 ").concat(trailingicon ? 'trailingicon' : '', "\n                 ").concat(className ? className : '', "\n                ")
  }, rest), leadingicon, children, trailingicon));
}

Button.defaultProps = {
  type: 'button',
  animate: true,
  loading: false,
  disabled: false,
  shadow: false,
  size: 'default',
  variation: 'default'
};
Button.propTypes = {
  variation: _propTypes.default.oneOf(['default', 'warning', 'primary', 'danger', 'success']),
  size: _propTypes.default.oneOf(['default', 'small', 'mid', 'large', 'auto', 'fluid']),
  className: _propTypes.default.string,
  animate: _propTypes.default.bool,
  shadow: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['button', 'submit', 'reset'])
};
var _default = Button;
exports.default = _default;