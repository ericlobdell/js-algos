/**
 * Created by eric on 5/14/14.
 */

(function (window) {
    function list(items) {
        var dataStore = [],
            pos = 0,
            listSize = 0;

        if (items) {
            if (!isArraylike( items ))
                throw new Error("The list can only be initialized with an array of items");

            dataStore =  items;
            listSize = dataStore.length;
        }

        function isArraylike( obj ) {
            var length = obj.length,
                type = (typeof obj);

            if (type === "string")
                return false;

            if ( obj.nodeType === 1 && length ) {
                return true;
            }

            return type === "array" || length === 0 ||
                typeof length === "number" && length > 0 && ( length - 1 ) in obj;
        }

        return {
            clear: function () {
                dataStore = [];
                listSize = pos = 0;
            },
            find: function (ele) {
                var i = 0,
                    len = dataStore.length;

                for (; i < len; ++i) {
                    if (dataStore[i] === ele)
                        return i;
                }
                return -1;
            },
            toString: function () {
                return dataStore;
            },
            insert: function (ele, after) {
                var insertPos = this.find(after);
                if(insertPos > -1) {
                    dataStore.splice(insertPos + 1, 0, ele);
                    ++listSize;
                    return true;
                }
                return false;
            },
            append: function (ele) {
                dataStore[listSize++] = ele;
            },
            remove: function (ele) {
                var foundAt = this.find(ele);
                if (foundAt > -1) {
                    dataStore.splice(foundAt, 1);
                    --listSize;
                    return true;
                }
                return false;
            },
            front: function () {
                pos = 0;
            },
            end: function () {
                pos = listSize - 1;
            },
            prev: function () {
                if (pos > 0)
                    --pos;
            },
            next: function () {
                if (pos < listSize - 1)
                    ++pos;
            },
            length: function () {
                return listSize;
            },
            currentPos: function () {
                return pos;
            },
            moveTo: function (position) {
                pos = position;
            },
            getElement: function () {
                return dataStore[pos];
            },
            contains: function (ele) {
                var i = 0,
                    len = dataStore.length;

                for (; i < len; ++i) {
                    if (dataStore[i] === ele)
                        return true;
                }
                return false;
            }
        }
    };

    window.List = list;

})(window || {});
