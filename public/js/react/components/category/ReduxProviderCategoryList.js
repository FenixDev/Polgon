import { createEditCategoryAction, createDeleteCategoryAction } from '../../redux/actions/actionCreators.js';
import CategoryList from './CategoryList.js';
import reg from '../../reg.js';

var mapStateToProps = (state) => ({
    list: state.categories
});

var mapDispatchToProps = (dispatch) => ({
    onSave: it => dispatch(createEditCategoryAction(it)),
    onDelete: it => {
        if (confirm(reg.msgCategoryDelete)) {
            return dispatch(createDeleteCategoryAction(it))
        }
    }
});

var List = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CategoryList);

function ReduxProviderCategoryList(store) {
    return () => {
        return (
            <ReactRedux.Provider store={store}>
                <List />
            </ReactRedux.Provider>
        );
    }
}

export default ReduxProviderCategoryList;
