import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd'

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './compunents/SocialLogin';
import { wait } from '@testing-library/user-event/dist/utils';
import handleAPI from '../../api/hadleApi';
import { log } from 'console';



const { Title, Paragraph, Text } = Typography
const Login = () => {
    const [isLoading, setisLoading] = useState(false);
    const [isRemember, setisRemember] = useState(false)
    const [form] = Form.useForm();
    const handleLogin = async (valuse: { email: String, password: String }) => {
        console.log(valuse)
        try {
            const res = await handleAPI('/auth/rigister', valuse, 'post');
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Card >
            <div className='text-center'>
                <img className='mb-3' src={"https://firebasestorage.googleapis.com/v0/b/kanban-d7ffd.appspot.com/o/Group%201122.png?alt=media&token=ee43e68d-9ff6-4545-a4a7-8abad2aaeef6"} alt="" style={{ width: 48, height: 48, }} />
                <Title level={2} >
                    Log in to your account
                </Title>
                <Paragraph className='text-center' type='secondary'>
                    Welcome back! Please enter your details.
                </Paragraph>
            </div>
            <Form
                layout='vertical'
                form={form}
                onFinish={handleLogin}
                disabled={isLoading}
                size='large' >
                <Form.Item name={'email'} label='Email' rules={[
                    {
                        required: true,
                        message: 'Please center you email !!!'
                    }
                ]}>
                    <Input allowClear placeholder='Enter your email' maxLength={100} type='email'></Input>

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


            <div className="row">
                <div className="col" style={{ width: 80, alignItems: 'center' }} >
                    <Checkbox checked={isRemember} onChange={(val) => setisRemember(val.target.checked)}>Remember for 30 days</Checkbox>
                </div>
                <div className="col text-right">
                    <Link to={'/'}>Forget password</Link >
                </div>
            </div>
            <div className='mt-4 mb-3' onClick={() => form.submit()}>
                <Button type='primary' style={{
                    width: '100%',

                }}
                    size='large'>Sign in

                </Button>
            </div>
            <SocialLogin />
            <div className='mt-3 text-center'>
                <Space>
                    <Text type='secondary'>Don’t have an account?</Text>
                    <Link to={'/sign-up'}>Sign up</Link>
                </Space>
            </div>


        </Card >
    )
}

export default Login
