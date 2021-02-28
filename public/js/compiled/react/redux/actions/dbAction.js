"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes.js"));

var _dbAcc = _interopRequireDefault(require("../../../dbAccess/dbAcc.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function dbAction(type, data) {
  var res = [];
  var db = new _dbAcc["default"]();

  switch (type) {
    case _actionTypes["default"].GET_CATEGORY_LIST:
      res = db.getCategoryList();
      break;

    case _actionTypes["default"].ADD_CATEGORY:
      res = db.addCategory(data.name);
      break;

    case _actionTypes["default"].EDIT_CATEGORY:
      res = db.editCategory(data.id, data.name);
      break;

    case _actionTypes["default"].DELETE_CATEGORY:
      res = db.deleteCategory(data.id);
      break;
  }

  return res;
}

var _default = dbAction;
exports["default"] = _default;