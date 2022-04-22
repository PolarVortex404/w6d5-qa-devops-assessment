const {shuffleArray} = require('./utils')

describe('shuffleArray should return shuffled array', () => {
    test('returns array', ()=>{
        expect(shuffleArray([1,2,3])).toBeInstanceOf(Array)
    })
    test('shuffle array to return array of the same length', () =>{
        expect(shuffleArray([1,2,3]).length).toBe(3)
    })
})
