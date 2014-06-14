/**
 * Created by eric on 5/21/14.
 */

(function ( window ) {
    var balancedParens = function ( str ) {
            var openParens = new Stack(),
                closeParens = new Stack(),
                openCount = 0, closeCount = 0,
                i = 0, len = str.length;

            for ( ; i < len; i++ ) {
                var s = str[i];

                if ( s === "(" ) openCount++;
                if ( s === ")" ) closeCount++;
            }

            if ( openCount === closeCount )
                return -1;

        },
        isPalindrome = function ( word ) {
            var s = new Stack()
            i = 0,
                len = word.length;

            for ( ; i < len; ++i ) {
                s.push( word[i] );
            }

            var rword = "";
            while ( s.length() > 0 ) {
                rword += s.pop();
            }

            return word.split( ' ' ).join( '' ) == rword.split( ' ' ).join( '' );

        };

    window.balancedParens = balancedParens;
    window.isPalindrome = isPalindrome;

})( window );
