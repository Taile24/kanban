import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, SignUp } from '../screens'



const AuthRouters = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">

                </div>
                <div className="col content-center">
                    <BrowserRouter>
                        <Routes>
                            <Route path='/log-in' element={<Login />}></Route>
                            <Route path='/sign-up' element={<SignUp />}></Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>

    )
}

export default AuthRouters
