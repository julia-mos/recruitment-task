const Check = require('../src/checkString')

test('kajak', () =>{
    expect(Check('kajak').toBe(true))
})

test('mama', () =>{
    expect(Check('mama').toBe(false))
})

test('Zakopane na pokaz', () =>{
    expect(Check('Zakopane na pokaz').toBe(true))
})