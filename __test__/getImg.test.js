import {getImg} from '../src/client/js/getImg'

describe("Testing getting a city image" , () => {
    test("Testing getImg function", () => {
        expect(getImg).toBeDefined()
    })
})