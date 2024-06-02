// 1.

const number_1 = 0;
let number_2 = 10;

while (number_1 < number_2) {
    console.log(number_2);
    number_2--;
}

const smile = ':)';
let smiles = '';
let i = 0;
do {
    smiles = smile + smiles;
    console.log(smiles);
    i++;
} while (i <= 5);