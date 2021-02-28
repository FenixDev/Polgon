const CAT_LIST = 'catList';

class LocalStorage {

    getListLastID(list) {
        if (list.length == 0) {
            return 0;
        }
        var list = list.sort((el1, el2) => el1.id < el2.id);
        return list[list.length - 1].id;
    }

    set categoryList(list) {
        try {
            if (!list.length) {
                localStorage.removeItem(CAT_LIST);
            }
            else {
                var data = JSON.stringify(list);
                localStorage.setItem(CAT_LIST, data);
                return data;
            }
        }
        catch (ex) {
            return false;
        }
    }

    get categoryList() {
        var data = localStorage.getItem(CAT_LIST);
        var list = JSON.parse(data) || [];
        return list;
    }

    getCategoryList() {
        return this.categoryList;
    }

    addCategory(name) {
        name = name ? name.trim() : '';
        try {
            var list = this.categoryList;
            if (name) {
                var lastID = this.getListLastID(list);
                list.push({
                    id: ++lastID,
                    name
                });
                this.categoryList = list;
            }
            return list;
        }
        catch (ex) {
            return false;
        }
    }

    editCategory(id, name) {
        name = name ? name.trim() : '';
        try {
            var list = this.categoryList;
            if (name) {
                var ind = list.findIndex(it => it.id == id);
                var it = list[ind];
                it.name = name;
                list[ind] = it;
                this.categoryList = list;
            }
            return list;
        }
        catch (ex) {
            return false;
        }

    }

    deleteCategory(id) {
        try {
            var list = this.categoryList;
            var ind = list.findIndex(it => it.id == id);
            list.splice(ind, 1);
            this.categoryList = list;
            return list;
        }
        catch (ex) {
            return false;
        }
    }
}

export default LocalStorage;