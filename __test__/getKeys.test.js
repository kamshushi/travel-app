import {getKeys} from '../src/client/js/getKeys'
const dotenv= require('dotenv')

dotenv.config()

describe("Testing getting all keys and usernames" , () => {
    test("Testing getKeys function", () => {
        const output={
            geonamesUsername: process.env.geonamesUsername,
            pixabayApiKey: process.env.pixabayApiKey,
            weatherbitApiKey: process.env.weatherbitApiKey
        }

        expect(getKeys()).resolves.toEqual(output)
    })
})