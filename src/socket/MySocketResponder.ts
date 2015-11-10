/**
 *
 * @author 
 * 解析服务端返回的数据数据
 *
 */
class MySocketResponder {
	public constructor() {
    	
	}
	
	public parse(str:string):void{
        var object = JSON.parse(str);
        var cmdId: string = object.cmdId;
        console.log("cmdId:"+object.cmdId);
        if(cmdId == CMD_REP_IDS.CMD_LOGIN_R){
            //登录返回
            var loginEvent: LoginEvent = new LoginEvent(LoginEvent.LOGIN_SUCCESS);
            loginEvent.msg = "登录成功";
            MyEventDispatcher.getInstance().dispatchEvent(loginEvent);
        } else if(cmdId == CMD_REP_IDS.CMD_GET_ROOM_LIST_R) {
            //获取房间列表返回
            var roomEvent: RoomEvent = new RoomEvent(RoomEvent.GET_ROOM_LIST);
            MyEventDispatcher.getInstance().dispatchEvent(roomEvent);
        } else if(cmdId == CMD_REP_IDS.CMD_ENTER_ROOM_R) {
            //获取房间列表返回
            var roomEvent: RoomEvent = new RoomEvent(RoomEvent.ENTER_ROOM);
            MyEventDispatcher.getInstance().dispatchEvent(roomEvent);
        }
	}
}
