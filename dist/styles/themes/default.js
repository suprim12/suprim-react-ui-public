"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.themes = exports.expressiveness = exports.palette = void 0;
var palette = {
  /* eslint-disable @typescript-eslint/camelcase */
  accents_1: '#fafafa',
  accents_2: '#eaeaea',
  accents_3: '#999',
  accents_4: '#888',
  accents_5: '#666',
  accents_6: '#444',
  accents_7: '#333',
  accents_8: '#111',

  /* eslint-enable camelcase */
  background: '#fff',
  foreground: '#000',
  selection: '#79ffe1',
  secondary: '#666',
  code: '#f81ce5',
  border: '#eaeaea',
  error: '#ff0000',
  errorLight: '#ff1a1a',
  errorDark: '#c00',
  success: '#0070f3',
  successLight: '#3291ff',
  successDark: '#0366d6',
  warning: '#f5a623',
  warningLight: '#f7b955',
  warningDark: '#f49b0b',
  cyan: '#79ffe1',
  purple: '#f81ce5',
  alert: '#ff0080',
  violet: '#7928ca',
  link: '#0070f3'
};
exports.palette = palette;
var expressiveness = {
  linkStyle: 'none',
  linkHoverStyle: 'none',
  dropdownBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.02)',
  scrollerStart: 'rgba(255, 255, 255, 1)',
  scrollerEnd: 'rgba(255, 255, 255, 0)',
  shadowSmall: '0 5px 10px rgba(0, 0, 0, 0.12)',
  shadowMedium: '0 8px 30px rgba(0, 0, 0, 0.12)',
  shadowLarge: '0 30px 60px rgba(0, 0, 0, 0.12)',
  portalOpacity: 0.25
};
exports.expressiveness = expressiveness;
var themes = {
  type: 'light'
};
exports.themes = themes;
var _default = themes;
exports.default = _default;