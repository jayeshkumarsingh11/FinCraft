import { unparse } from "papaparse";

function exportCsv({transactions}) {
    var csv = unparse({
        "fields": ["name", "type", "tag", "amount", "date"],
        data:transactions,
    });
    console.log(transactions);
    var blob = new Blob([csv], {type: "text/csv;charset=utf-8;"});
    var csvURL = window.URL.createObjectURL(blob);
    const tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'transactions.csv');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
}

export default exportCsv;