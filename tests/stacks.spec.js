/**
 * Created by eric on 5/19/14.
 */
describe("Stack", function () {
    var stack;
    beforeEach(function () {
        stack = new Stack();
    });

    it("should have a push function to add an item to the top of the stack", function () {
        expect(stack.push).toBeDefined();
    });

    describe("push", function () {
        it("should add an item to the top of the stack", function () {
            expect(stack.length()).toEqual(0);
            stack.push("item");
            expect(stack.length()).toEqual(1);
        });
    });

    it("should have a peek function to review the topmost item in the stack", function () {
        expect(stack.peek).toBeDefined();
    });

    describe("peek", function () {
        it("return the value of the topmost item in the stack", function () {
            expect(stack.length()).toEqual(0);
            stack.push("item");
            expect(stack.peek()).toEqual("item");
            stack.push("doggie");
            expect(stack.peek()).toEqual("doggie");
        });
    });

    it("should have a pop function to remove th etopmost item in the stack", function () {
        expect(stack.pop).toBeDefined();
    });

    describe("peek", function () {
        it("return the value of the topmost item in the stack, and remove it", function () {
            expect(stack.length()).toEqual(0);
            stack.push("item1");
            stack.push("item2");

            expect(stack.peek()).toEqual("item2");
            expect(stack.pop()).toEqual("item2");
            expect(stack.peek()).toEqual("item1");
        });
    });

    it("should have a clear function to remove all items", function () {
        expect(stack.clear).toBeDefined();
    });

    describe("clear", function () {
        it("clear the items in the stack", function () {
            expect(stack.length()).toEqual(0);

            stack.push("item1");
            stack.push("item2");

            expect(stack.length()).toEqual(2);
            expect(stack.peek()).toEqual("item2");

            stack.clear();

            expect(stack.length()).toEqual(0);
            expect(stack.peek()).not.toBeDefined();

            // make sure dataStore is available again after clear/delete
            // and not added globally to window.
            stack.push("item1");
            expect(stack.peek()).toEqual("item1");
            expect(window.dataStore).not.toBeDefined();
        });

    });

    it("should have a length function to get the total count of items in the stack", function () {
        expect(stack.length).toBeDefined();
    });

    describe("length", function () {
        it("should return the count of items in the stack", function () {
            expect(stack.length()).toEqual(0);
            stack.push("item");
            expect(stack.length()).toEqual(1);
        });
    });

    // exercises

    describe("exercises", function () {
        it("isPalindrome should return true if word is a palindrome", function () {
            var sut = isPalindrome("noon");
            expect(sut).toBe(true);
        });

        it("isPalindrome should return true if phrase is a palindrome", function () {
            var sut = isPalindrome("never odd or even");
            expect(sut).toBe(true);
        });

        it("isPalindrome should return false if word is not a palindrome", function () {
            var sut = isPalindrome("none");
            expect(sut).toBe(false);
        });
    });

});