import at from '../actions/actionTypes.js';

function categoryReducer(state, action) {
    var { type, meta } = action;
    var res = [];
    switch (type) {
        case at.GET_CATEGORY_LIST:
            res = meta;
            break;
        case at.ADD_CATEGORY:
            res = meta;
            break;
        case at.EDIT_CATEGORY:
            res = meta;
            break;
        case at.DELETE_CATEGORY:
            res = meta;
            break;
    }
    return res;
}

export default categoryReducer;