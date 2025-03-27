

const ipcRenderer = window.electron.ipcRenderer;//

class CommElectron {
    sendMsg(msgtype, data, callback) {
        ipcRenderer.once(msgtype + '-reply', (event,replymsg)=>{
            callback(replymsg.error,replymsg.result);
        });
        console.log('msgtype: ', msgtype, 'data: ', data);
        ipcRenderer.send(msgtype, data);
    }
    registerMsgHandle(msgtype,callback){
        ipcRenderer.on(msgtype, callback);
    }
}

let commelectron = new CommElectron();

export default commelectron;