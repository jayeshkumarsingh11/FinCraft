import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import calaculateBalance from "./calculateBalance";

async function addTransaction(
                                transaction,
                                user,
                                transactions,
                                setTransactions,
                                setIncome,
                                setExpense,
                                setTotalBalance,
                                many
                            ){
    
    try{
        const docRef = await addDoc(
            collection(db, `users/${user.uid}/transactions`),
            transaction
        );
        console.log("Transaction added with ID: ", docRef.id);

        if (!many) toast.success("Transaction added successfully!");

        let newArr = transactions;
        newArr.push(transaction);
        setTransactions(newArr);
        calaculateBalance(
                            transactions,
                            setIncome,
                            setExpense,
                            setTotalBalance
                        );

    } catch (e){
        console.error("Error adding transaction: ", e);
        if (!many) toast.error("Failed to add transaction. Please try again.");

    }
}


export default addTransaction;