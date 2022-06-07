let maximun = parseInt(prompt("Enter a Maximun Number!"));
while  (!maximun) {
    maximun = parseInt(prompt("Enter a valid number!"));
}


const targetNum = Math.floor(Math.random()* maximun) +1;
console.log(targetNum)

let guess = parseInt(prompt("Enter your first guess!"));
let attempts =1;

while (guess !== targetNum ) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! enter a new guess:"));
    } else {
        guess = parseInt(prompt("Too Low! enter a new guess:"));
    }


}

console.log("You got it in "+attempts+" attempts");

funtion 