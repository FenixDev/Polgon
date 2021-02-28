"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reg = _interopRequireDefault(require("../reg.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function TextItemEdit(_ref) {
  var txt = _ref.txt,
      onSave = _ref.onSave,
      onCancel = _ref.onCancel;
  var val = txt ? txt.trim() : '';

  var _React$useState = React.useState(val),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React.useState(!val),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isDisabled = _React$useState4[0],
      setIsDisabled = _React$useState4[1];

  var onSaveClk = function onSaveClk() {
    onSave(value);
  };

  var onCancelClk = function onCancelClk() {
    setValue("");
    setIsDisabled(true);
    onCancel();
  };

  var onChangeTxt = function onChangeTxt(e) {
    var val = e.target.value;

    if (val == " ") {
      val = val.trim();
    }

    setValue(val);

    if (value) {
      if (value.length == 1 && !isDisabled) {
        setIsDisabled(true);
      } else if (isDisabled) {
        setIsDisabled(false);
      }
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "cat-item-edit"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "txt",
    onChange: onChangeTxt,
    value: value
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onSaveClk,
    disabled: isDisabled
  }, _reg["default"].save), /*#__PURE__*/React.createElement("button", {
    onClick: onCancelClk
  }, _reg["default"].cancel));
}

var _default = TextItemEdit;
exports["default"] = _default;