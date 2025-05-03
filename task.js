4.
let val1 = null;
    let val2 = undefined;
    let val3 = null;
    let val4 = val2;
    console.log(Object.is(val1, val2));//false
    console.log(Object.is(val1, val3));//true
    console.log(Object.is(val2, val4));//true
    console.log(Object.is(val3, val4));//false
    
//val1 null
//val2 undefined
//val3 null
//val4 undefined




    let text1 = "alpha";
    let text2 = text1;
    let text3 = text2;
    text2 = "beta";
    text3 = text1;
    console.log(Object.is(text1, text2));// false
    console.log(Object.is(text1, text3));// true
    console.log(Object.is(text2, text3));// false

    //text1 alpha
    //text2 beta
    //text3 alpha