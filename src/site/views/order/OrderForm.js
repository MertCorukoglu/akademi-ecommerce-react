import { Button, Input, Form } from 'antd'

import React from 'react'



function OrderForm() {


    const onFinish = () => {

    }
    return (


        <>
            <Form
      name="basic"
      onFinish={onFinish}
    >

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your category name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Checkout
        </Button>
      </Form.Item>

    </Form> 
        </>
    
    
    )
}

export default OrderForm
