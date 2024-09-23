// share function

function getMoneyValueById (id){
    const inputValue = document.getElementById(id).innerText;
    return inputValue;
}




// JS DOM
const money =getMoneyValueById('my-balance')();
console.log(money)