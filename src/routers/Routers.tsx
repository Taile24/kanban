import React from 'react'
import AuthRouters from './AuthRouters'
import MainRouters from './MainRouters'

const Routers = () => {
  return 1 < 2 ? <AuthRouters/> : <MainRouters/> ;
  
};

export default Routers;
