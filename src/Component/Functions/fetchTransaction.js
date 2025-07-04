import { collection, getDocs, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase";

async function fecthTransations(
                                user,
                                setLoading,
                                setTransactions
                                ) {
    setLoading(true);
    if (user){
        const q = query(collection(db, `users/${user.uid}/transactions`));
        const querySnapshot = await getDocs(q);
        let transactionsArray = [];
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            transactionsArray.push(doc.data());
        });
        setTransactions(transactionsArray);
        console.log("Transactions fetched successfully!", transactionsArray);
        toast.success("Transactions fetched successfully!");
    }
    setLoading(false);
}

export default fecthTransations;