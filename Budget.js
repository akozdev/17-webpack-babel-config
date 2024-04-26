/**
 * @typedef BudgetLine
 * @type {object}
 * @property {number} value
 * @property {string} description
 * @property {string|undefined} user
 * @property {string|undefined} flag
 */

/**
 * Initial budget data
 * @type {BudgetLine[]}
 */
const initialBudget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' }
];

/**
 * Getting the limit ofe the budget for a user
 * @param {string} userName
 * @return {number}
 */
function getBudgetLimit(userName) {
  const limits = {
    jonas: 1500,
    matilda: 100
  };
  return limits[userName.toLowerCase()] || 0;
}

/**
 * Is the budget line expense is too much depending on the limit getter
 * @param {function(string):number} limitGetter
 * @return {function(BudgetLine): boolean}
 */
function isTooMuch(limitGetter) {
  return (budgetLine) => -budgetLine.value > limitGetter(budgetLine.user);
}

/**
 * Add an expense to the budget
 * @param {BudgetLine[]} budget
 * @param {BudgetLine} budgetLine
 * @param {function(string):number} limitGetter
 * @return {BudgetLine[]} The new budget with the new line
 */
function addExpense(budget, budgetLine, limitGetter) {
  const completeBudgetLine = {
    ...budgetLine,
    user: budgetLine.user?.toLowerCase() || 'jonas',
    value: budgetLine.value < 0 ? budgetLine.value : -budgetLine.value
  };
  return isTooMuch(limitGetter)(completeBudgetLine) ? budget : [...budget, completeBudgetLine];
}

/**
 * Add a flag to big expenses
 * @param {BudgetLine[]} budget
 * @param {function(string):number} limitGetter
 * @return {BudgetLine[]} The new budget with the flag on big expenses
 */
function checkBigExpenses(budget, limitGetter) {
  return budget.map(budgetLine => isTooMuch(limitGetter)(budgetLine)
    ? { ...budgetLine, flag: 'limit' }
    : budgetLine
  );
}

/**
 * Generate a string with expenses which exceed the given limit
 * @param {BudgetLine[]} budget
 * @param limit
 * @return {string}
 */
function getBigExpensesString(budget, limit) {
  const limitGetter = () => limit;
  return budget
    .filter(isTooMuch(limitGetter))
    .map(expensiveLine => expensiveLine.description.slice(-2))
    .join(' / ');
}

/**
 * A copy of the initial budget
 * Outside the module, nobody could change the array (not deep)
 * @return {BudgetLine[]}
 */
function getInitialBudget() {
  return [...initialBudget];
}

/**
 * Public API
 */
export {
  getInitialBudget,
  addExpense,
  checkBigExpenses,
  getBigExpensesString,
  getBudgetLimit
};