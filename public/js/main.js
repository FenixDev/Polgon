import App from './compiled/react/App.js';

function initArea(component, props, areaID, childen = null) {
    var area = document.getElementById(areaID);
    if (area) {
        ReactDOM.render(React.createElement(component, props, childen), area);
    }
}


(function () {
    initArea(App, {}, "appArea");
})();