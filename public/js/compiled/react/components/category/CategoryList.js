"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reg = _interopRequireDefault(require("../../reg.js"));

var _CategoryItem = _interopRequireDefault(require("./CategoryItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CategoryList(_ref) {
  var list = _ref.list,
      onSave = _ref.onSave,
      onDelete = _ref.onDelete;
  return /*#__PURE__*/React.createElement("div", {
    className: "cat-list-area"
  }, list.length ? /*#__PURE__*/React.createElement("ul", null, list.map(function (it) {
    return /*#__PURE__*/React.createElement(_CategoryItem["default"], {
      key: it.id,
      it: it,
      onSave: onSave,
      onDelete: onDelete
    });
  })) : /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, _reg["default"].noData));
}

var _default = CategoryList;
exports["default"] = _default;