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

    it("should have a find function to get the position of an element in the list", function () {
        expect(list.find).toBeDefined();
    });

    it("should have a toString function to enable seeing it's contents", function () {
        expect(list.toString).toBeDefined();
    });

    it("should have an insert function to allow inserting an element at a certain position", function () {
        expect(list.insert).toBeDefined();
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
