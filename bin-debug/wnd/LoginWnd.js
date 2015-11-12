/**
 *
 * @author
 *
 */
var LoginWnd = (function (_super) {
    __extends(LoginWnd, _super);
    function LoginWnd() {
        _super.call(this);
        this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
        this.skinName = "resource/skin/loginSkin.exml";
    }
    var d = __define,c=LoginWnd;p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        console.log("createChildren");
    };
    p.onComplete = function () {
        console.log("onComplete");
        this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    p.onButtonClick = function (e) {
        var accountName = this.txt_name.text;
        var pwd = this.txt_pwd.text;
        //     console.log("name=" + accountName + " pwd=" + pwd);
        var cmd = new LoginCmd(accountName, pwd);
        cmd.sendCmd();
    };
    return LoginWnd;
})(eui.Component);
egret.registerClass(LoginWnd,"LoginWnd");
