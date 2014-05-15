/**
 * Created by eric on 5/12/14.
 */
(function (window) {
    var sum = function (runningTotal, currentValue) {
        return runningTotal + currentValue;
    };

    function grades() {
        return {
            dataStore: [],
            add: function (grade) {
                this.dataStore.push(grade);
            },
            average: function () {
                return this.dataStore.reduce(sum) / this.dataStore.length;
            }
        }
    };

    function words(arr) {
        return {
            print: function () {
                return arr.join(", ");
            },
            printr: function () {
                return arr.reverse().join(", ");
            }
        }
    };

    Array.matrix = function (numRows, numCols, initial) {
        var arr = [];
        for (var i = 0; i < numRows; ++i) {
            var columns = [];
            for (var j = 0; j < numCols; ++j) {
                columns[j] = initial;
            }
            arr[i] = columns;
        }
        return arr;
    };
    function temps() {
        // using fixed values for this exercise
        var NUM_ROWS = 4,
            NUM_COLS = 7

        function getPosition(date) {
            if (date < 1 || date > 28)
                throw new Error("I can only use dates between 1 and 28!");

            var weekPosition = Math.floor(date / NUM_COLS);
            var dayPosition = date % NUM_COLS;

            return {
                week: weekPosition,
                day: dayPosition
            }
        }

        return {
            dataStore: Array.matrix(NUM_ROWS, NUM_COLS, 0),
            add: function (temp, date) {
                date = date || 1;
                var position = getPosition(date);
                this.dataStore[position.week][position.day] = temp;
            },
            weekAverage: function (week) {
                var weekTemps = this.dataStore[week];
                return weekTemps.reduce(sum) / NUM_COLS;
            },
            monthAverage: function () {
                var total = 0, i = 0,
                    totalDays = ( NUM_ROWS * NUM_COLS );
                for (; i < NUM_ROWS; ++i) {
                    total += this.dataStore[i].reduce(sum);
                }

                return total / totalDays;
            },
            displayWeekAverage: function (weekIndex) {
                return "Week " + (weekIndex + 1) + "'s average temp was " + this.weekAverage(weekIndex) + ".\n";
            },
            displayAllWeekAverages: function () {
                var i = 0, ret = "";
                for (; i < NUM_ROWS; ++i) {
                    ret += this.displayWeekAverage(i);
                }

                return ret;
            }

        }


    }

    function letters () {
        return {
            dataStore: [],
            add: function (letter) {
                this.dataStore.push(letter);
            },
            toString: function () {
                return this.dataStore.join("");
            }
        }
    }

    window.Letters = letters;
    window.Temps = temps;
    window.Grades = grades;
    window.Words = words;

})(window || {});