import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import Cards from "../Component/Cards";
import { Modal } from "antd";
import AddExpense from "../Component/Modals/addExpense";
import AddIncome from "../Component/Modals/addIncome";
import useOnFinish from "../Component/Functions/onFinish";
import fecthTransations from "../Component/Functions/fetchTransaction";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import calaculateBalance from "../Component/Functions/calculateBalance";
import TransactionTable from "../Component/transactionsTable";
import addTransaction from "../Component/Functions/addTransaction";

function Dashboard() {
    const [user] = useAuthState(auth);
    const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
    const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);
    const onFinish = useOnFinish(
                                    transactions,
                                    setTransactions,
                                    setIncome,
                                    setExpense,
                                    setTotalBalance
                                );

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
    
    useEffect(() => {
        fecthTransations(
                            user,
                            setLoading,
                            setTransactions
                        );
    }, [user]);

    useEffect(() => {
        calaculateBalance(
                            transactions,
                            setIncome,
                            setExpense,
                            setTotalBalance
                        );
    }, [transactions]);

    return (
        <div>
            <Header />
        {
            loading ? (
                <div>Loading...</div>
            ) : (<>
                    <Cards
                        income = {income}
                        expense = {expense}
                        totalBalance = {totalBalance}  
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
                    <TransactionTable transactions={transactions} addTransaction = { addTransaction } fecthTransations = { fecthTransations }/>
                </>
                )
        }
        </div>
    )
}

export default Dashboard;