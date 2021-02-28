import reg from '../../reg.js';
import TextItemEdit from '../TextItemEdit.js';
import { createAddCategoryAction } from '../../redux/actions/actionCreators.js';

function NewCategoryEdit({ onSave, onCancel }) {
    var [txt, setTxt] = React.useState("");
    var onSaveClk = (txt) => {
        var action = onSave({ name: txt });
        if (!action.error) {
            onCancel();
        }
    };

    var onCancelClk = () => {
        setTxt("");
        onCancel();
    }

    return (
        <TextItemEdit txt={txt} onSave={onSaveClk} onCancel={onCancelClk}></TextItemEdit>
    );
}

var mapDispatchToProps = (dispatch) => ({
    onSave: it => dispatch(createAddCategoryAction(it))
});

var NewCategory = ReactRedux.connect(null, mapDispatchToProps)(NewCategoryEdit);

function ReduxProviderNavBar(store) {
    return () => {

        var [addNewCatCss, setAddNewCatCss] = React.useState('');
        var onSwitchNewCat = () => {
            var css = addNewCatCss ? '' : ' show';
            setAddNewCatCss(css);
        }

        return (
            <div>
                <div className="text-center">
                    <h3>
                        {reg.categoryList}
                    </h3>
                    <button onClick={onSwitchNewCat}>
                        {reg.new_category}
                    </button>
                </div>
                <div className={"new-category-add-area" + addNewCatCss}>
                    <ReactRedux.Provider store={store}>
                        <NewCategory onCancel={onSwitchNewCat}></NewCategory>
                    </ReactRedux.Provider>
                </div>
            </div >
        )
    };
}

export default ReduxProviderNavBar;