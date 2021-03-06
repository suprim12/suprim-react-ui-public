"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ToastProvider = require("./ToastProvider");

var _Toast = require("./Toast.Style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Toast(_ref) {
  var children = _ref.children,
      id = _ref.id,
      hovered = _ref.hovered,
      count = _ref.count,
      total = _ref.total,
      type = _ref.type;

  var _useToasts = (0, _ToastProvider.useToasts)(),
      remove = _useToasts.remove;

  var reverseIndex = (0, _react.useMemo)(function () {
    return total - (count + 1);
  }, [total, count]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hide = _useState4[0],
      setHide = _useState4[1];

  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      setVisible(true);
      clearTimeout(timer);
    }, 10);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  (0, _react.useEffect)(function () {
    var unMount = false;
    if (unMount) return;
    if (hovered) return;
    var timer = setTimeout(function () {
      setHide(true);
      setTimeout(function () {
        remove(id);
      }, 1000);
    }, 3000);
    return function () {
      unMount = true;
      clearTimeout(timer);
    };
  }, [id, remove, hovered]);
  return /*#__PURE__*/_react.default.createElement(_Toast.ToastStyle, {
    count: reverseIndex,
    hovered: hovered,
    total: total,
    className: "supirm-ui-toast suprim-ui-toast-".concat(type, "  ").concat(visible && !hide ? 'visible' : '', "   ").concat(hide ? 'hide' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "supirm-ui-toast--text"
  }, children), /*#__PURE__*/_react.default.createElement(_Toast.ToastCloseStyle, {
    onClick: function onClick() {
      return remove(id);
    },
    className: "supirm-ui-toast--close-btn"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }))));
}

Toast.propTypes = {
  type: _propTypes.default.oneOf(['default', 'secondary', 'primary', 'danger', 'warning', 'success']),
  hovered: _propTypes.default.bool
};
Toast.defaultProps = {
  type: 'default',
  hovered: false
};
var _default = Toast;
exports.default = _default;