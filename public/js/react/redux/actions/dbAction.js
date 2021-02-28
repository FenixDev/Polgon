import at from './actionTypes.js';
import DbAcc from '../../../dbAccess/dbAcc.js';

function dbAction(type, data) {
    var res = [];
    var db = new DbAcc();
    switch (type) {
        case at.GET_CATEGORY_LIST:
            res = db.getCategoryList();
            break;
        case at.ADD_CATEGORY:
            res = db.addCategory(data.name);
            break;
        case at.EDIT_CATEGORY:
            res = db.editCategory(data.id, data.name);
            break;
        case at.DELETE_CATEGORY:
            res = db.deleteCategory(data.id);
            break;
    }
    return res;
}

export default dbAction;