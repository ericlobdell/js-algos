/**
 * Created by eric on 5/14/14.
 */

(function (window) {
    function list() {
        return {
            listSize: 0,
            pos: 0,
            dataStore: [],
            clear: function () {
                delete this.dataStore;
                this.dataStore = [];
                this.listSize = this.pos = 0;
            },
            find: function (ele) {
                var i = 0,
                    len = this.dataStore.length;

                for (; i < len; ++i) {
                    if (this.dataStore[i] === ele)
                        return i;
                }
                return -1;
            },
            toString: function () {
                return this.dataStore;
            },
            insert: function (ele, after) {
                var insertPos = this.find(after);
                if(insertPos > -1) {
                    this.dataStore.splice(insertPos + 1, 0, ele);
                    ++this.listSize;
                    return true;
                }
                return false;
            },
            append: function (ele) {
                this.dataStore[this.listSize++] = ele;
            },
            remove: function (ele) {
                var foundAt = this.find(ele);
                if (foundAt > -1) {
                    this.dataStore.splice(foundAt, 1);
                    --this.listSize;
                    return true;
                }
                return false;
            },
            front: function () {
                this.pos = 0;
            },
            end: function () {
                this.pos = this.listSize - 1;
            },
            prev: function () {
                if (this.pos > 0)
                    --this.pos;
            },
            next: function () {
                if (this.pos < this.listSize - 1)
                    ++this.pos;
            },
            length: function () {
                return this.listSize;
            },
            currentPos: function () {
                return this.pos;
            },
            moveTo: function (position) {
                this.pos = position;
            },
            getElement: function () {
                return this.dataStore[this.pos];
            },
            contains: function (ele) {
                var i = 0,
                    len = this.dataStore.length;

                for (; i < len; ++i) {
                    if (this.dataStore[i] === ele)
                        return true;
                }
                return false;
            }
        }
    };

    window.List = list;

})(window || {});
