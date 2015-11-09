/**
 *
 * @author 
 *
 */
class Mysocket extends egret.DisplayObject{
    
    private static _instance : Mysocket;
    
    
    
    public static getInstance() : Mysocket{
        if(!this._instance){
            this._instance = new Mysocket();
            this._instance.init();
        }
        return this._instance;
    }
	
    private webSocket: egret.WebSocket;
    
    private responder: MySocketResponder;

    public init(): void {
        this.webSocket = new egret.WebSocket();

        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this);
        this.webSocket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketError,this);
        this.webSocket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this);
        
        
      //  this.webSocket.connect("echo.websocket.org",80);
        this.webSocket.connect("114.215.187.21",9501);
    }

    private onSocketOpen(): void {
        MyEventDispatcher.getInstance().dispatchEventWith(LoginEvent.SOCKET_STATE_CHANGED);
//        var cmd = "Hello Egret WebSocket";
         console.log("连接成功");
//        this.webSocket.writeUTF(cmd);
    }
    
    private onSocketClose(): void {
        MyEventDispatcher.getInstance().dispatchEventWith(LoginEvent.SOCKET_STATE_CHANGED);
        console.log("onSocketClose");
    }

    private onReceiveMessage(e: egret.Event): void {
        var msg = this.webSocket.readUTF();
        console.log("收到数据：" + msg);
        if(!this.responder){
            this.responder = new MySocketResponder();
        }
        this.responder.parse(msg);
    }
    
    private onSocketError(e: egret.IOErrorEvent): void {
        console.log("onSocketError：" + e.data);
    }
    
    public isConnected():Boolean{
        return this.webSocket.connected;
    }
    
    public sendCmdStr(cmd:string):void{
        console.log("socket sendCmdStr"+cmd);
        this.webSocket.writeUTF(cmd);
    }
}
