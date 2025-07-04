function calaculateBalance(
                            transactions, 
                            setIncome,
                            setExpense,
                            setTotalBalance
                        ) {
    let totalIncome = 0;
    let totalExpense = 0;
    transactions.forEach((transaction) => {
        if (transaction.type === "income"){
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }
    });
    setIncome(totalIncome);
    setExpense(totalExpense);
    setTotalBalance(totalIncome - totalExpense);
}

export default calaculateBalance;