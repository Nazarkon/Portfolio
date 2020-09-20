import React from 'react'
import style from './Form.module.sass'
import { Form, Input, Button  } from 'antd'
import 'antd/dist/antd.css'

function FormContainer({addElement}){
    function onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
      };

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 10,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 10,
        },
      };

    return(
        <div className={style.container} id="input">
            <h2 className={style.title}>Here you can add words that you know!</h2>
            <div className={style.inputWrapper}>
            <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={addElement}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Enter English word"
        name="eng"
        rules={[
          {
            required: true,
            message: 'Please input your word!',
          },
        ]}
      >
          <Input />
      </Form.Item>

      <Form.Item
        label="Enter Ukraine transalte"
        name="rus"
        rules={[
          {
            required: true,
            message: 'Please input your word!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        
            </div>
        </div>
    )
}

export default FormContainer