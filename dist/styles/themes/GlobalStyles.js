"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyles = void 0;

var _styledComponents = require("styled-components");

var _themes = require("./themes");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @font-face {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n        src:  url('https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Oxygen:wght@400;700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap') format('truetype');\n        font-weight: normal;\n        font-style: normal;\n    }\n    body{\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n    }\n    *,*::before,*::after{\n        box-sizing:border-box;\n    }\n    .no-gutters>.wrap,\n    .no-gutters>[class*='wrap-'] {\n        padding-right: 0;\n        padding-left: 0;\n    }\n    [class*='wrap-'],[class*='wrap']  {\n        width: 100%;\n        padding-right: ", ";\n        padding-left: ", ";\n    }\n    img{\n        max-width:100%;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject(), _themes.layout.gutter, _themes.layout.gutter);
exports.GlobalStyles = GlobalStyles;