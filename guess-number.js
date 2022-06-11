// // gisslek1 GISSA TAL MELLAN 0-10 (kommentera ut den gisslek som ej används)

// let randomNumber = Math.random();
// randomNumber = randomNumber * 11;
// randomNumber = Math.floor(randomNumber);

// let firstName = prompt('ditt förnamn tack');
// let lastName = prompt('ditt efternamn tack');
// let guessedNumber = Number(prompt('gissa ett nummer mellan 0 - 10'));

// let maxGuesses = 4;
// let i = 1;
// while (guessedNumber !== randomNumber && i < maxGuesses) {
//     if (guessedNumber < randomNumber && guessedNumber <= 10 && guessedNumber > 0) {
//         alert(`käre ${firstName} ${lastName}. du gissade ${guessedNumber}. det är fel, rätt nummer är större än så`);
//     } else if (guessedNumber > randomNumber && guessedNumber <= 10 && guessedNumber > 0) {
//         alert(`käre ${firstName} ${lastName}.. du gissade ${guessedNumber}. det är fel, rätt nummer är mindre än så`);
//     } else if (guessedNumber > 9 || guessedNumber < 0) {
//         alert(`käre ${firstName} ${lastName}. du gissade ${guessedNumber}. instruktionerna var simpla, läs om gör rätt`);
//     }
//     i++;
//     guessedNumber = Number(prompt('gissa ett nummer mellan 0 - 10 igen'));
// }
// if (guessedNumber !== randomNumber && i >= maxGuesses) {
//     alert(`${firstName} ${lastName}.. du gissade för många gånger :( game ovah`);
// }
// if (guessedNumber === randomNumber) {
//     alert(`du gissade ${guessedNumber}. korrekt! gj ${firstName} ${lastName}`);
// }






// // gisslek2 GISSA TAL MELLAN 1 - (1-100) (kommentera ut den gisslek som ej används)


// let randomNumber = Math.random();
// randomNumber = randomNumber * 101;
// randomNumber = Math.floor(randomNumber);


// let correctNumber = randomNumber * Math.random();
// correctNumber = Math.floor(correctNumber);

// console.log(correctNumber);
// console.log(randomNumber);

// let firstName = prompt('ditt förnamn tack');
// let lastName = prompt('ditt efternamn tack');

// let guessedNumber = Number(prompt(`gissa ett tal mellan 1 och ${randomNumber}`));

// let maxGuesses;
// if (randomNumber < 11) {
//     maxGuesses = 4;
// } else if (randomNumber > 10 && randomNumber < 21) {
//     maxGuesses = 5;
// } else if (randomNumber > 20 && randomNumber < 51) {
//     maxGuesses = 6;
// } else if (randomNumber > 50 && randomNumber < 101) {
//     maxGuesses = 7;
// }

// let i = 1;
// while (guessedNumber !== correctNumber && i < maxGuesses) {
//     if (guessedNumber < correctNumber && guessedNumber < 101) {
//         alert(`käre ${firstName} ${lastName}. du gissade ${guessedNumber}. det är fel, rätt nummer är större än så`);
//     } else if (guessedNumber > correctNumber && guessedNumber < 101) {
//         alert(`käre ${firstName} ${lastName}.. du gissade ${guessedNumber}. det är fel, rätt nummer är mindre än så`);
//     } else if (guessedNumber > 100 || guessedNumber < 0) {
//         alert(`käre ${firstName} ${lastName}. du gissade ${guessedNumber}. instruktionerna var simpla, läs om gör rätt`);
//     }
//     i++;
//     guessedNumber = Number(prompt(`gissa ett nytt tal mellan 1 och ${randomNumber}`));
// }
// if (guessedNumber !== correctNumber && i >= maxGuesses) {
//     alert(`${firstName} ${lastName}.. du gissade för många gånger :( game ovah`);
// }
// if (guessedNumber === correctNumber) {
//     alert(`du gissade ${guessedNumber}. korrekt! gj ${firstName} ${lastName}`);
// }







// gisslek3 GISSA TAL MELLAN (1-100) - (1-100) (kommentera ut den gisslek som ej används)

let randomNumber = Math.random();
randomNumber = randomNumber * 101;
randomNumber = Math.floor(randomNumber);

let randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 101;
randomNumber2 = Math.floor(randomNumber2);

let smallNumber;
let bigNumber;
if (randomNumber2 < randomNumber) {
    smallNumber = randomNumber2;
    bigNumber = randomNumber;
} else {
    smallNumber = randomNumber;
    bigNumber = randomNumber2;
}

let firstName = prompt('ditt förnamn tack');
let lastName = prompt('ditt efternamn tack');
let guessedNumber = Number(prompt(`gissa ett tal mellan ${smallNumber} och ${bigNumber}`));

let maxGuesses;
let intervall = bigNumber - smallNumber;
if (intervall < 11) {
    maxGuesses = 4;
} else if (intervall > 10 && intervall < 21) {
    maxGuesses = 5;
} else if (intervall > 20 && intervall < 51) {
    maxGuesses = 6;
} else if (intervall > 50 && intervall < 101) {
    maxGuesses = 7;
}

let correctNumber = Math.floor(Math.random() * (bigNumber - smallNumber + 1) + smallNumber);

let i = 1;
while (guessedNumber !== correctNumber && i < maxGuesses) {
    if (guessedNumber < correctNumber && guessedNumber <= bigNumber && guessedNumber >= smallNumber) {
        alert(`käre ${firstName} ${lastName}. du gissade ${guessedNumber}. det är fel, rätt nummer är större än så`);
    } else if (guessedNumber > correctNumber && guessedNumber <= bigNumber && guessedNumber >= smallNumber) {
        alert(`käre ${firstName} ${lastName}.. du gissade ${guessedNumber}. det är fel, rätt nummer är mindre än så`);
    } else if (guessedNumber > bigNumber || guessedNumber < smallNumber) {
        alert(`käre ${firstName} ${lastName}. du gissade ${guessedNumber}. instruktionerna var simpla, läs om gör rätt`);
    }
    i++;
    guessedNumber = Number(prompt(`gissa ett tal mellan ${smallNumber} och ${bigNumber}`));
}
if (guessedNumber !== correctNumber && i >= maxGuesses) {
    alert(`${firstName} ${lastName}.. du gissade för många gånger :( game ovah`);
}
if (guessedNumber === correctNumber) {
    alert(`du gissade ${guessedNumber}. korrekt! gj ${firstName} ${lastName}`);
}