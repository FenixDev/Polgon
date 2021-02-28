import reg from '../../reg.js';
import TextItemEdit from '../TextItemEdit.js';
import CategoryItemView from './CategoryItemView.js';

function CategoryItem({ it, onSave, onDelete }) {
    var [isEditMode, setEditMode] = React.useState(false);

    var onEditSwitch = () => {
        setEditMode(!isEditMode);
    }

    var onSaveClk = (txt) => {
        var item = { id: it.id, name: txt };
        var action = onSave(item);
        if (!action.error) {
            setEditMode(false);
        }
    };

    var onDeleteClk = () => {
        onDelete(it);
    };

    return (
        <li>
            <div>
                {isEditMode ?
                    <TextItemEdit txt={it.name} onSave={onSaveClk} onCancel={onEditSwitch}></TextItemEdit>
                    :
                    <CategoryItemView it={it}></CategoryItemView>
                }
                <div className="actions-area">
                    <button onClick={onEditSwitch}>
                        {reg.edit}
                    </button>
                    <button onClick={onDeleteClk}>
                        {reg.delete}
                    </button>
                </div>
            </div>
        </li >
    );
}

export default CategoryItem;