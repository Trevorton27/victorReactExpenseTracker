import React from 'react';
import { Button } from 'react-bootstrap';

const ExpenseRow = ({ expenses, deleteItem }) => {
  return expenses.map((expenseItem) => {
    return (
      <tr key={expenseItem.id}>
        <td>{expenseItem.date}</td>
        <td>$ {expenseItem.amount}</td>
        <td>{expenseItem.item}</td>
        <td>{expenseItem.location}</td>
        <td>
          <Button
            onClick={() => deleteItem(expenseItem.id)}
            type='submit'
            variant='danger'
          >
            delete
          </Button>
        </td>
      </tr>
    );
  });
};

export default ExpenseRow;
