document.addEventListener('DOMContentLoaded', () => {
    // Initialize total budget, expenses, and balance
    let totalBudget = 0;
    let totalExpenses = 0;
  
    // Get DOM elements
    const totalBudgetInput = document.getElementById('total-budget');
    const totalBudgetButton = document.getElementById('total-budget-button');
    const expenseItemInput = document.getElementById('expense-item');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseButton = document.getElementById('expense-button');
    const totalBudgetOutput = document.getElementById('total-budget-output');
    const totalExpensesOutput = document.getElementById('total-expenses-output');
    const balanceOutput = document.getElementById('balance-output');
    const expensesTableBody = document.querySelector('.expenses-table tbody');
    const remainingBalanceFooter = document.querySelector('.expenses-table tfoot tr td');
  
    // Set budget
    totalBudgetButton.addEventListener('click', () => {
      const budgetValue = parseFloat(totalBudgetInput.value);
      if (isNaN(budgetValue) || budgetValue <= 0) {
        alert('Please enter a valid total budget amount.');
        return;
      }
      totalBudget = budgetValue;
      updateOutputs();
      totalBudgetInput.value = '';
    });
  
    // Add expense
    expenseButton.addEventListener('click', () => {
      const item = expenseItemInput.value.trim();
      const amount = parseFloat(expenseAmountInput.value);
      if (item === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
      }
      if (amount > totalBudget - totalExpenses) {
        alert('Expense amount exceeds the remaining budget.');
        return;
      }
      addExpense(item, amount);
      expenseItemInput.value = '';
      expenseAmountInput.value = '';
    });
  
    // Function to update the outputs
    function updateOutputs() {
      totalBudgetOutput.textContent = totalBudget.toFixed(2);
      totalExpensesOutput.textContent = totalExpenses.toFixed(2);
      const balance = totalBudget - totalExpenses;
      balanceOutput.textContent = balance.toFixed(2);
      remainingBalanceFooter.textContent = balance.toFixed(2);
    }
  
    // Function to add expense to the table
    function addExpense(item, amount) {
      totalExpenses += amount;
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <th scope="row">${item}</th>
        <td>${amount.toFixed(2)}</td>
      `;
      expensesTableBody.appendChild(newRow);
      updateOutputs();
    }
  
    // Initial update to set all values to zero
    updateOutputs();
  });
