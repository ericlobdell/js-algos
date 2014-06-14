/**
 * Created by eric on 5/18/14.
 */

(function ( window ) {
    var movies = [
            "Inception",
            "Goodfellas",
            "Start Wars",
            "Seven Samurai",
            "The Matrix",
            "Forrest Gump",
            "City of God"
        ],
        movieList = new List( movies ),
        customers = new List(),
        rented = new List(),
        kiosk = function () {
            return {
                checkOut: function ( name, movie, filmList, customerList ) {
                    if ( movieList.contains( movie ) ) {
                        var c = new Customer( name, movie );
                        customerList.append( c );
                        filmList.remove( movie );
                        rented.append( movie );
                    } else {
                        console.log( movie + " isn't available." );
                    }
                },
                checkIn: function ( movie ) {
                    if ( rented.contains( movie ) ) {
                        rented.remove( movie );
                        movieList.append( movie );
                    } else {
                        console.log( movie + " isn't in the rented movies list" );
                    }
                }
            }
        };

    function Customer ( name, movie ) {
        this.name = name;
        this.movie = movie;
    }

    window.Kiosk = kiosk;
})( window );

