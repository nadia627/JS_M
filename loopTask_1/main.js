/* 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…) */

/* for (let num = 1; num < 100; num++) {
    if (num % 2 !== 0){
     console.log(num); 
    }
} */

/* Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line. */

/* let num;   
 let result2 = 0;
 for (num = 0; num < 100; num += 2) {
    result2 += `${[num + 2]}` + " " + `${[100-(num+2)]}`;
 } */
 /* console.log(result2); */
/*  let result = " ";
 for (num = 0; num < 100; num += 2){
    result += " " + num+2 + " ";
    result += " " + 100-(num+2) + " ";
 } */
 /* console.log(result); */
/*  Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.) */

/*  function speed() {
    let distance, time;
    while (distance != 0){
     distance = prompt("what is the distance?");
    
    if (distance>0) {
        time = prompt("How much is the time?");
        let averageSpeed = distance/time;
        console.log(averageSpeed);
    }
}
} */
/*  speed(); */

/* Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even. */

/* function evenNumber () {
    for (i = 0; i <= 20; i++) {
        let randNum = Number(prompt());
        if (randNum%2 == 0){
            return randNum;
        }
    }
    console.log(randNum);
} */
/* evenNumber (); */

/* Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers. */
/* 
let num2;
let sum = 0;
let count = 0;
while (num2 != 0) {
    num2 = prompt("Your number");
    sum += num2;
    count ++;
} */
/* console.log(sum/(count-1)); */

/* Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers. */
let randNum2;
let sum2 = 0;
let counter = 0;
let average;
/* for (i = 0; i <= 25; i++) {
    randNum2 = Number(prompt());
    average = parseInt(sum2 + randNum2)/i;
}
console.log(`numbers entered ${i}, average is ${average}`); */

/* do {
    let input = Number(prompt());
    sum2 += input;
    counter ++;
} while (counter !== 25); 
console.log(`numbers entered ${i}, average is ${average}`); */

/* Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers. */

/* let firstNum = Number(prompt("first number"));
let num3;
let counter3;
let confirmation;
let average2;
let sum = 0;
while (confirmation != "n") {
    confirmation = prompt("Do you want to continue giving numbers?(y/n)");
    num3 = Number(prompt("next num"));
    counter3++;
};
average2 = (sum + firstNum + num3)/counter3;
console.log(average2); */


/* Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave. */

function numbers() {
    let num4;
    let number5;
    let counter = Number(prompt("how many numbers user wants to give to the program?"));
    let smallestNum = 0;
    for (num4=0; num4 <= counter; num4++){
        number5 = prompt("Next number");
        if (num4 <= smallestNum){
            console.log("the smallest num is " + num4);
        }
    }
};
numbers();