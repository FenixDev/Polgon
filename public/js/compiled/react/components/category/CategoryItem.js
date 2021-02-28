"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reg = _interopRequireDefault(require("../../reg.js"));

var _TextItemEdit = _interopRequireDefault(require("../TextItemEdit.js"));

var _CategoryItemView = _interopRequireDefault(require("./CategoryItemView.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CategoryItem(_ref) {
  var it = _ref.it,
      onSave = _ref.onSave,
      onDelete = _ref.onDelete;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isEditMode = _React$useState2[0],
      setEditMode = _React$useState2[1];

  var onEditSwitch = function onEditSwitch() {
    setEditMode(!isEditMode);
  };

  var onSaveClk = function onSaveClk(txt) {
    var item = {
      id: it.id,
      name: txt
    };
    var action = onSave(item);

    if (!action.error) {
      setEditMode(false);
    }
  };

  var onDeleteClk = function onDeleteClk() {
    onDelete(it);
  };

  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", null, isEditMode ? /*#__PURE__*/React.createElement(_TextItemEdit["default"], {
    txt: it.name,
    onSave: onSaveClk,
    onCancel: onEditSwitch
  }) : /*#__PURE__*/React.createElement(_CategoryItemView["default"], {
    it: it
  }), /*#__PURE__*/React.createElement("div", {
    className: "actions-area"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onEditSwitch
  }, _reg["default"].edit), /*#__PURE__*/React.createElement("button", {
    onClick: onDeleteClk
  }, _reg["default"]["delete"]))));
}

var _default = CategoryItem;
exports["default"] = _default;