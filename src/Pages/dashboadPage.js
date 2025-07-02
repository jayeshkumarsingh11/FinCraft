import React, { useState } from "react";
import Header from "../Component/Header";
import Cards from "../Component/Cards";
import { Modal } from "antd";

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
    }
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
            <Modal 
                style = {{ fontWeight: 600 }} 
                visible = {isIncomeModalVisible}
                onCancel = {handleIncomeCancel}
                footer = {null}
                
            >Income</Modal>
            <Modal
                style = {{ fontWeight: 600 }} 
                visible = {isExpenseModalVisible} 
                onCancel = {handleExpenseCancel}
                footer = {null}
            >Expense</Modal>
        </div>
    )
}

export default Dashboard;