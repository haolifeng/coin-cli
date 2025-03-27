import { makeAutoObservable } from "mobx";

export class MyOrderStore {
    orders = [];
    constructor() {
        makeAutoObservable(this);
    }

    updateOrders(orders) {
        let that = this;
        if(orders.length > 0){
            orders.forEach(order => {
                that.addOrderExcludsive(order);
            })
        }
    }
    addOrderExcludsive(newOrders) {
        if(this.orders.findIndex(e=> e.orderId === newOrders.orderId) === -1){
            this.orders.push(newOrders);
        }else{
            console.warn('trying to add an already existed order');
        }
        //console.log("this.orders.length: ", this.orders.length);
    }
    updateOrder(order) {
        this.addOrderExcludsive(order);
    }
    emptyOrders(){
        this.orders.splice(0, this.orders.length);
    }
    getSymbolOrders(symbol) {
        return this.orders.filter((order)=>
            order.symbol === symbol
        );
    }

    get ethOrder() {
        let symbol="ETHUSDT";
        return this.getSymbolOrders(symbol);
    }
    get wanOrder() {
        let symbol="WANUSDT";
        return this.getSymbolOrders(symbol);
    }
    get xrpOrder() {
        let symbol="XRPUSDT";
        return this.getSymbolOrders(symbol);
    }
    get btcOrder() {
        let symbol="BTCUSDT";
        return this.getSymbolOrders(symbol);
    }
    get bnbOrder() {
        let symbol="BNBUSDT";
        return this.getSymbolOrders(symbol);
    }

    
}

