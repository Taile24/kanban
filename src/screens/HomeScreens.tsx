import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import Login from './auth/Login';
import { removeAuth } from '../firebase/redux/reducers/AuthReducer';

const HomeScreens = () => {
  const dispasth = useDispatch();

  const logout = () => {
    dispasth(removeAuth({}))
  }
  return (
    <div>
      <Button onClick={logout}>Log out</Button>
    </div>
  )
}

export default HomeScreens
