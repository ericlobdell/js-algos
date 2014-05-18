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

    it("should optionally accept an array as an argument to initialize the list", function () {
        var list = new List([1,2,3]);
        expect(list.length()).toBe(3);

        var emptyList = new List();
        expect(emptyList.length()).toBe(0);
    });

    it("should throw an error if initialized with something other than an array", function () {
        var msg = "The list can only be initialized with an array of items";
        expect(function () { new List({0: "item"}) }).toThrow(msg);
        expect(function () { new List({"key": "item"}) }).toThrow(msg);
        expect(function () { new List(1) }).toThrow(msg);
        expect(function () { new List("not an array") }).toThrow(msg);

    });

    it("should not expose the dataStore property", function () {
         expect(list.hasOwnProperty("dataStore")).toBe(false);
        expect(list.dataStore).not.toBeDefined();
    });

    it("should not expose the pos property", function () {
        expect(list.hasOwnProperty("pos")).toBe(false);
        expect(list.pos).not.toBeDefined();
    });

    it("should not expose the listSize property", function () {
        expect(list.hasOwnProperty("listSize")).toBe(false);
        expect(list.listSize).not.toBeDefined();
    });

    it("should have a clear function to clear the items in the list", function () {
        expect(list.clear).toBeDefined();
    });

    describe("clear", function () {
        beforeEach(function () {
            list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
        });
        it("should remove all items in th list", function () {
            expect(list.length()).toBe(4);
            list.clear();
            expect(list.length()).toBe(0);
        });

        it("should set the current position to zero", function () {
            list.moveTo(2);
            expect(list.currentPos()).toBe(2);
            list.clear();
            expect(list.currentPos()).toBe(0);
        });
    });

    it("should have a find function to get the position of an element in the list", function () {
        expect(list.find).toBeDefined();
    });

    describe("find", function () {
        beforeEach(function () {
            list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
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

    describe("toString", function () {
        beforeEach(function () {
            list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
        });
        it("should return the dataStore so the caller can do what they want with it.", function () {
            var expected = [1,2,3,4];
            var sut = list.toString();

            expect(sut).toEqual(expected);
        });
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
            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
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

        it("should increment the list size", function () {
            expect(list.length()).toBe(4);

            list.insert(newElement, after);

            expect(list.length()).toBe(5);
        });
    });

    it("should have an append function to add an element to th end of the list", function () {
        expect(list.append).toBeDefined();
    });

    describe("append", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
        });
        it("should add th element to the end of the list", function () {
            var newElement = 5;
            list.append(newElement);

            var sut = list.find(newElement);
            var expected = 4;

            expect(sut).toBe(expected);
        });

        it("should increment the listSize property", function () {
            var newElement = 5,
                expectedBefore = 4,
                expectedAfter = 5;

            expect(list.length()).toBe(expectedBefore);
            list.append(newElement);
            expect(list.length()).toBe(expectedAfter);
        });
    });

    it("should have a remove function to enable removing a given item", function () {
        expect(list.remove).toBeDefined();
    });

    describe("remove", function () {
        beforeEach(function () {
            list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
        });
        it("should remove the element from the list", function () {
            var expectedBefore = 1,
                expectedAfter = -1;

            var sutBefore = list.find(2);
            expect(sutBefore).toBe(expectedBefore);

            list.remove(2);

            var sutAfter = list.find(2);
            expect(sutAfter).toBe(expectedAfter);
        });

        it("should decrement the listSize property", function () {
            var expectedBefore = 4,
                expectedAfter = 3;

            var sutBefore = list.length();
            expect(sutBefore).toBe(expectedBefore);

            list.remove(2);

            var sutAfter = list.length();
            expect(sutAfter).toBe(expectedAfter);
        });

        it("should return true when called with an element that is in the list", function () {
            var sut = list.remove(2);
            expect(sut).toBe(true);
        });

        it("should return false when called with an element that is not in the list", function () {
            var sut = list.remove(12);
            expect(sut).toBe(false);
        });
    });

    it("should have a front function to move the current position to the first element in the list", function () {
        expect(list.front).toBeDefined();
    });

    describe("front", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);

            list.moveTo(1);
        });

        it("should set the lis.pos property to zero", function () {
             expect(list.currentPos()).toEqual(1);

            list.front();

            expect(list.currentPos()).toEqual(0);
        });
    });

    it("should have an end function to move the current position to the last element in the list", function () {
        expect(list.end).toBeDefined();
    });

    describe("end", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);

            list.moveTo(1);
        });

        it("should set the lis.pos property to the last index in the list", function () {
            expect(list.currentPos()).toEqual(1);

            list.end();

            expect(list.currentPos()).toEqual(3);
        });
    });

    it("should have an prev function to move the current position to the previous element in the list", function () {
        expect(list.prev).toBeDefined();
    });

    describe("prev", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);

            list.moveTo(1);
        });

        it("should set the lis.pos property to the previous index in the list", function () {
            expect(list.currentPos()).toEqual(1);

            list.prev();

            expect(list.currentPos()).toEqual(0);
        });

        it("should do nothing if the current position is zero or negative", function () {
            expect(list.currentPos()).toEqual(1);

            list.prev();

            expect(list.currentPos()).toEqual(0);

            list.prev();

            expect(list.currentPos()).toEqual(0);

            list.moveTo(-1);
            list.prev();

            expect(list.currentPos()).toEqual(-1);
        });
    });

    it("should have an next function to move the current position to the next element in the list", function () {
        expect(list.next).toBeDefined();
    });

    describe("next", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);

            list.moveTo(1);
        });

        it("should set the lis.pos property to the next index in the list", function () {
            expect(list.currentPos()).toEqual(1);

            list.next();

            expect(list.currentPos()).toEqual(2);
        });

        it("should do nothing if the current position is the last index in the list", function () {
            expect(list.currentPos()).toEqual(1);

            list.next();
            expect(list.currentPos()).toEqual(2);

            list.end();
            expect(list.currentPos()).toEqual(3);

            list.next();
            expect(list.currentPos()).toEqual(3);
        });
    });

    it("should have a length function to get the number of elements in the list", function () {
        expect(list.length).toBeDefined();
    });

    describe("length", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);

        });

        it("should return the value of the listSize property", function () {
            var sut = list.length();
            expect(sut).toEqual(4);
        });
    });

    it("should have a currentPos function to get the current position in the list", function () {
        expect(list.currentPos).toBeDefined();
    });

    describe("curentPos", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);

            list.moveTo(1);
        });

        it("should return the value of the pos property", function () {
            var sut = list.currentPos();
            expect(sut).toEqual(1);
        });
    });

    it("should have an moveTo function to move the current position to a given position in the list", function () {
        expect(list.moveTo).toBeDefined();
    });

    describe("moveTo", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);

        });

        it("should set the pos property to the supplied value", function () {
            var sut = list.currentPos();
            expect(sut).toEqual(0);

            list.moveTo(2);
            sut = list.currentPos();
            expect(sut).toEqual(2);
        });
    });

    it("should have an getElement function to get the element in the current position in the list", function () {
        expect(list.getElement).toBeDefined();
    });

    describe("getElement", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);

            list.moveTo(1);
        });

        it("should return the element at the index of the current pos value", function () {
            var sut = list.getElement();
            expect(sut).toEqual(2);
        });
    });

    it("should have an contains function to confirm a given element is in the list", function () {
        expect(list.contains).toBeDefined();
    });

    describe("contains", function () {
        beforeEach(function () {
            list = new List();

            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
        });

        it("should return true for an element in the list", function () {
            var sut = list.contains(1);
            expect(sut).toBe(true);
        });

        it("should return false for an element not in the list", function () {
            var sut = list.contains(11);
            expect(sut).toBe(false);
        });
    })

    
});
