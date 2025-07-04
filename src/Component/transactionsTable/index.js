import { Radio, Select, Table } from 'antd';
import { Option } from 'antd/es/mentions';
import searchImg from "../Image/search.svg";
import { useState } from 'react';
import './styles.css';
import Button from '../Button';
import exportCsv from '../Functions/exportCsv';
import importFromCsv from '../Functions/importFromCsv';

function TransactionTable({ transactions }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortKey, setSortKey] = useState("");
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  let filteredTransactions = transactions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    item.type.includes(typeFilter)
  );

  let sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortKey === "date"){
      return new Date(a.date) - new Date(b.date);
    } else if (sortKey === "amount") {
      return a.amount - b.amount;
    } else {
      return 0;
    }
  });

  return (
    <>
    <div className="main">
        <div className="searching">
        <div className="input-flex">
          <img className="search-icon" src = {searchImg} alt=''/>
          <input
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder= "Search By Name"
          />
        </div>
        <Select
        className="select-input"
        onChange={(value) => setTypeFilter(value)}
        value = {typeFilter}
        placeholder = "Filter"
        allowClear
        >
          <Option value = "">All</Option>
          <Option value = "income">income</Option>
          <Option value = "expense">expense</Option>
        </Select>
      </div>
      <div className="my-table">
        <div className = "sorting">
          <div className="table-title">My Transactions</div>
          <Radio.Group
                className="input-radio"
                onChange = {(e) => setSortKey(e.target.value)}
                value = {sortKey}
            >
                <Radio.Button value = "">No Sort</Radio.Button>
                <Radio.Button value = "date">Date</Radio.Button>
                <Radio.Button value = "amount">Amount</Radio.Button>
            </Radio.Group>
          <div className="file">
            <Button text = "Export To CSV" onClick={() => exportCsv({ transactions })} />
            {/* <label for = "file-csv" className="btn">Import To CSV</label>
            <input
              onChange={importFromCsv}
              id="file-csv"
              type="file" 
              accept='.csv'
              required
              style={{ display: 'none' }}
            /> */}
          </div>
        </div>
      <Table dataSource={sortedTransactions} columns={columns} />
      </div>
      </div>
    </>
  )
}

export default TransactionTable