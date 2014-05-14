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

        describe("weeklyAverage", function () {
            beforeEach(function () {
                temps = new Temps();
            });
            it("should compute the average temps for the week at the supplied index", function () {
                var weekOneTemps = [50, 60, 70, 70, 55, 65, 80];
                var week = 0;
                temps.dataStore[week] = weekOneTemps;

                var expected = (50 + 60 + 70 + 70 + 55 + 65 + 80) / 7;
                var sut = temps.weekAverage(week);

                expect(sut).toBe(expected);
            });

            it("display should return the correct output", function () {
                var weekOneTemps = [50, 60, 70, 70, 55, 65, 80];
                var week = 0;
                temps.dataStore[week] = weekOneTemps;

                var ave = (50 + 60 + 70 + 70 + 55 + 65 + 80) / 7;
                var expected = "Week 1's average temp was " + ave + ".\n";
                var sut = temps.displayWeekAverage(week);

                expect(sut).toBe(expected);
            });
        });

        describe("monthlyAverage", function () {
            beforeEach(function () {
                temps = new Temps();
            });
            it("should compute the average temp for all supplied temps for the month", function () {
                var weekOneTemps = [50, 60, 70, 70, 55, 65, 80],
                    weekTwoTemps = [55, 65, 75, 75, 50, 60, 80],
                    weekThreeTemps = [40, 50, 60, 60, 45, 75, 90],
                    weekFourTemps = [58, 68, 78, 78, 58, 68, 88],
                    DAYS_IN_MONTH = 28;

                temps.dataStore[0] = weekOneTemps;
                temps.dataStore[1] = weekTwoTemps;
                temps.dataStore[2] = weekThreeTemps;
                temps.dataStore[3] = weekFourTemps;

                var weekOneTotal = (50 + 60 + 70 + 70 + 55 + 65 + 80),
                    weekTwoTotal = (55 + 65 + 75 + 75 + 50 + 60 + 80),
                    weekThreeTotal = (40 + 50 + 60 + 60 + 45 + 75 + 90),
                    weekFourTotal = (58 + 68 + 78 + 78 + 58 + 68 + 88);

                var expected = (weekOneTotal + weekTwoTotal + weekThreeTotal + weekFourTotal) / DAYS_IN_MONTH;
                var sut = temps.monthAverage();

                expect(sut).toBe(expected);
            });

            it("display should return the correct output", function () {
                var weekOneTemps = [50, 60, 70, 70, 55, 65, 80],
                    weekTwoTemps = [55, 65, 75, 75, 50, 60, 80],
                    weekThreeTemps = [40, 50, 60, 60, 45, 75, 90],
                    weekFourTemps = [58, 68, 78, 78, 58, 68, 88],
                    DAYS_IN_WEEK = 7;

                temps.dataStore[0] = weekOneTemps;
                temps.dataStore[1] = weekTwoTemps;
                temps.dataStore[2] = weekThreeTemps;
                temps.dataStore[3] = weekFourTemps;

                var weekOneAve = (50 + 60 + 70 + 70 + 55 + 65 + 80) / DAYS_IN_WEEK,
                    weekTwoAve = (55 + 65 + 75 + 75 + 50 + 60 + 80) / DAYS_IN_WEEK,
                    weekThreeAve = (40 + 50 + 60 + 60 + 45 + 75 + 90) / DAYS_IN_WEEK,
                    weekFourAve = (58 + 68 + 78 + 78 + 58 + 68 + 88) / DAYS_IN_WEEK;

                var expected = "Week 1's average temp was " + weekOneAve + ".\n" +
                    "Week 2's average temp was " + weekTwoAve + ".\n" +
                    "Week 3's average temp was " + weekThreeAve + ".\n" +
                    "Week 4's average temp was " + weekFourAve + ".\n";
                var sut = temps.displayAllWeekAverages();

                expect(sut).toBe(expected);
            });
        });
    });

    describe("window.Letters", function () {
        var letters;
       beforeEach(function () {
            letters = new Letters();
       });
        it("should have an add function", function () {
            expect(letters.add).toBeDefined();
        });
        it("should have a toString function", function () {
            expect(letters.toString).toBeDefined();
        });
        it("should have a dataStore property", function () {
            expect(letters.dataStore).toBeDefined();
        });

        it("add should add a given letter to the dataStore", function () {
            expect(letters.dataStore.length).toBe(0);
            letters.add("a");
            expect(letters.dataStore.length).toBe(1);
            expect(letters.dataStore[0]).toBe("a");
        });

        it("toString should return the array of letters as a word", function () {
            letters.add("c");
            letters.add("a");
            letters.add("t");

            var sut = letters.toString();
            var expected = "cat";

            expect(sut).toBe(expected);
        });
    });

});
