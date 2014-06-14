System.register("../../../src/Stacks/Stack", [], function() {
  "use strict";
  var __moduleName = "../../../src/Stacks/Stack";
  (function(window) {
    function stack() {
      var dataStore = [],
          top = 0;
      return {
        push: function(ele) {
          $traceurRuntime.setProperty(dataStore, top++, ele);
        },
        peek: function() {
          return dataStore[$traceurRuntime.toProperty(top - 1)];
        },
        pop: function() {
          return dataStore[$traceurRuntime.toProperty(--top)];
        },
        clear: function() {
          delete dataStore;
          dataStore = [];
          top = 0;
        },
        length: function() {
          return top;
        }
      };
    }
    window.Stack = stack;
  })(window);
  return {};
});
System.get("../../../src/Stacks/Stack" + '');

//# sourceMappingURL=Stack.map
