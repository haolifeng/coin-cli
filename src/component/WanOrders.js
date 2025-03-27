import React from 'react';
import { observer} from "mobx-react-lite";
import OrderTables from "./OrderTables";
import {useStores} from "../use-stores";
const WanOrders = observer(()=>{
    const { myOrderStore} = useStores();
    return (
            <OrderTables orders={myOrderStore.wanOrder}/>
    );
});

export default WanOrders;