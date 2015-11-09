/**
 *
 * @author
 *
 */
var Mysocket = (function (_super) {
    __extends(Mysocket, _super);
    function Mysocket() {
        _super.apply(this, arguments);
    }
    var d = __define,c=Mysocket;p=c.prototype;
    Mysocket.getInstance = function () {
        if (!this._instance) {
            this._instance = new Mysocket();
            this._instance.init();
        }
        return this._instance;
    };
    p.init = function () {
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //  this.webSocket.connect("echo.websocket.org",80);
        this.webSocket.connect("114.215.187.21", 9501);
    };
    p.onSocketOpen = function () {
        MyEventDispatcher.getInstance().dispatchEventWith(LoginEvent.SOCKET_STATE_CHANGED);
        //        var cmd = "Hello Egret WebSocket";
        console.log("连接成功");
        //        this.webSocket.writeUTF(cmd);
    };
    p.onSocketClose = function () {
        MyEventDispatcher.getInstance().dispatchEventWith(LoginEvent.SOCKET_STATE_CHANGED);
        console.log("onSocketClose");
    };
    p.onReceiveMessage = function (e) {
        var msg = this.webSocket.readUTF();
        console.log("收到数据：" + msg);
        if (!this.responder) {
            this.responder = new MySocketResponder();
        }
        this.responder.parse(msg);
    };
    p.onSocketError = function (e) {
        console.log("onSocketError：" + e.data);
    };
    p.isConnected = function () {
        return this.webSocket.connected;
    };
    p.sendCmdStr = function (cmd) {
        console.log("socket sendCmdStr" + cmd);
        this.webSocket.writeUTF(cmd);
    };
    return Mysocket;
})(egret.DisplayObject);
egret.registerClass(Mysocket,"Mysocket");
