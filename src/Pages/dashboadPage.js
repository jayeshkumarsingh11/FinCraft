import React, { useState } from "react";
import Header from "../Component/Header";
import Cards from "../Component/Cards";
import { Modal } from "antd";
import AddExpense from "../Component/Modals/addExpense";
import AddIncome from "../Component/Modals/addIncome";
import onFinish from "../Component/onFinish";

function Dashboard() {
    const[isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
    const[isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);

    const showExpenseModal = () => {
        setIsExpenseModalVisible(true);
    };

    const showIncomeModal = () => {
        setIsIncomeModalVisible(true);
    };

    const handleExpenseCancel = () => {
        setIsExpenseModalVisible(false);
    };

    const handleIncomeCancel = () => {
        setIsIncomeModalVisible(false);
    };
    

    return (
        <div>
            <Header />
            <Cards
                showExpenseModal = {showExpenseModal}
                showIncomeModal = {showIncomeModal}
            />
            <AddExpense
                isExpenseModalVisible = {isExpenseModalVisible}
                handleExpenseCancel = {handleExpenseCancel}
                onFinish = {onFinish}
            />
            <AddIncome
                isIncomeModalVisible = {isIncomeModalVisible}
                handleIncomeCancel = {handleIncomeCancel}
                onFinish = {onFinish}
            />
        </div>
    )
}

export default Dashboard;