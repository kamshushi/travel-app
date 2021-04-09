import {getWeather} from '../src/client/js/getWeather'

describe("Testing getting a city weather" , () => {
    test("Testing getWeather function", () => {
        expect(getWeather).toBeDefined()
    })
})