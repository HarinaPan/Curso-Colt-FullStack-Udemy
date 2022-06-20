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

function returnDay (numero) {
    if (numero===1) {
        console.log("lunes")
        return "Monday"
    } else if (numero===2) {
        return "Tuesday"
    } else if (numero===3) {
        return "Wednesday"
    } else if (numero===4) {
        return "Thursday"
    } else if (numero===5) {
        return "Friday"
    } else if (numero===6) {
        return "Saturday"
    } else if (numero===7) {
        return "Sunday"
    } else {
        console.log("null")
        return null;
    }
}

returnDay (1);

console.log ("fin")

console.log(Math.sqrt(9))

const square = function (numer) {
    return Math.sqrt(numer);
}


const square2 = {
    area: function (num) {
        return num*num;
    },
    perimeter: function (num) {
        return num*4;
    }
};


const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function () {
        this.eggCount+=1;
        return "EGG"
    }
}


// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function(x){
    return x.first;
});

const greet = (name) => {
    return `Hey ${name}!`;
}

const a = ['mark','stayces12345','q12356789','carrie']

function validUserNames(usuarios) {
    // your code here
   let usuariosFiltrados = usuarios.filter(function (usuarios){
        return usuarios.length<10;
    })
    return usuariosFiltrados;
  }