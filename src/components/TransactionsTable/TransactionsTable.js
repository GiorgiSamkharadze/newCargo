import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import "./TransactionsTable.css"
import useRequest from "../../hooks/useRequest";
import GetTransactionsRequest from "../../requests/GetTransactionsRequest";

function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);
    const [ getTransactions ] = useRequest(GetTransactionsRequest);
    useEffect(() => {
        getTransactions({filter_col: 'PAYMENT_STATUS', filter_value: 'PAID'}).then(({data}) => {
            setTransactions(data.payments);
        }).catch((e) => {

        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <h1>Transactions</h1>
            <Table responsive striped bordered hover className={"items-table"}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Invoice Id</th>
                    <th>Amount/Currency</th>
                    <th>Payment method</th>
                    <th>Paid at</th>
                    <th>Payment information</th>
                </tr>
                </thead>
                <tbody>

                {transactions.map((transaction) => {
                    // Prepare meta data
                    let metaData = [];
                    for(const key of Object.keys(transaction.metadata)){
                        const updatedKey = key.replaceAll("_", " ");
                        metaData.push({key: updatedKey, value: transaction.metadata[key]});
                    }
                    return (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.invoice_id}</td>
                            <td>{transaction.amount} {transaction.currency_code}</td>
                            <td>{transaction.payment_method}</td>
                            <td>{transaction.created_at}</td>
                            <td>{metaData.map((data,i) => {
                                return <span key={i}><span><b>{data.key}:</b></span>&nbsp;{data.value}<br/> </span>
                            })}</td>
                        </tr>
                    );
                })}

                </tbody>
            </Table>
        </>
    );
}

export default TransactionsTable;
