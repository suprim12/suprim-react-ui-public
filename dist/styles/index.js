"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _themes = require("./themes/themes");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _themes[key];
    }
  });
});

var _GlobalStyles = require("./themes/GlobalStyles");

Object.keys(_GlobalStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GlobalStyles[key];
    }
  });
});