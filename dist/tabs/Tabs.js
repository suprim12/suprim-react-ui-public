"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Tabs = require("./Tabs.Style");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tabs = function Tabs(props) {
  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "children"]);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      activetab = _useState2[0],
      setActiveTab = _useState2[1];

  var handletabcontent = function handletabcontent(tab) {
    setActiveTab(tab);
  };

  (0, _react.useEffect)(function () {
    setActiveTab(props.children[0].props.label);
  }, [props.children, setActiveTab]);
  return /*#__PURE__*/_react.default.createElement(_Tabs.TabsStyle, _extends({
    className: "tabs ".concat(className ? className : '')
  }, rest), /*#__PURE__*/_react.default.createElement("header", {
    className: "tabs-header"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.TabsListsStyle, {
    className: "tabs-lists"
  }, children.map(function (child) {
    var _child$props = child.props,
        label = _child$props.label,
        disabled = _child$props.disabled;
    return /*#__PURE__*/_react.default.createElement(TabsLists, {
      key: label,
      label: label,
      activetab: activetab,
      handletabcontent: handletabcontent,
      className: "".concat(disabled ? 'disabled' : '')
    });
  }))), /*#__PURE__*/_react.default.createElement(_Tabs.TabsContentStyle, {
    className: "tabs-content"
  }, children.map(function (child) {
    if (child.props.label !== activetab) return undefined;
    return child.props.children;
  })));
};

var TabsItem = function TabsItem(props) {
  var title = props.title,
      children = props.children,
      rest = _objectWithoutProperties(props, ["title", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Tabs.TabsItemStyle, _extends({
    className: "tab-lists"
  }, rest), children);
};

var TabsLists = function TabsLists(props) {
  var handletabcontent = props.handletabcontent,
      disabled = props.disabled,
      className = props.className,
      activetab = props.activetab,
      label = props.label;

  var handletabclicked = function handletabclicked() {
    handletabcontent(label);
  };

  return /*#__PURE__*/_react.default.createElement(_Tabs.TabsListItemStyle, {
    className: "tab-lists--item ".concat(disabled === true ? 'disabled' : '', " ").concat(className ? className : '', "   ").concat(activetab === label ? 'active' : ''),
    onClick: handletabclicked
  }, label);
};

TabsLists.defaultProps = {
  disabled: false
};
Tabs.Item = TabsItem;
var _default = Tabs;
exports.default = _default;