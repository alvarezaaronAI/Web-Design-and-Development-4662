let inputBox = document.getElementById('degrees');

inputBox.onkeyup = function () {
    let currentValue = this.value;
    let finalOutPut = 0;
    let finalStringVal = "";
    //Fer
    if (gridFahrenheit.checked === true) {
        finalOutPut = (currentValue - 32) * 5 / 9.0;
        finalStringVal = currentValue + "F° = " + finalOutPut + "C°"
    }
    //Cel
    if (gridCelsius.checked === true) {
        finalOutPut = (currentValue * (9 / 5.0)) + 32;
        finalStringVal = currentValue + "C° = " + finalOutPut + "F°"
    }

    //Print the final Value
    document.getElementById('outPutBox').innerHTML = finalStringVal;


    //Automatically convert as boxed is checked
    let checkedBox = document.getElementById('radioGroups')

    checkedBox.addEventListener('click', function () {
        //Fer
        if (gridFahrenheit.checked === true) {
            finalOutPut = (currentValue - 32) * 5 / 9.0;
            finalStringVal = currentValue + "F° = " + finalOutPut + "C°"
        }
        //Cel
        if (gridCelsius.checked === true) {
            finalOutPut = (currentValue * (9 / 5.0)) + 32;
            finalStringVal = currentValue + "C° = " + finalOutPut + "F°"
        }

        //Print the final Value
        document.getElementById('outPutBox').innerHTML = finalStringVal;

    });
}
function myFunction() {
    let currentVal = inputBox.value;
    if(currentVal === ""){
        alert("Please Enter A VALUE!")
    }
    if ((gridFahrenheit.checked === false) && (gridCelsius.checked === false)) {
       alert("Please Input a SCALE!");
    }
    
}