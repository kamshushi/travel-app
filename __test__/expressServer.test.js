const request= require('supertest')
const app= require('../src/server/index')
describe("Testing my Express server" , () => {
    test("Testing getting 200 response code", () => {
        
        request(app).get('/keys')
        .then(res => expect(res.statusCode).toBe(200))
        
    })
})