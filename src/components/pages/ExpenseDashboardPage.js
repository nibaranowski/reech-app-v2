import React from 'react';
import ExpenseList from '../expense-dashboard-page/ExpenseList';
import ExpenseListFilters from '../expense-dashboard-page/ExpenseListFilters';
import ExpensesSummary from '../expense-dashboard-page/ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
