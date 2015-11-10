/**
 *
 * @author
 *
 */
var GetRoomListCmd = (function (_super) {
    __extends(GetRoomListCmd, _super);
    function GetRoomListCmd() {
        _super.call(this);
        this.cmdId = CMD_IDS.CMD_GET_ROOM_LIST;
    }
    var d = __define,c=GetRoomListCmd;p=c.prototype;
    return GetRoomListCmd;
})(BaseCmd);
egret.registerClass(GetRoomListCmd,"GetRoomListCmd");
