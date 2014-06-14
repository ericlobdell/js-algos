System.register("../../../src/Queues/Queue", [], function() {
  "use strict";
  var __moduleName = "../../../src/Queues/Queue";
  (function(window) {
    var q;
    q = function() {
      var dataStore = [],
          _isPriorityMode;
      return {
        enQueue: function(element) {
          dataStore.push(element);
        },
        deQueue: function() {
          if (_isPriorityMode) {
            var priority = dataStore[0].priority,
                i = 0,
                len = dataStore.length;
            for (; i < len; ++i) {
              if (dataStore[$traceurRuntime.toProperty(i)].priority < priority) {
                priority = i;
              }
            }
            return dataStore.splice(priority, 1)[0];
          }
          return dataStore.shift();
        },
        front: function() {
          return dataStore[0];
        },
        back: function() {
          return dataStore[$traceurRuntime.toProperty(dataStore.length - 1)];
        },
        toString: function() {
          return dataStore.join(", ");
        },
        isEmpty: function() {
          return dataStore.length === 0;
        },
        count: function() {
          return dataStore.length;
        },
        setAsPriorityMode: function() {
          _isPriorityMode = true;
        }
      };
    };
    window.Queue = q;
  })(window);
  return {};
});
System.get("../../../src/Queues/Queue" + '');

//# sourceMappingURL=Queue.map
