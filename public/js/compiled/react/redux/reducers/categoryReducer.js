"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = _interopRequireDefault(require("../actions/actionTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function categoryReducer(state, action) {
  var type = action.type,
      meta = action.meta;
  var res = [];

  switch (type) {
    case _actionTypes["default"].GET_CATEGORY_LIST:
      res = meta;
      break;

    case _actionTypes["default"].ADD_CATEGORY:
      res = meta;
      break;

    case _actionTypes["default"].EDIT_CATEGORY:
      res = meta;
      break;

    case _actionTypes["default"].DELETE_CATEGORY:
      res = meta;
      break;
  }

  return res;
}

var _default = categoryReducer;
exports["default"] = _default;