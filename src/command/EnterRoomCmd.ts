/**
 *
 * @author 
 *
 */
class EnterRoomCmd extends BaseCmd {
    
    public roomId: string;
    
    public constructor(roomId:string) {
        super();
        this.cmdId = CMD_IDS.CMD_ENTER_ROOM;
        this.roomId = roomId;
    }
    
    protected parseCmd(): string {
        return JSON.stringify({ cmdId: this.cmdId,roomId: this.roomId });
    } 
}
