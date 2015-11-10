/**
 *
 * @author
 *
 */
var EnterRoomCmd = (function (_super) {
    __extends(EnterRoomCmd, _super);
    function EnterRoomCmd(roomId) {
        _super.call(this);
        this.cmdId = CMD_IDS.CMD_ENTER_ROOM;
        this.roomId = roomId;
    }
    var d = __define,c=EnterRoomCmd;p=c.prototype;
    p.parseCmd = function () {
        return JSON.stringify({ cmdId: this.cmdId, roomId: this.roomId });
    };
    return EnterRoomCmd;
})(BaseCmd);
egret.registerClass(EnterRoomCmd,"EnterRoomCmd");
