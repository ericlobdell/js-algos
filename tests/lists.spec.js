/**
 * Created by eric on 5/14/14.
 */

describe("List", function () {
    var list;
    beforeEach(function () {
        list = new List();
    });
    it("should exist", function () {
        expect(list).toBeDefined();
    });

    it("should have a clear function to clear the items in the list", function () {
        expect(list.clear).toBeDefined();
    });

    describe("clear", function () {
        beforeEach(function () {
            list = new List();
            list.dataStore = [1,2,3,4];
        });
        it("should set the dataStore back to an empty array", function () {
            list.clear();
            expect(list.dataStore instanceof Array).toBe(true)
            expect(list.dataStore.length).toBe(0);
        });

        it("should set the current position to zero", function () {
            list.pos = 2;

            list.clear();
            expect(list.pos).toBe(0);
        });
    });

    it("should have a find function to get the position of an element in the list", function () {
        expect(list.find).toBeDefined();
    });

    describe("find", function () {
        beforeEach(function () {
            list = new List();
            list.dataStore = [1,2,3,4];
        });
        it("should return the position in the list of the element provided", function () {
            var sut = list.find(2),
                expected = 1;

            expect(sut).toBe(expected);
        });

        it("should return the -1 if the element provided is not in the list", function () {
            var sut = list.find(20),
                expected = -1;

            expect(sut).toBe(expected);
        });
    });

    it("should have a toString function to enable seeing it's contents", function () {
        expect(list.toString).toBeDefined();
    });

    it("should have an insert function to allow inserting an element at a certain position", function () {
        expect(list.insert).toBeDefined();
    });

    describe("insert", function () {
        var after, newElement;
        beforeEach(function () {
            list = new List();
             after = 3;
             newElement = 100;
            list.dataStore = [1,2,3,4];
        });
        it("should call find to locate the supplied element, to insert the new element after", function () {
            spyOn(list, "find");

            list.insert(newElement, after);

            expect(list.find).toHaveBeenCalledWith(after);

        });

        it("should insert the new element in the position after the supplied element", function () {
            var expectedPosition = 3;

            list.insert(newElement, after);
            var sut = list.find(newElement);

            expect(sut).toBe(expectedPosition);
        });

        it("should return true if the element to insert after already exists in the list", function () {
            var existsInList = 1;

            var sut = list.insert(newElement, existsInList);

            expect(sut).toBe(true);
        });

        it("should return false if the element to insert after doesn't exists in the list", function () {
            var doesNotExistInList = 10;

            var sut = list.insert(newElement, doesNotExistInList);

            expect(sut).toBe(false);
        });

        it("should increment the listSize property", function () {
            expect(list.listSize).toBe(0);

            list.insert(newElement, after);

            expect(list.listSize).toBe(1);
        });
    });

    it("should have an append function to add an element to th end of the list", function () {
        expect(list.append).toBeDefined();
    });

    it("should have a remove function to enable removing a given item", function () {
        expect(list.remove).toBeDefined();
    });

    it("should have a front function to move the current position to the first element in the list", function () {
        expect(list.front).toBeDefined();
    });

    it("should have an end function to move the current position to the last element in the list", function () {
        expect(list.end).toBeDefined();
    });

    it("should have an prev function to move the current position to the previous element in the list", function () {
        expect(list.prev).toBeDefined();
    });

    it("should have an next function to move the current position to the next element in the list", function () {
        expect(list.next).toBeDefined();
    });

    it("should have a length function to get the number of elements in the list", function () {
        expect(list.length).toBeDefined();
    });

    it("should have a currentPos function to get the current position in the list", function () {
        expect(list.currentPos).toBeDefined();
    });

    it("should have an moveTo function to move the current position to a given position in the list", function () {
        expect(list.moveTo).toBeDefined();
    });

    it("should have an getElement function to get the element in the current position in the list", function () {
        expect(list.getElement).toBeDefined();
    });

    it("should have an contains function to confirm a given element is in the list", function () {
        expect(list.contains).toBeDefined();
    });

    
});
