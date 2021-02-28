"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGetCategoryListAction = createGetCategoryListAction;
exports.createAddCategoryAction = createAddCategoryAction;
exports.createEditCategoryAction = createEditCategoryAction;
exports.createDeleteCategoryAction = createDeleteCategoryAction;
exports["default"] = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes.js"));

var _dbAction = _interopRequireDefault(require("./dbAction.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getActionObj(type) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    type: type,
    payload: data,
    error: !meta,
    meta: meta
  };
}

function createAction(type) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var meta = (0, _dbAction["default"])(type, data);
  return getActionObj(type, data, meta);
}

function createGetCategoryListAction() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return createAction(_actionTypes["default"].GET_CATEGORY_LIST, data);
}

function createAddCategoryAction() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return createAction(_actionTypes["default"].ADD_CATEGORY, data);
}

function createEditCategoryAction() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return createAction(_actionTypes["default"].EDIT_CATEGORY, data);
}

function createDeleteCategoryAction() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return createAction(_actionTypes["default"].DELETE_CATEGORY, data);
}

var _default = {
  createGetCategoryListAction: createGetCategoryListAction,
  createAddCategoryAction: createAddCategoryAction,
  createEditCategoryAction: createEditCategoryAction,
  createDeleteCategoryAction: createDeleteCategoryAction
};
exports["default"] = _default;