import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, SignUp } from '../screens'
import { Typography } from 'antd'


const { Title } = Typography

const AuthRouters = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col d-none d-lg-block text-center" style={{ marginTop: '15%' }}>
                    <div className='mb-4' >
                        <img
                            style={{
                                width: 256,
                                objectFit: 'cover'

                            }}
                            src={"https://firebasestorage.googleapis.com/v0/b/kanban-d7ffd.appspot.com/o/Group%201122.png?alt=media&token=ee43e68d-9ff6-4545-a4a7-8abad2aaeef6"} alt="" />
                    </div>
                    <div>

                        <Title>KANBAN</Title>
                    </div>
                </div>
                <div className="col content-center">
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Login />}></Route>
                            <Route path='/sign-up' element={<SignUp />}></Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>

    )
}

export default AuthRouters
