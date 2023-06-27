
function getExpense(sector) {
    //coverting income input value string to float
    let income = document.getElementById('income');
    let floatofIncome = parseFloat(income.value);
    //coverting balance string to float
    let balance = document.getElementById('remaining-balance');
    let floatofBalance = parseFloat(balance.innerText);
    floatofBalance = floatofIncome;
    //coverting expenses input value string to float
    let myExpense = document.getElementById(sector + '-expense');
    let convertingToFloat = parseFloat(myExpense.value);
    //converting expense string to float
    let totalExpense = document.getElementById('total-expense');
    let texttofloat = parseFloat(totalExpense.innerText);
    //adding expenses and showing remained balance
    if (convertingToFloat < 0 || floatofIncome < 0) {
        alert("please insert positive number");
    }
    if (isNaN(convertingToFloat, floatofIncome)) {
        alert("you cant insert any string or letter");
    }
    else {
        texttofloat = texttofloat + convertingToFloat;
        totalExpense.innerText = texttofloat;
        if (texttofloat > floatofIncome) {
            alert('expense is too much')
        }
        else {
            balance.innerText = floatofBalance - (totalExpense.innerText);
            myExpense.value = '';
        }
    }
}
function saving() {
    //coverting current balance into float
    let balance = document.getElementById('remaining-balance');
    let mynewBalance = parseFloat(balance.innerText);
    let income = document.getElementById('income');
    let mynewINCOME = parseFloat(income.value);
    //coverting save percentage value into string
    let save = document.getElementById('save-percent');
    let floatSave = parseFloat(save.value);
    if (floatSave < 0) {
        alert('please insert positive number')
    }
    if (isNaN(floatSave)) {
        alert('you cant insert any string or letter')
    }
    else {
        //set percent
        let devide = mynewINCOME * (floatSave / 100);
        if (devide > mynewBalance) {
            alert('you cant save')
        }
        else {
            let mySaving = document.getElementById('saving-amount');
            //showing saving percentage
            mySaving.innerText = devide;
            //remaining balance
            let remainingBalance = document.getElementById('remain-balance');
            remainingBalance.innerText = mynewBalance - devide;
        }
    }
}
//set calculate button
document.getElementById('calculate').addEventListener('click', function () {
    //calling function of food costing
    getExpense('food');
    //calling function of rental costing
    getExpense('rent');
    //calling function of cloth costing
    getExpense('clothing');
})
//set save button
document.getElementById('save-btn').addEventListener('click', function () {
    //calling saving funtion
    saving();
})