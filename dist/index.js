"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: function get() {
    return _Loading.default;
  }
});
Object.defineProperty(exports, "Code", {
  enumerable: true,
  get: function get() {
    return _Code.default;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
});
Object.defineProperty(exports, "Grid", {
  enumerable: true,
  get: function get() {
    return _Grid.default;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _Text.default;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _Card.default;
  }
});
Object.defineProperty(exports, "Spinner", {
  enumerable: true,
  get: function get() {
    return _Spinner.default;
  }
});
Object.defineProperty(exports, "Spacer", {
  enumerable: true,
  get: function get() {
    return _Spacer.default;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _Tabs.default;
  }
});
Object.defineProperty(exports, "Accordion", {
  enumerable: true,
  get: function get() {
    return _Accordion.default;
  }
});
Object.defineProperty(exports, "Progress", {
  enumerable: true,
  get: function get() {
    return _Progress.default;
  }
});
Object.defineProperty(exports, "Note", {
  enumerable: true,
  get: function get() {
    return _Note.default;
  }
});
Object.defineProperty(exports, "SuprimThemeProvider", {
  enumerable: true,
  get: function get() {
    return _styledComponents.ThemeProvider;
  }
});
Object.defineProperty(exports, "GlobalStyles", {
  enumerable: true,
  get: function get() {
    return _styles.GlobalStyles;
  }
});
exports.theme = void 0;

var _Button = _interopRequireDefault(require("./button/Button"));

var _Loading = _interopRequireDefault(require("./loading/Loading"));

var _Code = _interopRequireDefault(require("./code/Code"));

var _Container = _interopRequireDefault(require("./container/Container"));

var _Grid = _interopRequireDefault(require("./grid/Grid"));

var _Text = _interopRequireDefault(require("./text/Text"));

var _Card = _interopRequireDefault(require("./card/Card"));

var _Spinner = _interopRequireDefault(require("./spinner/Spinner"));

var _Spacer = _interopRequireDefault(require("./spacer/Spacer"));

var _Tabs = _interopRequireDefault(require("./tabs/Tabs"));

var _Accordion = _interopRequireDefault(require("./accordion/Accordion"));

var _Progress = _interopRequireDefault(require("./progress/Progress"));

var _Note = _interopRequireDefault(require("./note/Note"));

var _styledComponents = require("styled-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = {
  default: _styles.defaultTheme,
  dark: _styles.darkTheme
};
exports.theme = theme;