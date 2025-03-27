

import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './MainLayout';
import { observer } from 'mobx-react-lite'
import { useStores } from './use-stores';

import api from "./clientApi/api";



const App = observer(()=> {

  const { myOrderStore } = useStores();
/*
  useEffect(() => {
   api.getOrder("{}",(err, data) => {
      if (err) {
        console.log('err: ', err)
        throw err;
      }

      console.log(data);
      myOrderStore.updateOrders(data)
    })
  }, []);
*/
  return (
      <Router>
        <MainLayout  />
      </Router>
  );
});

export default App;
