"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionCreators = require("../../redux/actions/actionCreators.js");

var _CategoryList = _interopRequireDefault(require("./CategoryList.js"));

var _reg = _interopRequireDefault(require("../../reg.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.categories
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSave: function onSave(it) {
      return dispatch((0, _actionCreators.createEditCategoryAction)(it));
    },
    onDelete: function onDelete(it) {
      if (confirm(_reg["default"].msgCategoryDelete)) {
        return dispatch((0, _actionCreators.createDeleteCategoryAction)(it));
      }
    }
  };
};

var List = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(_CategoryList["default"]);

function ReduxProviderCategoryList(store) {
  return function () {
    return /*#__PURE__*/React.createElement(ReactRedux.Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(List, null));
  };
}

var _default = ReduxProviderCategoryList;
exports["default"] = _default;