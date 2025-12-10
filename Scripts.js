let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let commas = 0;


for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (current == ",") {
        commas++;
    } else if (current == "\n") {
        console.log(cell1, cell2, cell3, cell4);
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';

        commas = 0;
    } else {
        if (commas == 0) {
            cell1 += current;
        } else if (commas == 1) {
            cell2 += current;
        } else if (commas == 3) {
            cell3 += current;
        } else {
            cell4 += current;
        }
    }

    if (i + 1 == str.length) {
        console.log(cell1, cell2, cell3, cell4);
    }
}


//Part 2!

//                                 I seen this from google please let me know if this isnt okay!
let csvArray = str.split('\n').map(line => line.split(","));
console.log(csvArray);

//Part 3

