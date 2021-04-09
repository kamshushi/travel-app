import {isWithinAWeek} from '../src/client/js/isWithinAWeek'

describe("Testing if the trip is within a week" , () => {
    test("Testing isWithinAWeek function", () => {
        expect(isWithinAWeek).toBeDefined()
    })
})