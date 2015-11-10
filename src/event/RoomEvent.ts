/**
 *
 * @author 
 *
 */
class RoomEvent extends egret.Event {

    public static GET_ROOM_LIST: string = "GET_ROOM_LIST";
    public static ENTER_ROOM: string = "ENTER_ROOM";
    
    public datalist: any[];

    public constructor(_type: string) {
        super(_type);
    }
}
