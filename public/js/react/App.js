import { createStore } from './redux/store.js';
import ReduxProviderCategoryList from './components/category/ReduxProviderCategoryList.js';
import ReduxProviderNavBar from './components/navBar/ReduxProviderNavBar.js';
import { createGetCategoryListAction } from './redux/actions/actionCreators.js';

var store = createStore();
var ReduxCategoryList = ReduxProviderCategoryList(store);

store.dispatch(createGetCategoryListAction());

var ReduxNavBar = ReduxProviderNavBar(store);

function App() {
    return (
        <div className="category-main-area">
            <nav>
                <ReduxNavBar></ReduxNavBar>
            </nav>
            <div className="list-area">
                <ReduxCategoryList></ReduxCategoryList>
            </div>
        </div>

    );
}

export default App;