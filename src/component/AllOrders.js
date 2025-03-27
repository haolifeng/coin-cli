import React from 'react';
import { observer} from "mobx-react-lite";
import OrderTables from "./OrderTables";
import {useStores} from "../use-stores";
const AllOrders = observer(()=>{
    const { myOrderStore} = useStores();
    return (
            <OrderTables orders={myOrderStore.orders}/>
    );
});

export default AllOrders;