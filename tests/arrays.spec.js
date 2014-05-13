/**
 * Created by eric on 5/12/14.
 */

describe("Arrays", function () {
    describe("window.Grades", function () {
        var grades;
        beforeEach(function () {
            grades = new Grades();
        });

        it("should exist", function () {
            expect(grades).toBeDefined();
        });

        it("should have an add function", function () {
            expect(grades.add).toBeDefined();
        });

        it("should have a dataStore property to store the grades in an array", function () {
            expect(grades.dataStore).toBeDefined();
        });

        it("should have an average function", function () {
            expect(grades.average).toBeDefined();
        });

        describe("add", function () {
            it("should add a grade to the dataStore", function () {
                expect(grades.dataStore.length).toBe(0);
                grades.add(99);
                expect(grades.dataStore.length).toBe(1);
                expect(grades.dataStore[0]).toBe(99);
            });
        });

        describe("average", function () {
            it("should return the average of the grades in the dataStore", function () {
                grades.add(50);
                grades.add(60);
                grades.add(75);

                var expected = (50 + 60 + 75) / 3;
                var sut = grades.average();

                expect(sut).toBe(expected);
            });
        });
    });

    describe("window.Words", function () {
        var stringArray = ["hello", "there"],
            words;

        beforeEach(function () {
            words = new Words(stringArray);
        });

        it("should have a print function", function () {
            expect(words.print).toBeDefined();
        })

        it("print should return the array in order, as a string", function () {
           var sut = words.print();
            var expected = "hello, there";
            expect(sut).toBe(expected);
        });

        it("printr should return the array in reverse, as a string", function () {
            var sut = words.printr();
            var expected = "there, hello";
            expect(sut).toBe(expected);
        });

    });

    describe("window.Temps", function () {
        var temps;
        beforeEach(function () {
            temps = new Temps();
        });

        it("should have a weekAverage function", function () {
            expect(temps.weekAverage).toBeDefined();
        });

        it("should have a monthAverage function", function () {
            expect(temps.monthAverage).toBeDefined();
        });

        it("should have an add function", function () {
            expect(temps.add).toBeDefined();
        });

        it("should have a displayWeekAverage function", function () {
            expect(temps.displayWeekAverage).toBeDefined();
        });

        it("should have a displayAllWeekAverages function", function () {
            expect(temps.displayAllWeekAverages).toBeDefined();
        });

        it("should have a dataStore property", function () {
            expect(temps.dataStore).toBeDefined();
        });

        describe("add", function () {
            beforeEach(function () {
                temps = new Temps();
            });

            it(" should insert the supplied date in the correct position in the array", function () {
               var date = 13,
                   temp = 85;
                temps.add(temp, date);
                var sut = temps.dataStore[1][6];

                expect(sut).toBe(temp);
            });

            it(" should insert temp into the first position, ([0][1]), if no date specified", function () {
                var temp = 85;
                temps.add(temp);
                var sut = temps.dataStore[0][1];

                expect(sut).toBe(temp);
            });


        })

    });

});
