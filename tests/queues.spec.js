/**
 * Created by eric on 6/10/14.
 */
describe("Queue", function () {
    var q;
    beforeEach( function () {
        q = new Queue();
    });

    it("should be defined", function () {
        expect(q).toBeDefined();
    });

    it( "should have an enqueue function to add item to queue", function () {
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
    })

    it( "should have an dequeue function to remove item to queue", function () {
        expect(q.deQueue).toBeDefined();
    });

    it( "should have an front function to get the first item in the queue", function () {
        expect(q.front).toBeDefined();
    });

    it( "should have an back function to get the last item in the queue", function () {
        expect(q.back).toBeDefined();
    });

    it( "should have an toString function to display items in the queue", function () {
        expect(q.toString).toBeDefined();
    });

    it( "should have an isEmpty function to check if there are no items in the queue", function () {
        expect(q.isEmpty).toBeDefined();
    });

    it( "should have an count function to get number of items in the queue", function () {
        expect(q.count).toBeDefined();
    });

    it( "should not expose access to the dataStore property", function () {
        expect(q.dataStore).not.toBeDefined();
    });
})