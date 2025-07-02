import { DatePicker, Form, Input, Modal } from 'antd';
import React from 'react'

function AddIncome({ isIncomeModalVisible, handleIncomeCancel, onFinish }) {
const [form] = Form.useForm();
  return (
    <Modal
      style = {{ fontWeight: 600}}
      title = "Add Income"
      visible = {isIncomeModalVisible}
      onCancel = {handleIncomeCancel}
      footer = {null}
    >
      <Form
        form = {form}
        layout = "vertical"
        onFinish= {(value) =>{
          onFinish(value, "income");
          form.restFields();
        }}
      />
      <Form.Item
        style={{ fontWeight: 600 }}
        label = "Name"
        name = "name"
        rules = {[
          {
            required: true,
            message: "Please input the name of the transaction",
          },
        ]}
      >
        <Input type = "text" className = "custom-input" />
      </Form.Item>
      <Form.Item
        style={{ fontWeight: 600 }}
        label = "Amount"
        name = "amount"
        rules = {[
          {
            required: true,
            message: "Please enter the amount",
          },
        ]}
      >
        <Input type = "number" className = "custom-input" />
      </Form.Item>
      <Form.Item
        style={{ fontWeight: 600 }}
        label = "Date"
        name = "date"
        rules = {[
          {
            required: true,
            message: "Please enter the date of transaction",
          },
        ]}
      >
        <DatePicker format = "YYYY-MM-DD" className = "custom-input" />
      </Form.Item>
    </Modal>  
  )
}

export default AddIncome