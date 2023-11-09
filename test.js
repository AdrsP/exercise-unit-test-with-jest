test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Dollar should be 146,26 Yen", () =>{
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(3.5);

    //If 1 Dolar is 146,26 Yen, then 3.5 yen should be (3.5 * 146,26)
    const expected = 3.5 * 156.5 / 1.07;

    // This is the comparison for the unit test 
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724);
})

test("One Yen should be a tiny amount of pounds ()", ()=>{

    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(20000);

    const expected = 20000 * 0.87 / 156.5;

    expect(fromYenToPound(20000)).toBe(111.18210862619809);
})