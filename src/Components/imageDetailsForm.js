import React, { Component } from 'react'
import { Avatar, Button, Form, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea';


const formItemLayout = {
    wrapperCol: {
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
      xl: { span: 24 },
    },
  };

export class ImageDetails extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.saveImage(values)
            this.props.form.resetFields()
          }
        });
      };

      

    render() {
        const { getFieldDecorator } = this.props.form;
        return <div>

            <Form onSubmit={this.handleSubmit} className="appForm">
          <div style={{ overflow: 'hidden', textAlign: 'center' }}>
            <p style={{ fontSize: 25 }}>Add Image Details</p>
          </div>

          <Form.Item label="Name" {...formItemLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Name is Required' }],
            })(
              <Input name="name" />
            )}
          </Form.Item>
          <Form.Item label="Description" {...formItemLayout}>
            {getFieldDecorator('desc', {
              rules: [{ required: true, message: 'Description is required' }],
            })(
              <TextArea rows={3} name="smsBody" />
            )}
            </Form.Item>

         

          <div style={{ overflow: 'hidden', textAlign: 'center' }}>
            <Button
              type="primary"
              className="buttonPrimary"
              htmlType="submit"
              style={{
                textAlign: 'center',
                width: '150px',
                margin: '10px 30px 20px 0',
              }}>
              Save
            </Button>
          </div>
        </Form>

        </div>
    }
}

const WrappedNormalForm = Form.create({ name: 'normal_login' })(ImageDetails);

export default WrappedNormalForm
