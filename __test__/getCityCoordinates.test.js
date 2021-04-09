import {getCityCoordinates} from '../src/client/js/getCityCoordinates'

describe("Testing getting a city coordinates" , () => {
    test("Testing getCityCoordinates function", () => {
        expect(getCityCoordinates).toBeDefined()
    })
})