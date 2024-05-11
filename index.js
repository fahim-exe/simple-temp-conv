const userInput = document.getElementById("userInput");

const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;




function convert(){
    if(toFarenheit.checked){
        temp = Number(userInput.value);
        temp = ((temp*9)/5)+32;
        result.textContent = `${temp.toFixed(2)} ° C`;
    }

    else if(toCelcius.checked){
        temp = Number(userInput.value);
        temp = (((temp-32)/9)*5);
        result.textContent = `${temp.toFixed(2)} ° F`;

    }

    else{
        result.textContent = userInput;
    }

}