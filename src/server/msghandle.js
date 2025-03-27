const ipcMain = require('electron').ipcMain;
const serverapi = require('./server');


const msgtypeenum = require('../common/msgtype');

function registerMsgHandle(msgtype,handle,self){
    ipcMain.on(msgtype, (event, arg) => {

        handle.call(self,arg, (err, result) => {
            //console.log('in registerMsgHandle: ', result);
            event.sender.send(msgtype+'-reply', { error: err, result: result });
        })
    });
}

function msgHandle() {
    registerMsgHandle(msgtypeenum.PING_PONG, serverapi.ping_pong, serverapi);
    registerMsgHandle(msgtypeenum.GET_ORDERS,serverapi.get_order, serverapi);
}

function init(win) {
    msgHandle();
}

module.exports.init = init;

