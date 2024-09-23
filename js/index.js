// share function
function getMoneyByIdInputValue(id) {
    const addMoney = document.getElementById(id).value;
    return parseFloat(addMoney);
}

function getMoneyByIdTextValue(id) {
    const addAmount = document.getElementById(id).innerText;
    return parseFloat(addAmount);
}

function getRemoveElementById(id) {
    const removeChild = document.getElementById(id).classList.add('hidden');
}
function getAddElementById(id) {
    const addChild = document.getElementById(id).classList.remove('hidden');
}



// Donation button clicked
// Card-1
const currentDateTime = new Date();
document.getElementById('noakhali-btn').addEventListener('click', function () {
    const noakhliInput = getMoneyByIdInputValue('noakhali-input');
    const donateBalance = getMoneyByIdTextValue('donate-balance');
    const noakhliTotalDonateBalance = noakhliInput + donateBalance;

    document.getElementById('donate-balance').innerText = noakhliTotalDonateBalance;

    const myBalance = getMoneyByIdTextValue('my-balance');

    const currentBalance = myBalance - noakhliInput;
    document.getElementById('my-balance').innerText = currentBalance;
    

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-2 rounded-md border-2  px-20 py-5 space-y-5';

    const noakhaliTitle = document.getElementById('noakhali-title').innerText;
    console.log(noakhaliTitle);

    historyItem.innerHTML = `
         <p class="text-xl font-medium">${noakhliInput} Taka is ${noakhaliTitle}  </p>
         <p>Date: ${currentDateTime.toString()}</p>
          
        `
    const historyContainer = document.getElementById('history-item');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})


// Card-2
document.getElementById('feni-btn').addEventListener('click', function () {

    const feniInput = getMoneyByIdInputValue('feni-input');
    const feniDonateBalance = getMoneyByIdTextValue('feni-donate-balance');
    const feniTotalDonateBalance = feniInput + feniDonateBalance;

    document.getElementById('feni-donate-balance').innerText = feniTotalDonateBalance;

    const myBalance = getMoneyByIdTextValue('my-balance');
    const currentBalance = myBalance - feniInput;
    document.getElementById('my-balance').innerText = currentBalance;

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-2 rounded-md border-2  px-20 py-5 space-y-5';

    const feniTitle = document.getElementById('feni-title').innerText;
    console.log(feniTitle);

    historyItem.innerHTML = `
         <p class="text-xl font-medium">${feniInput} Taka is ${feniTitle}  </p>
         <p>Date: ${currentDateTime.toString()}</p>
          
        `
    const historyContainer = document.getElementById('history-item');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})

// Card-3
document.getElementById('quota-btn').addEventListener('click', function () {

    const quotaInput = getMoneyByIdInputValue('quota-input');
    const quotaDonateBalance = getMoneyByIdTextValue('quota-donate-balance');
    const quotaTotalDonateBalance = quotaInput + quotaDonateBalance;

    document.getElementById('quota-donate-balance').innerText = quotaTotalDonateBalance;

    const myBalance = getMoneyByIdTextValue('my-balance');

    const currentBalance = myBalance - quotaInput;
    document.getElementById('my-balance').innerText = currentBalance;

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-2 rounded-md border-2  px-20 py-5 space-y-5';

    const quotaTitle = document.getElementById('quota-title').innerText;
    console.log(quotaTitle);

    historyItem.innerHTML = `
         <p class="text-xl font-medium">${quotaInput} Taka is ${quotaTitle}  </p>
         <p>Date: ${currentDateTime.toString()}</p>
          
        `
    const historyContainer = document.getElementById('history-item');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})


// history button click functionality

const historyBtn = document.getElementById('history-tab');
const donateBtn = document.getElementById('donate-tab');

historyBtn.addEventListener('click', function () {
    historyBtn.classList.remove(
        'bg-secondary',
    );
    historyBtn.classList.add(
        'bg-primary', 'hover:bg-primary'
    );
    donateBtn.classList.remove(
        'bg-primary', 'hover:bg-primary'
    );
    donateBtn.classList.add(
        'bg-secondary', 'hover:secondary'
    );

    const mainSection = getRemoveElementById('main-section');

    const historyItem = getAddElementById('history-item');

})


// Donation button clicked

// .donateBtn.addEventListener('click', function(){

// })
