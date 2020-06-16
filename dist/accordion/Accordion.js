"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Accordion = require("./Accordion.Style");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Accordion = function Accordion(props) {
  var _useState = (0, _react.useState)([-1]),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var className = props.className,
      shadow = props.shadow,
      padded = props.padded,
      multiple = props.multiple,
      rest = _objectWithoutProperties(props, ["className", "shadow", "padded", "multiple"]);

  var onShow = function onShow(i) {
    if (multiple) {
      setActive([].concat(_toConsumableArray(active), [i]));
    } else {
      setActive([i]);
    }

    console.log(active.indexOf(i));

    if (active.indexOf(i) !== -1) {
      setActive(function (active) {
        return active.filter(function (item) {
          return item !== i;
        });
      });
    }
  };

  var children = _react.default.Children.map(props.children, function (child, i) {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      accordionactive: active.indexOf(i) !== -1 ? "active" : "",
      onClick: function onClick() {
        onShow(i);
      }
    });
  });

  return /*#__PURE__*/_react.default.createElement(_Accordion.AccordionStyle, _extends({
    className: "accordion ".concat(padded ? 'padded' : '', " ").concat(shadow ? 'shadow' : '', " ").concat(className ? className : '')
  }, rest), children);
};

var AccordionItem = function AccordionItem(props) {
  var title = props.title,
      desc = props.desc,
      shadow = props.shadow,
      activeshadow = props.activeshadow,
      accordionactive = props.accordionactive,
      onClick = props.onClick,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["title", "desc", "shadow", "activeshadow", "accordionactive", "onClick", "className", "children"]);

  var contentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    contentRef.current.style.maxHeight = accordionactive === "active" ? "".concat(contentRef.current.scrollHeight, "px") : '0px';
  }, [accordionactive]);
  return /*#__PURE__*/_react.default.createElement(_Accordion.AccordionItemStyle, _extends({
    className: "accordion-item  ".concat(activeshadow && accordionactive === "active" ? 'shadow' : '', " ").concat(shadow ? 'shadow' : '', " ").concat(className ? className : '')
  }, rest), /*#__PURE__*/_react.default.createElement(_Accordion.AccordionHeaderStyle, {
    className: "accordion-item-header  ".concat(accordionactive === 'active' ? 'active' : '', " "),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-item-header--item"
  }, /*#__PURE__*/_react.default.createElement(_Accordion.AccordionTitleStyle, null, title), /*#__PURE__*/_react.default.createElement(_Accordion.AccordionDescStyle, null, desc)), /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-item-header--item"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))), /*#__PURE__*/_react.default.createElement(_Accordion.AccordionContentStyle, {
    className: "accordion-content ".concat(accordionactive === 'active' ? 'active' : '', " "),
    ref: contentRef
  }, children));
};

Accordion.Item = AccordionItem;
var _default = Accordion;
exports.default = _default;