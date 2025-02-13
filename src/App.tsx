import React from 'react';
import './App.css';
import Routers from './routers/Routers';
import { ConfigProvider, message } from 'antd';
import { Provider } from 'react-redux';
import HomeScreens from './screens/HomeScreens';
import store from './firebase/redux/store';

message.config({
  top: 30,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: 'my-message',
});



function App() {
  return (
    <ConfigProvider theme={{
      token: {
        colorTextHeading: '#1570EF',
      },
      components: {}
    }}
    >
      <Provider store={store}>

        <Routers />;
      </Provider>
    </ConfigProvider>
  );


}

export default App;
