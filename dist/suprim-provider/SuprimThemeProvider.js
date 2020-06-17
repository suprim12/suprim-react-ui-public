"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _react = _interopRequireDefault(require("react"));

var _ToastProvider = _interopRequireDefault(require("../toast/ToastProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuprimThemeProvider = function SuprimThemeProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(_ToastProvider.default, null, children));
};

var _default = SuprimThemeProvider;
exports.default = _default;