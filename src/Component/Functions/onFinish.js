import { useAuthState } from "react-firebase-hooks/auth";
import addTransaction from "./addTransaction";
import { auth } from "../../firebase";

export default function useOnFinish(
                                    transactions,
                                    setTransactions,
                                    setIncome,
                                    setExpense,
                                    setTotalBalance
                                    ) {
   const [user] = useAuthState(auth);

   const onFinish = (value, type) => {
      const newTransaction = {
      type: type,
      date: value.date.format("YYYY-MM-DD"),
      amount: parseFloat(value.amount),
      tag: value.tag,
      name: value.name,
      };
      
      addTransaction(
                     newTransaction, 
                     user,
                     transactions,
                     setTransactions,
                     setIncome,
                     setExpense,
                     setTotalBalance
                     );
   };
   return onFinish;
}