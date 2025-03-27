

import commelectron from './commelectron';
import msgtypeenum from '../common/msgtype'


class Api {
    pingPong(option, callback) {
        
        commelectron.sendMsg(msgtypeenum.PING_PONG, option, callback);
    }
    //registerMessageHandle: register a callback method to handle the specified message which is sended by main process
    //msgtype:message type
    //callback: the process for message
    registerMessageHandle(msgtype,callback){
        commelectron.registerMsgHandle(msgtype,callback);
    }
    getOrder(option, callback) {
        commelectron.sendMsg(msgtypeenum.GET_ORDERS, option, callback);
    }
}

const api = new Api();
export default api;