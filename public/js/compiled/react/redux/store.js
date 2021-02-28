"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;

var _rootReducer = _interopRequireDefault(require("./reducers/rootReducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createInitialState() {
  return {
    category: []
  };
}

function createStore() {
  return Redux.createStore(_rootReducer["default"], createInitialState());
}