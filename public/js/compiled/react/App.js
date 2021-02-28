"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _store = require("./redux/store.js");

var _ReduxProviderCategoryList = _interopRequireDefault(require("./components/category/ReduxProviderCategoryList.js"));

var _ReduxProviderNavBar = _interopRequireDefault(require("./components/navBar/ReduxProviderNavBar.js"));

var _actionCreators = require("./redux/actions/actionCreators.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _store.createStore)();
var ReduxCategoryList = (0, _ReduxProviderCategoryList["default"])(store);
store.dispatch((0, _actionCreators.createGetCategoryListAction)());
var ReduxNavBar = (0, _ReduxProviderNavBar["default"])(store);

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "category-main-area"
  }, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(ReduxNavBar, null)), /*#__PURE__*/React.createElement("div", {
    className: "list-area"
  }, /*#__PURE__*/React.createElement(ReduxCategoryList, null)));
}

var _default = App;
exports["default"] = _default;