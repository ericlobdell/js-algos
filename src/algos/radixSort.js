/**
 * Created by eric on 6/14/14.
 */

(function ( window ) {
    var radix = {
        distribute: function ( ns, qs, n, digit ) {
            for ( var i = 0; i < n; ++i ) {
                if ( digit == 1 ) {
                    qs[ns[i] % 10].enQueue( ns[i] );
                } else {
                    qs[Math.floor( ns[1] / 10 )].enQueue( ns[i] );
                }
            }
        },
        collect: function ( qs, ns ) {
            var i = 0;
            for ( var digit = 0; digit < 10; ++digit ) {
                while ( !qs[digit].isEmpty() ) {
                    nums[i++] = qs[digit].deQueue();
                }
            }
        }
    };
    window.Radix = radix;

})( window );

(function () {

})()
