(()=>{"use strict";var e={821:(e,t)=>{function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="catList",a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,(a=[{key:"getListLastID",value:function(e){return 0==e.length?0:(e=e.sort((function(e,t){return e.id<t.id})))[e.length-1].id}},{key:"categoryList",get:function(){var e=localStorage.getItem(n);return JSON.parse(e)||[]},set:function(e){try{if(e.length){var t=JSON.stringify(e);return localStorage.setItem(n,t),t}localStorage.removeItem(n)}catch(e){return!1}}},{key:"getCategoryList",value:function(){return this.categoryList}},{key:"addCategory",value:function(e){e=e?e.trim():"";try{var t=this.categoryList;if(e){var r=this.getListLastID(t);t.push({id:++r,name:e}),this.categoryList=t}return t}catch(e){return!1}}},{key:"editCategory",value:function(e,t){t=t?t.trim():"";try{var r=this.categoryList;if(t){var n=r.findIndex((function(t){return t.id==e})),a=r[n];a.name=t,r[n]=a,this.categoryList=r}return r}catch(e){return!1}}},{key:"deleteCategory",value:function(e){try{var t=this.categoryList,r=t.findIndex((function(t){return t.id==e}));return t.splice(r,1),this.categoryList=t,t}catch(e){return!1}}}])&&r(t.prototype,a),e}();t.default=a},451:(e,t,r)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=l(t);if(r){var a=l(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return c(this,e)});function a(){return o(this,a),n.apply(this,arguments)}return a}(((a=r(821))&&a.__esModule?a:{default:a}).default);t.default=i},754:(e,t,r)=>{t.Z=void 0;var n=r(657),a=c(r(472)),o=c(r(358)),u=r(770);function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.createStore)(),i=(0,a.default)(l);l.dispatch((0,u.createGetCategoryListAction)());var f=(0,o.default)(l);t.Z=function(){return React.createElement("div",{className:"category-main-area"},React.createElement("nav",null,React.createElement(f,null)),React.createElement("div",{className:"list-area"},React.createElement(i,null)))}},225:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(80))&&n.__esModule?n:{default:n};function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(e){var t=e.txt,r=e.onSave,n=e.onCancel,u=t?t.trim():"",c=o(React.useState(u),2),l=c[0],i=c[1],f=o(React.useState(!u),2),d=f[0],s=f[1];return React.createElement("div",{className:"cat-item-edit"},React.createElement("input",{type:"text",className:"txt",onChange:function(e){var t=e.target.value;" "==t&&(t=t.trim()),i(t),l&&(1!=l.length||d?d&&s(!1):s(!0))},value:l}),React.createElement("button",{onClick:function(){r(l)},disabled:d},a.default.save),React.createElement("button",{onClick:function(){i(""),s(!0),n()}},a.default.cancel))}},540:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(80)),a=u(r(225)),o=u(r(831));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(e){var t,r,u=e.it,l=e.onSave,i=e.onDelete,f=(t=React.useState(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=f[0],s=f[1],y=function(){s(!d)};return React.createElement("li",null,React.createElement("div",null,d?React.createElement(a.default,{txt:u.name,onSave:function(e){var t={id:u.id,name:e};l(t).error||s(!1)},onCancel:y}):React.createElement(o.default,{it:u}),React.createElement("div",{className:"actions-area"},React.createElement("button",{onClick:y},n.default.edit),React.createElement("button",{onClick:function(){i(u)}},n.default.delete))))}},831:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=e.it;return React.createElement("div",{className:"cat-item-view"},React.createElement("h4",null,t.name))}},978:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(80)),a=o(r(540));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.list,r=e.onSave,o=e.onDelete;return React.createElement("div",{className:"cat-list-area"},t.length?React.createElement("ul",null,t.map((function(e){return React.createElement(a.default,{key:e.id,it:e,onSave:r,onDelete:o})}))):React.createElement("div",{className:"text-center"},n.default.noData))}},472:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(770),a=u(r(978)),o=u(r(80));function u(e){return e&&e.__esModule?e:{default:e}}var c=ReactRedux.connect((function(e){return{list:e.categories}}),(function(e){return{onSave:function(t){return e((0,n.createEditCategoryAction)(t))},onDelete:function(t){if(confirm(o.default.msgCategoryDelete))return e((0,n.createDeleteCategoryAction)(t))}}}))(a.default);t.default=function(e){return function(){return React.createElement(ReactRedux.Provider,{store:e},React.createElement(c,null))}}},358:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(80)),a=u(r(225)),o=r(770);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=ReactRedux.connect(null,(function(e){return{onSave:function(t){return e((0,o.createAddCategoryAction)(t))}}}))((function(e){var t=e.onSave,r=e.onCancel,n=c(React.useState(""),2),o=n[0],u=n[1];return React.createElement(a.default,{txt:o,onSave:function(e){t({name:e}).error||r()},onCancel:function(){u(""),r()}})}));t.default=function(e){return function(){var t=c(React.useState(""),2),r=t[0],a=t[1],o=function(){a(r?"":" show")};return React.createElement("div",null,React.createElement("div",{className:"text-center"},React.createElement("h3",null,n.default.categoryList),React.createElement("button",{onClick:o},n.default.new_category)),React.createElement("div",{className:"new-category-add-area"+r},React.createElement(ReactRedux.Provider,{store:e},React.createElement(i,{onCancel:o}))))}}},770:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createGetCategoryListAction=l,t.createAddCategoryAction=i,t.createEditCategoryAction=f,t.createDeleteCategoryAction=d,t.default=void 0;var n=o(r(874)),a=o(r(854));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:e,payload:t,error:!r,meta:r}}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,a.default)(e,t);return u(e,t,r)}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return c(n.default.GET_CATEGORY_LIST,e)}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return c(n.default.ADD_CATEGORY,e)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return c(n.default.EDIT_CATEGORY,e)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return c(n.default.DELETE_CATEGORY,e)}var s={createGetCategoryListAction:l,createAddCategoryAction:i,createEditCategoryAction:f,createDeleteCategoryAction:d};t.default=s},874:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={GET_CATEGORY_LIST:1e3,ADD_CATEGORY:1001,EDIT_CATEGORY:1002,DELETE_CATEGORY:1003}},854:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(874)),a=o(r(451));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){var r=[],o=new a.default;switch(e){case n.default.GET_CATEGORY_LIST:r=o.getCategoryList();break;case n.default.ADD_CATEGORY:r=o.addCategory(t.name);break;case n.default.EDIT_CATEGORY:r=o.editCategory(t.id,t.name);break;case n.default.DELETE_CATEGORY:r=o.deleteCategory(t.id)}return r}},708:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(874))&&n.__esModule?n:{default:n};t.default=function(e,t){var r=t.type,n=t.meta,o=[];switch(r){case a.default.GET_CATEGORY_LIST:case a.default.ADD_CATEGORY:case a.default.EDIT_CATEGORY:case a.default.DELETE_CATEGORY:o=n}return o}},16:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(708))&&n.__esModule?n:{default:n};t.default=function(e,t){return{categories:(0,a.default)(e,t)}}},657:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=function(){return Redux.createStore(a.default,{category:[]})};var n,a=(n=r(16))&&n.__esModule?n:{default:n}},80:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={new:"חדש",new_category:"הוספת קטגוריה",add:"הוסף",edit:"עריכה",delete:"מחיקה",save:"שמור",cancel:"בטל",categoryList:"רשימת קטגוריות",noData:"אין נתונים",msgCategoryDelete:"אישור מחיקת קטגוריה"}}},t={};!function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=document.getElementById(r);a&&ReactDOM.render(React.createElement(e,t,n),a)}(function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(754).Z,{},"appArea")})();