"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Note = require("./Note.Style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Note = function Note(_ref) {
  var label = _ref.label,
      type = _ref.type,
      className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["label", "type", "className", "children"]);

  return /*#__PURE__*/_react.default.createElement(_Note.NoteStyle, _extends({
    className: "note note-".concat(type, " ").concat(className ? className : '')
  }, rest), /*#__PURE__*/_react.default.createElement("span", {
    className: "note-label"
  }, label, " :"), children);
};

Note.propTypes = {
  type: _propTypes.default.oneOf(['default', 'secondary', 'primary', 'danger', 'warning', 'success']),
  label: _propTypes.default.string,
  className: _propTypes.default.string
};
Note.defaultProps = {
  label: 'Note',
  type: 'default'
};
var _default = Note;
exports.default = _default;