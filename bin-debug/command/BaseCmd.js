/**
 *
 * @author
 *
 */
var BaseCmd = (function () {
    function BaseCmd() {
    }
    var d = __define,c=BaseCmd;p=c.prototype;
    p.sendCmd = function () {
        Mysocket.getInstance().sendCmdStr(this.parseCmd());
    };
    p.parseCmd = function () {
        return "{cmdId:" + this.cmdId + "}";
    };
    return BaseCmd;
})();
egret.registerClass(BaseCmd,"BaseCmd");
