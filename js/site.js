//Get values from user
function getValues (){
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;
    //parse into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //validation
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
    //call fizzBuzz
    let theArray = fizzBuzz(fizzValue, buzzValue);
    //call displayResults
    displayResults(theArray);
    }
    else{alert('You must enter an integer');}
}
//Generate an array setting fizzbuzz values
function fizzBuzz(fizzValue, buzzValue) {
    let theArray = [];
    for (let i = 1; i <= 100; i++){
        if((i % fizzValue == 0) && (i % buzzValue == 0)) {theArray.push('FizzBuzz');}
        else if(i % fizzValue == 0) {theArray.push('Fizz');}
        else if(i % buzzValue == 0) {theArray.push('Buzz');}
        else {theArray.push(i);}
    }
    return theArray;
}
//Display Results to User
function displayResults(theArray) {
    //get table body element
    let tableBody = document.getElementById("resultsTable");
    //get the template row
    let templateRow = document.getElementById("fbTemplate");
    //clear table first
    tableBody.innerHTML = '';
    for (let i = 0; i < theArray.length; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);
        //grab just the td's and put into array
        let rowCols = tableRow.querySelectorAll('td');
        rowCols[0].classList.add(theArray[i]);
        rowCols[0].textContent = theArray[i];
        rowCols[1].classList.add(theArray[i+1]);
        rowCols[1].textContent = theArray[i+1];
        rowCols[2].classList.add(theArray[i+2]);
        rowCols[2].textContent = theArray[i+2];
        rowCols[3].classList.add(theArray[i+3]);
        rowCols[3].textContent = theArray[i+3];
        rowCols[4].classList.add(theArray[i+4]);
        rowCols[4].textContent = theArray[i+4];

        tableBody.appendChild(tableRow);
    }
}