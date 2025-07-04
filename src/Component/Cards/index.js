import React from 'react'
import './styles.css';
import { Card, Row } from 'antd';
import Button from '../Button';

function Cards({
    showExpenseModal,
    showIncomeModal,
    income,
    expense,
    totalBalance,
}) {
  return (
    <div>
        <Row className='my-row'>
            <Card className='my-card' title = "Current Balance">
                <div className='card-content'>
                    ₹{totalBalance}
                <Button text = "Reset Balance" />
                </div>
            </Card>
            <Card className='my-card' title = "Total Income">
                <div className='card-content'>
                    ₹{income}
                <Button text = "Add Income" onClick = {showIncomeModal} />
                </div>
            </Card>
            <Card className='my-card' title = "Total Expenses">
                <div className='card-content'>
                    ₹{expense}
                <Button text = "Add Expense" onClick = {showExpenseModal} />
                </div>
            </Card>
        </Row>
    </div>
  )
}

export default Cards