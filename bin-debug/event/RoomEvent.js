/**
 *
 * @author
 *
 */
var RoomEvent = (function (_super) {
    __extends(RoomEvent, _super);
    function RoomEvent(_type) {
        _super.call(this, _type);
    }
    var d = __define,c=RoomEvent;p=c.prototype;
    RoomEvent.GET_ROOM_LIST = "GET_ROOM_LIST";
    RoomEvent.ENTER_ROOM = "ENTER_ROOM";
    return RoomEvent;
})(egret.Event);
egret.registerClass(RoomEvent,"RoomEvent");
