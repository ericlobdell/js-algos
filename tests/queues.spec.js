/**
 * Created by eric on 6/10/14.
 */
describe("Queue", function () {
    var q;
    beforeEach(function () {
        q = new Queue();
    });

    it("should be defined", function () {
        expect(q).toBeDefined();
    });

    it("should have an enqueue function to add item to queue", function () {
        expect(q.enQueue).toBeDefined();
    });

    describe("enQueue", function () {
        it("should add an item to the queue", function () {
            expect(q.count()).toEqual(0);
            q.enQueue(5);
            expect(q.count()).toEqual(1);
        });

        it("should add an item to the back of the queue", function () {
            q.enQueue(5);
            expect(q.back()).toEqual(5);
            q.enQueue(12);
            expect(q.back()).toEqual(12);
        });
    });

    it("should have an deQueue function to remove item from queue", function () {
        expect(q.deQueue).toBeDefined();
    });

    describe("deQueue", function () {
        it("should return the first item in the queue if not in priority mode", function () {
            q.enQueue(5);
            q.enQueue(12);
            q.enQueue(1);
            var sut = q.deQueue();
            expect(sut).toEqual(5);
        });

        it("should return the item with the lowest priority if in priority mode", function () {
            q.enQueue(
                {
                    name: "Betty",
                    priority: 3
                });
            q.enQueue({
                name: "Wilma",
                priority: 1
            });
            q.enQueue({
                name: "Fred",
                priority: 2
            });
            q.setAsPriorityMode();
            expect(q.deQueue().name).toEqual("Wilma");
        });

        it("should remove the item from the queue", function () {
            q.enQueue(5);
            q.enQueue(12);
            q.enQueue(1);
            var temp = q.deQueue();
            expect(q.count()).toEqual(2);
        })
    });

    it("should have an front function to get the first item in the queue", function () {
        expect(q.front).toBeDefined();
    });

    describe("front", function () {
        it("return the value of first item in the queue", function () {
            q.enQueue(5);
            q.enQueue(12);
            q.enQueue(1);
            var sut = q.front();
            expect(sut).toEqual(5);
        });

        it("should not remove the item from the queue", function () {
            q.enQueue(5);
            q.enQueue(12);
            q.enQueue(1);
            var temp = q.front();
            expect(q.count()).toEqual(3);
        });
    });

    it("should have an back function to get the last item in the queue", function () {
        expect(q.back).toBeDefined();
    });

    describe("back", function () {
        it("return the value of last item in the queue", function () {
            q.enQueue(5);
            q.enQueue(12);
            q.enQueue(1);
            var sut = q.back();
            expect(sut).toEqual(1);
        });

        it("should not remove the item from the queue", function () {
            q.enQueue(5);
            q.enQueue(12);
            q.enQueue(1);
            var temp = q.back();
            expect(q.count()).toEqual(3);
        });
    });

    it("should have an toString function to display items in the queue", function () {
        expect(q.toString).toBeDefined();
    });

    describe("toString", function () {
        it("return a comma delimited string of the values in the queue", function () {
            q.enQueue(5);
            q.enQueue(12);
            q.enQueue(1);
            var sut = q.toString();
            expect(sut).toEqual("5, 12, 1");
        });
    });

    it("should have an isEmpty function to check if there are no items in the queue", function () {
        expect(q.isEmpty).toBeDefined();
    });

    describe("isEmpty", function () {
        it("should return true if the queue has no values", function () {
            expect(q.isEmpty()).toBe(true);
        });

        it("should return false if the queue has no values", function () {
            q.enQueue(5);
            q.enQueue(12);
            q.enQueue(1);
            expect(q.isEmpty()).toBe(false);
        });
    });

    it("should have an count function to get number of items in the queue", function () {
        expect(q.count).toBeDefined();
    });

    describe("count", function () {
        it("should return the number of items in the queue", function () {
            q.enQueue(5);
            q.enQueue(12);
            q.enQueue(1);
            expect(q.count()).toEqual(3);
        });
    });

    it("should hae a setAsPriorityMode function to set the Queue as a priority queue", function () {
        expect(q.setAsPriorityMode).toBeDefined();
    });

    it("should not expose access to the dataStore property", function () {
        expect(q.dataStore).not.toBeDefined();
    });
});