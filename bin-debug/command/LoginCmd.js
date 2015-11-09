/**
 *
 * @author
 *
 */
var LoginCmd = (function (_super) {
    __extends(LoginCmd, _super);
    function LoginCmd(accountName, pwd) {
        _super.call(this);
        this.cmdId = CMD_IDS.CMD_LOGIN;
        this.accountName = accountName;
        this.pwd = pwd;
    }
    var d = __define,c=LoginCmd;p=c.prototype;
    p.parseCmd = function () {
        return JSON.stringify({ cmdId: this.cmdId, accountName: this.accountName, pwd: this.pwd });
    };
    return LoginCmd;
})(BaseCmd);
egret.registerClass(LoginCmd,"LoginCmd");
