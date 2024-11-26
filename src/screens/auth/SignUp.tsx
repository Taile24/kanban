import { Button, Card, Checkbox, Form, Input, message, Space, Typography } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './compunents/SocialLogin';
import { error } from 'console';
import handleAPI from '../../api/hadleApi';


const { Title, Paragraph, Text } = Typography

const SignUp = () => {
    const [isLoading, setisLoading] = useState(false);
    const [Remember, setRemember] = useState(false);
    const [form] = Form.useForm();
    const handleLogin = async (valuse: { email: String, password: String }) => {

        const api = '/auth/rigister2';
        setisLoading(true);
        try {
            const res = await handleAPI(api, valuse, 'post');
            console.log(res);

        } catch (error: any) {
            message.error(error.message)
            console.log(error);
        } finally {
            setisLoading(false);
        }
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
                    },
                    () => ({
                        validator: (_, value) => {
                            if (value.length < 6) {
                                return Promise.reject(
                                    new Error(" Mật khẩu phải chứa ít nhất 6 ký tự")
                                )
                            } else {
                                return Promise.resolve();
                            }

                        },
                    })



                ]}>
                    <Input.Password placeholder='Enter your password' maxLength={100} type='Password'></Input.Password>

                </Form.Item>

            </Form >


            {/* <div className="row">
                <div className="col" style={{ width: 80, alignItems: 'center' }} >
                    <Checkbox checked={isRemember} onChange={(val) => setisRemember(val.target.checked)}>Remember for 30 days</Checkbox>
                </div>
                <div className="col text-right">
                    <Link to={'/'}>Forget password</Link >
                </div>
            </div> */}
            <div className='mt-5 mb-3' >
                <Button
                    loading={isLoading}
                    onClick={() => form.submit()}
                    type='primary' style={{
                        width: '100%',

                    }}
                    size='large'>
                    sign up

                </Button>
            </div >
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
