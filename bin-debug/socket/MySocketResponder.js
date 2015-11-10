/**
 *
 * @author
 * 解析服务端返回的数据数据
 *
 */
var MySocketResponder = (function () {
    function MySocketResponder() {
    }
    var d = __define,c=MySocketResponder;p=c.prototype;
    p.parse = function (str) {
        var object = JSON.parse(str);
        var cmdId = object.cmdId;
        console.log("cmdId:" + object.cmdId);
        if (cmdId == CMD_REP_IDS.CMD_LOGIN_R) {
            //登录返回
            var loginEvent = new LoginEvent(LoginEvent.LOGIN_SUCCESS);
            loginEvent.msg = "登录成功";
            MyEventDispatcher.getInstance().dispatchEvent(loginEvent);
        }
        else if (cmdId == CMD_REP_IDS.CMD_GET_ROOM_LIST_R) {
            //获取房间列表返回
            var roomEvent = new RoomEvent(RoomEvent.GET_ROOM_LIST);
            MyEventDispatcher.getInstance().dispatchEvent(roomEvent);
        }
        else if (cmdId == CMD_REP_IDS.CMD_ENTER_ROOM_R) {
            //获取房间列表返回
            var roomEvent = new RoomEvent(RoomEvent.ENTER_ROOM);
            MyEventDispatcher.getInstance().dispatchEvent(roomEvent);
        }
    };
    return MySocketResponder;
})();
egret.registerClass(MySocketResponder,"MySocketResponder");
