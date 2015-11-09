/**
 *
 * @author 
 *
 */
class BaseCmd {
    
    public cmdId : string;
    
    public sendCmd():void{
        Mysocket.getInstance().sendCmdStr(this.parseCmd());
    }
    
    protected parseCmd():string{
        return "{cmdId:"+this.cmdId+"}";
    }
    
	public constructor() {
	}
}
