"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CAT_LIST = 'catList';

var LocalStorage = /*#__PURE__*/function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }

  _createClass(LocalStorage, [{
    key: "getListLastID",
    value: function getListLastID(list) {
      if (list.length == 0) {
        return 0;
      }

      var list = list.sort(function (el1, el2) {
        return el1.id < el2.id;
      });
      return list[list.length - 1].id;
    }
  }, {
    key: "categoryList",
    get: function get() {
      var data = localStorage.getItem(CAT_LIST);
      var list = JSON.parse(data) || [];
      return list;
    },
    set: function set(list) {
      try {
        if (!list.length) {
          localStorage.removeItem(CAT_LIST);
        } else {
          var data = JSON.stringify(list);
          localStorage.setItem(CAT_LIST, data);
          return data;
        }
      } catch (ex) {
        return false;
      }
    }
  }, {
    key: "getCategoryList",
    value: function getCategoryList() {
      return this.categoryList;
    }
  }, {
    key: "addCategory",
    value: function addCategory(name) {
      name = name ? name.trim() : '';

      try {
        var list = this.categoryList;

        if (name) {
          var lastID = this.getListLastID(list);
          list.push({
            id: ++lastID,
            name: name
          });
          this.categoryList = list;
        }

        return list;
      } catch (ex) {
        return false;
      }
    }
  }, {
    key: "editCategory",
    value: function editCategory(id, name) {
      name = name ? name.trim() : '';

      try {
        var list = this.categoryList;

        if (name) {
          var ind = list.findIndex(function (it) {
            return it.id == id;
          });
          var it = list[ind];
          it.name = name;
          list[ind] = it;
          this.categoryList = list;
        }

        return list;
      } catch (ex) {
        return false;
      }
    }
  }, {
    key: "deleteCategory",
    value: function deleteCategory(id) {
      try {
        var list = this.categoryList;
        var ind = list.findIndex(function (it) {
          return it.id == id;
        });
        list.splice(ind, 1);
        this.categoryList = list;
        return list;
      } catch (ex) {
        return false;
      }
    }
  }]);

  return LocalStorage;
}();

var _default = LocalStorage;
exports["default"] = _default;