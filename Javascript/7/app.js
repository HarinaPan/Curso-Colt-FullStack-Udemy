console.log ("funciona")

function capitalize (palabra) {
    // let a = palabra.toUpperCase()
    let a = palabra.slice(0,1).toUpperCase()
    console.log(a)
    let b = palabra[0].toUpperCase()
    console.log(b)
    let c = palabra.slice(1,palabra.length).toLowerCase()
    console.log(c)
    let d = a.concat(c)
    console.log(d)
    return d
}

capitalize ('huevAZO');

let a=0;

function sumArray (array) {
    for (let index = 0; index < array.length; index++) {
        a=a+array[index];
    }
    return a
}

sumArray([-10,-5,5,10]);
console.log(a);