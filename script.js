const setBudgetButton = document.getElementById("total-budget-button");
const totalBudget = document.getElementById("total-budget");

const addExpenseButton = document.getElementById("expense-button");
const nameOfItem = document.getElementById("expense-item");
const expenseAmountOfItem = document.getElementById("expense-amount");
const remainingBalance = document.getElementById("remaining-balance");

setBudgetButton.addEventListener('click', function() {
    
    const tempBudgetAmount = Number(totalBudget.value);
    
    if (isNaN(tempBudgetAmount) || tempBudgetAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
});

addExpenseButton.addEventListener('click', function() {
    
    const tempAmountOfItem = Number(expenseAmountOfItem.value);
    const tempNameOfItem = nameOfItem.value;
    
    if (isNaN(tempAmountOfItem) || tempAmountOfItem <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (tempNameOfItem === "") {
        alert("Please key in name of item.")
    }
});
