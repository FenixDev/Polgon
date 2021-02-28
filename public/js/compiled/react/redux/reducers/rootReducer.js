"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _categoryReducer = _interopRequireDefault(require("./categoryReducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function rootReducer(state, action) {
  return {
    categories: (0, _categoryReducer["default"])(state, action)
  };
}

var _default = rootReducer;
exports["default"] = _default;