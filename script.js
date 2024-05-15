const setBudgetButton = document.getElementById("total-budget-button");
const totalBudget = document.getElementById("total-budget");

const addExpenseButton = document.getElementById("expense-button");
const nameOfItem = document.getElementById("expense-item");
const expenseAmountOfItem = document.getElementById("expense-amount");

const totalBudgetOutput = document.getElementById("total-budget-output");
const totalExpensesOutput = document.getElementById("total-expenses-output");
const totalBalanceOutput = document.getElementById("balance-output");

setBudgetButton.addEventListener('click', function() {
    
    const tempBudgetAmount = Number(totalBudget.value);
    
    if (isNaN(tempBudgetAmount) || tempBudgetAmount < 0) {
        alert("Please enter a valid amount.");
        return;
    }

    totalBudgetOutput.innerHTML = tempBudgetAmount;
    totalBalanceOutput.innerText = tempBudgetAmount - totalExpensesOutput.innerText;
    totalBudget.value = "";
});

addExpenseButton.addEventListener('click', function() {
    
    const tempAmountOfItem = Number(expenseAmountOfItem.value);
    const tempNameOfItem = nameOfItem.value;
    
    if (isNaN(tempAmountOfItem) || tempAmountOfItem < 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (tempNameOfItem === "") {
        alert("Please key in name of item.")
    }

    let expenditure = parseInt(expenseAmountOfItem.value);
    let sum = parseInt(totalExpensesOutput.innerText) + expenditure;

    totalExpensesOutput.innerText = sum;

    const remainingBalance = Number(totalBudgetOutput.innerText) - Number(totalExpensesOutput.innerText);
    totalBalanceOutput.innerText = remainingBalance;

    nameOfItem.value = "";
    expenseAmountOfItem.value = "";
});
