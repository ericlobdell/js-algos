/**
 * Created by eric on 5/19/14.
 */
(function (window) {
    function stack() {
        var dataStore = [], top = 0;

        return {
            push: function (ele) {
                dataStore[top++] = ele;
            },
            peek: function () {
                return dataStore[top - 1];
            },
            pop: function () {
                return dataStore[--top];
            },
            clear: function () {
                delete dataStore;
                dataStore = [];
                top = 0;
            },
            length: function () {
                return top;
            }
        }
    }

    window.Stack = stack;
})(window);