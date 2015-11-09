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
        if (cmdId == CMD_IDS.CMD_LOGIN) {
            var loginEvent = new LoginEvent(LoginEvent.LOGIN_SUCCESS);
            loginEvent.msg = "登录成功";
            MyEventDispatcher.getInstance().dispatchEvent(loginEvent);
        }
    };
    return MySocketResponder;
})();
egret.registerClass(MySocketResponder,"MySocketResponder");
