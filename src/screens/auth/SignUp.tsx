import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './compunents/SocialLogin';


const { Title, Paragraph, Text } = Typography

const SignUp = () => {
    const [isLoading, setisLoading] = useState(false);
    const [form] = Form.useForm();
    const handleLogin = (valuse: { email: String, password: String }) => {
        console.log(valuse)
    }

    return (
        <Card style={{ width: '70%', }}>
            <div>
                <Title level={2} className='text-center'>
                    Create in to your account
                </Title>
                <Paragraph className='text-center' type='secondary'>
                    Start your 30-day free trial.
                </Paragraph>
            </div>
            <Form
                layout='vertical'
                form={form}
                onFinish={handleLogin}
                disabled={isLoading}
                size='large' >
                <Form.Item name={'name'} label='Name' rules={
                    [
                        {
                            required: true,
                            message: 'Please center you name !!!'
                        }
                    ]
                }>
                    <Input placeholder='Enter your name' allowClear maxLength={100} type='name'></Input>

                </Form.Item>
                <Form.Item name={'email'} label='Email' rules={[
                    {
                        required: true,
                        message: 'Please center you email !!!'
                    }
                ]}>
                    <Input allowClear placeholder='Enter your mail' maxLength={100} type='email'></Input>

                </Form.Item>
                <Form.Item name={'Password'} label='Password' rules={[
                    {
                        required: true,
                        message: 'Please center you Password !!!'
                    }
                ]}>
                    <Input.Password placeholder='Enter your password' maxLength={100} type='Password'></Input.Password>

                </Form.Item>

            </Form>


            {/* <div className="row">
                <div className="col" style={{ width: 80, alignItems: 'center' }} >
                    <Checkbox checked={isRemember} onChange={(val) => setisRemember(val.target.checked)}>Remember for 30 days</Checkbox>
                </div>
                <div className="col text-right">
                    <Link to={'/'}>Forget password</Link >
                </div>
            </div> */}
            <div className='mt-4 mb-3' onClick={() => form.submit()}>
                <Button type='primary' style={{
                    width: '100%',

                }}
                    size='large'>Get started

                </Button>
            </div>
            <SocialLogin />
            <div className='mt-3 text-center'>
                <Space>
                    <Text type='secondary'>Already have an account?</Text>
                    <Link to={'/'}>Log in</Link>
                </Space>
            </div>


        </Card >
    )
}

export default SignUp
