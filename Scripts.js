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
        // console.log(cell1, cell2, cell3, cell4);
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
        // console.log(cell1, cell2, cell3, cell4);
    }
}


//Part 2!

//                                
let csvArray = str.split('\n').map(line => line.split(","));
// console.log(csvArray);

//Part 3
// What do we know
//      Transforming array into object keys
//what can we infer?

//      Loop through array[0] and try to make it lowercase??
let csvheaders = [];
let csvRow = csvArray[0];
let newArray = [];

for (let i = 0; i < csvRow.length; i++) {
  csvheaders.push(csvRow[i].toLowerCase());
}
//-------------------------------------->

//loop through the arrays into keys 
for (let i = 1; i < csvArray.length; i++) {
  let row = csvArray[i];
  let csvNewKeys = {};

  for (let j = 0; j < csvheaders.length; j++) {
    csvNewKeys[csvheaders[j]] = row[j];
  }

  newArray.push(csvNewKeys);
}

// console.log(newArray);


//Part 4
//Delete last sorted array
let lastDel = newArray.pop();
// console.log(newArray);



// add to array
let addObj = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
newArray.push(addObj);
console.log(newArray);

//Find a mean through a loop
//Go through araay
let csvAges = [];
let sum =0;
for (let p=0;p<newArray.length;p++) {
    csvAges.push(Number(newArray[p].age));
    sum += csvAges[p];
}
let basicAvg = sum/csvAges.length;
console.log(basicAvg);


//Part 5 
//I couldn't figure this out :(
//Convert to csv
let headers = Object.keys(newArray[0]);
let convertRow = [];

convertRow.push(headers.join(","));

for (let i = 0; i < str.length; i++) {
  let obj = str[i];
  let row = "";

  // Build the row one piece at a time
  for (let j = 0; j < headers.length; j++) {
    let key = headers[j];
    row += obj[key];

    // Add a comma *except* after the last value
    if (j < headers.length - 1) {
      row += ",";
    }
  }

  convertRow.push(row);
}

let csvTotalString = headers.join("\n");
console.log(csvTotalString);
