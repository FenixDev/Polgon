import reg from '../../reg.js';
import CategoryItem from './CategoryItem.js';
function CategoryList({ list, onSave, onDelete }) {
    return (
        <div className="cat-list-area">
            {list.length ? <ul>
                {list.map(it => <CategoryItem key={it.id} it={it} onSave={onSave} onDelete={onDelete}></CategoryItem>)}
            </ul> :
                <div className="text-center">
                    {reg.noData}
                </div>}
        </div>
    );
}

export default CategoryList;