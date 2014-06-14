System.register("../../../src/algos/radixSort", [], function() {
  "use strict";
  var __moduleName = "../../../src/algos/radixSort";
  (function(window) {
    var radix = {
      distribute: function(ns, qs, n, digit) {
        for (var i = 0; i < n; ++i) {
          if (digit == 1) {
            qs[$traceurRuntime.toProperty(ns[$traceurRuntime.toProperty(i)] % 10)].enQueue(ns[$traceurRuntime.toProperty(i)]);
          } else {
            qs[$traceurRuntime.toProperty(Math.floor(ns[1] / 10))].enQueue(ns[$traceurRuntime.toProperty(i)]);
          }
        }
      },
      collect: function(qs, ns) {
        var i = 0;
        for (var digit = 0; digit < 10; ++digit) {
          while (!qs[$traceurRuntime.toProperty(digit)].isEmpty()) {
            $traceurRuntime.setProperty(nums, i++, qs[$traceurRuntime.toProperty(digit)].deQueue());
          }
        }
      }
    };
    window.Radix = radix;
  })(window);
  (function() {})();
  return {};
});
System.get("../../../src/algos/radixSort" + '');

//# sourceMappingURL=radixSort.map
