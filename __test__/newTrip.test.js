import {newTrip} from '../src/client/js/newTrip'

describe("Testing adding a new Trip" , () => {
    test("Testing newTrip function", () => {
        expect(newTrip).toBeDefined()
    })
})