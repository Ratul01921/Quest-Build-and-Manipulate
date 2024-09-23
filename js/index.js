// share function
function getMoneyByIdInputValue (id){
    const addMoney = document.getElementById(id).value;
    return parseFloat(addMoney);
}

function getMoneyByIdTextValue (id){
    const addAmount = document.getElementById(id).innerText;
    return parseFloat(addAmount);
}



// JS DOM
// Card-1
document.getElementById('noakhali-btn').addEventListener('click', function(){
    const noakhliInput = getMoneyByIdInputValue('noakhali-input');
    const donateBalance = getMoneyByIdTextValue('donate-balance');
    const noakhliTotalDonateBalance = noakhliInput + donateBalance;

    document.getElementById('donate-balance').innerText = noakhliTotalDonateBalance;

    const myBalance = getMoneyByIdTextValue('my-balance');

    const currentBalance = myBalance - noakhliInput;
    document.getElementById('my-balance').innerText = currentBalance;
})

// Card-2
document.getElementById('feni-btn').addEventListener('click', function(){

    const feniInput = getMoneyByIdInputValue('feni-input');
    const feniDonateBalance = getMoneyByIdTextValue('feni-donate-balance');
    const feniTotalDonateBalance = feniInput + feniDonateBalance;

    document.getElementById('feni-donate-balance').innerText = feniTotalDonateBalance;

    const myBalance = getMoneyByIdTextValue('my-balance');
    const currentBalance = myBalance - feniInput;
    document.getElementById('my-balance').innerText = currentBalance;
})

// Card-3
document.getElementById('quota-btn').addEventListener('click', function(){

    const quotaInput = getMoneyByIdInputValue('quota-input');
    const quotaDonateBalance = getMoneyByIdTextValue('quota-donate-balance');
    const quotaTotalDonateBalance = quotaInput + quotaDonateBalance;

    document.getElementById('quota-donate-balance').innerText = quotaTotalDonateBalance;

    const myBalance = getMoneyByIdTextValue('my-balance');

    const currentBalance = myBalance - quotaInput;
    document.getElementById('my-balance').innerText = currentBalance;
})

