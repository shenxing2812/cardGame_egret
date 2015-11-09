/**
 *
 * @author
 *
 */
var LoginEvent = (function (_super) {
    __extends(LoginEvent, _super);
    function LoginEvent(_type) {
        _super.call(this, _type);
    }
    var d = __define,c=LoginEvent;p=c.prototype;
    LoginEvent.SOCKET_STATE_CHANGED = "SOCKET_STATE_CHANGED";
    LoginEvent.LOGIN_SUCCESS = "LOGIN_SUCCESS";
    LoginEvent.LOGIN_FAIL = "LOGIN_FAIL";
    return LoginEvent;
})(egret.Event);
egret.registerClass(LoginEvent,"LoginEvent");
