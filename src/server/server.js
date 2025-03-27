
class ServerApi {
    ping_pong(option, callback) {
        console.log('ping_pong : options: ', option)
        callback("no-error", 'in ServerApi pong');
    }
    get_order(option, callback) {
        console.log('get_order : options: ', option)


    }


    
}


let serverapi = new ServerApi();

module.exports = serverapi;