"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useToasts = exports.ToastContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _Toast = _interopRequireDefault(require("./Toast"));

var _Toast2 = require("./Toast.Style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ToastContext = _react.default.createContext(null);

exports.ToastContext = ToastContext;
var id = 1;

var ToastProvider = function ToastProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      toasts = _useState2[0],
      setToasts = _useState2[1];

  var addToast = (0, _react.useCallback)(function (_ref2) {
    var content = _ref2.content,
        _ref2$type = _ref2.type,
        type = _ref2$type === void 0 ? "default" : _ref2$type;
    setToasts(function (toasts) {
      return [].concat(_toConsumableArray(toasts), [{
        id: id++,
        content: content,
        type: type
      }]);
    });
  }, [setToasts]);
  var removeToast = (0, _react.useCallback)(function (id) {
    setToasts(function (toasts) {
      return toasts.filter(function (t) {
        return t.id !== id;
      });
    });
  }, [setToasts]);
  var toastCRef = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hovered = _useState4[0],
      setHovered = _useState4[1];

  (0, _react.useEffect)(function () {
    var target = toastCRef.current;
    setHovered(false);
    target.addEventListener('mouseover', function () {
      setHovered(true);
    });
    target.addEventListener('mouseleave', function () {
      setHovered(false);
    });
    return function () {
      target.removeEventListener('mouseover', function () {
        setHovered(true);
      });
      target.removeEventListener('mouseleave', function () {
        setHovered(false);
      });
    };
  }, [toasts]);
  var toastElements = (0, _react.useMemo)(function () {
    return toasts.map(function (t, index) {
      return /*#__PURE__*/_react.default.createElement(_Toast.default, {
        key: t.id,
        id: t.id,
        type: t.type,
        count: index,
        total: toasts.length,
        hovered: hovered
      }, t.content);
    });
  }, [toasts, hovered]);
  var providedvalue = (0, _react.useMemo)(function () {
    return {
      add: addToast,
      remove: removeToast,
      toasts: toasts
    };
  }, [addToast, removeToast, toasts]);
  return /*#__PURE__*/_react.default.createElement(ToastContext.Provider, {
    value: providedvalue
  }, /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_Toast2.ToastWrapperStyle, {
    className: "suprim-ui-toast ".concat(hovered ? 'hover' : ''),
    ref: toastCRef
  }, toastElements), document.body), children);
};

var useToasts = function useToasts() {
  var context = (0, _react.useContext)(ToastContext);
  return context;
};

exports.useToasts = useToasts;
var _default = ToastProvider;
exports.default = _default;