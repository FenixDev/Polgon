import at from './actionTypes.js';
import dbAction from './dbAction.js';

function getActionObj(type, data = null, meta = null) {
    return { type, payload: data, error: !meta, meta };
}

function createAction(type, data = {}) {
    var meta = dbAction(type, data);
    return getActionObj(type, data, meta);
}

function createGetCategoryListAction(data = null) {
    return createAction(at.GET_CATEGORY_LIST, data);
}

function createAddCategoryAction(data = null) {
    return createAction(at.ADD_CATEGORY, data);
}

function createEditCategoryAction(data = null) {
    return createAction(at.EDIT_CATEGORY, data);
}

function createDeleteCategoryAction(data = null) {
    return createAction(at.DELETE_CATEGORY, data);
}


export default {
    createGetCategoryListAction,
    createAddCategoryAction,
    createEditCategoryAction,
    createDeleteCategoryAction
}

export {
    createGetCategoryListAction,
    createAddCategoryAction,
    createEditCategoryAction,
    createDeleteCategoryAction
}
