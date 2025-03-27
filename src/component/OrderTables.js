import {Flex, Space, Table, Tag, Button, Modal} from 'antd';
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const {timestampFormat, formatDateSub, timestampSub, formatDateAdd,formatTimeToTimestamp,timestampAdd, TRADE_TIME_FORMAT} = require('../server/utils/time_fun');
const columns = [
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        render:(time)=>(timestampFormat(time))
    },
    {
        title:'OrderID',
        dataIndex: 'orderId',
        key: 'orderId',
    },
    {
        title:'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title:'Qty',
        dataIndex: 'qty',
        key: 'qty',
    },
    {
        title:'QuoteQty',
        dataIndex: 'quoteQty',
        key: 'quoteQty',
    },
    {
        title:'IsBuyer',
        dataIndex: 'isBuyer',
        key: 'isBuyer',
        render:(isBuyer) => (isBuyer?'Buy':'Sell')
    },
    {
        title:'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
    }

]
const OrderTables = ({ orders }) => {
    //console.log('orders:', orders);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [sum, setSum] = useState({qty:0, quoteQty:0});
    const [qty, setQty] = useState(0);
    const [quoteQty, setQuoteQty] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const statistics = () => {

        let selectOrders = orders.filter(order=> selectedRowKeys.includes(order.time));

        let sum = {
            qty: 0,quoteQty:0
        }
        selectOrders.forEach(order => {
            console.log(order.time, order.orderId, order.qty, order.price, order.quoteQty, order.isBuyer, order.symbol);
            sum.qty += Number(order.qty);
            sum.quoteQty += Number(order.quoteQty);
        })
        console.log(sum)
       // alert("the sum is: "+ JSON.stringify(sum));
        setQty(sum.qty);
        setQuoteQty(sum.quoteQty);
        showModal();
    };

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);

    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <Flex gap="middle" vertical>
            <Flex align="center" gap="middle">
                <Button type="primary" onClick={statistics} disabled={!hasSelected}>
                    statistics
                </Button>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
            </Flex>

            <Table rowKey={"time"} rowSelection={rowSelection} columns={columns} dataSource={orders}/>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>sum.qty: {qty}</p>
                    <p>sum.quoteQty: {quoteQty}</p>
            </Modal>

        </Flex>)
}

export default OrderTables;