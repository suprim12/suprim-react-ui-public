"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridItemStyle = exports.GridStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styles = require("../styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GridStyle = _styledComponents.default.div.withConfig({
  displayName: "GridStyle__GridStyle",
  componentId: "sc-1g6s6hb-0"
})(["display:flex;flex-wrap:wrap;margin-right:-", ";margin-left:-", ";"], _styles.layout.gutter, _styles.layout.gutter);

exports.GridStyle = GridStyle;

function createGridItem(size) {
  var styles = '';
  var rowarr = ['8.333%', '16.66666%', '25%', '33.33333%', '41.66666%', '50%', '58.33333%', '66.66666%', '75%', '83.33%', '91.66666%', '100%'];

  for (var i = 0; i <= _styles.layout.columns - 1; i++) {
    styles += "\n        &.wrap".concat(size ? "-".concat(size, "-") : '-').concat(i + 1, " {\n            flex: 0 0 ").concat(rowarr[i], ";\n            max-width: ").concat(rowarr[i], ";\n        }\n        ");
  }

  return (0, _styledComponents.css)(["", ""], styles);
}

var GridItemStyle = _styledComponents.default.div.withConfig({
  displayName: "GridStyle__GridItemStyle",
  componentId: "sc-1g6s6hb-1"
})(["-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;", " @media (max-width:576px){", "}@media (min-width:768px){", "}@media (min-width:992px){", "}@media (min-width:1200px){", "}"], createGridItem(null), createGridItem('sm'), createGridItem('md'), createGridItem('lg'), createGridItem('xl'));

exports.GridItemStyle = GridItemStyle;