const expenseTypeInput = document.getElementById("expense-type");
const expenseNameInput = document.getElementById("expense-name");
const expenseDateInput = document.getElementById("expense-date");
const expenseAmountInput = document.getElementById("expense-amount");
const addExpenseButton = document.getElementById("add-expense");
const expenseTable = document.getElementById("expense-table");
const expenseList = document.getElementById("expense-list");
const totalAmountCell = document.getElementById("total-amount");

const expenses = [];

function addExpenseToTable() {
  const expenseType = expenseTypeInput.value;
  const expenseName = expenseNameInput.value;
  const expenseDate = expenseDateInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);

  if (expenseType && expenseName && expenseDate && !isNaN(expenseAmount)) {
    const newRow = expenseList.insertRow();

    const typeCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const dateCell = newRow.insertCell(2);
    const amountCell = newRow.insertCell(3);

    typeCell.textContent = expenseType;
    nameCell.textContent = expenseName;
    dateCell.textContent = expenseDate;
    amountCell.textContent = expenseAmount.toFixed(2);

    expenses.push({
      type: expenseType,
      name: expenseName,
      date: expenseDate,
      amount: expenseAmount,
    });

    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    totalAmountCell.textContent = totalAmount.toFixed(2);

    expenseTypeInput.value = "";
    expenseNameInput.value = "";
    expenseDateInput.value = "";
    expenseAmountInput.value = "";
  }
}

// Add an event listener to the "Add Expense" button
addExpenseButton.addEventListener("click", addExpenseToTable);
