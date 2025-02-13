import React, { useEffect, useState } from 'react'
import AuthRouters from './AuthRouters'
import MainRouters from './MainRouters'
import { useDispatch, useSelector } from 'react-redux';
import { localDataName } from '../constants/appInfor';
import { Spin } from 'antd';
import { addAuth, auSelector, AuthState } from '../firebase/redux/reducers/AuthReducer';

const Routers = () => {
  const [isLoading, setisLoading] = useState(false);
  const auth: AuthState = useSelector(auSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    getData()
  }, []);
  const getData = async () => {
    const res = localStorage.getItem(localDataName.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  }
  return isLoading ? < Spin /> : !auth.token ? <AuthRouters /> : <MainRouters />;

};

export default Routers;
