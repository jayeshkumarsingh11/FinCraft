// import { parse } from "papaparse";
// import { toast } from "react-toastify";
// import fecthTransations from "./fetchTransaction";
// import addTransaction from "./addTransaction";

// function importFromCsv(event){
//     event.preventDefault();
//     try{
//         parse(event.target.files[0],{
//             header: true,
//             complete: async function (results) {
//                 for (const transaction of results.data) {
//                     const newTransaction = {
//                         ...transaction,
//                         amount: parseInt(transaction.amount),
//                     };
//                     await addTransaction(newTransaction, true);
//                 }
//             },
//         });
//         toast.success("Transactions Imported Successfully");
//         fecthTransations();
//         event.target.value = null;
//     } catch (e) {
//         toast.error(e.message);
//     }
// }

// export default importFromCsv;