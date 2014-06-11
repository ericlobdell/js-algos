/**
 * Created by eric on 6/10/14.
 */
(function (window) {
    var q;

    q = function () {
        var dataStore = [];

        return {
            enQueue: function (element) {
                dataStore.push(element);
            },
            deQueue: function () {
                return dataStore.shift();
            },
            front: function () {
                return dataStore[0];
            },
            back: function () {
                return dataStore[ dataStore.length - 1 ];
            },
            toString: function () {
                var s = "", i = 0, len = dataStore.length;
                for ( ; i < len; ++i ) {
                    s += dataStore[i] + "\n";
                }
                return s;
            },
            isEmpty: function () {
                return dataStore.length === 0;
            },
            count: function () {
                return dataStore.length;
            }
        }
    };

    window.Queue = q;

})(window);
