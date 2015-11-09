/**
 *
 * @author 
 *
 */
class Game extends egret.Sprite{
    
    private roomWnd: RoomListWnd;
    
	public constructor(width,height) {
        super();
        
        this.graphics.beginFill(0xe74c3c);
        this.graphics.drawRect(0,0,width,height);
        this.graphics.endFill();
        
        this.roomWnd = new RoomListWnd(width,height);
        this.addChild(this.roomWnd);
        
	}
	
	/**
	 * 注册事件
	 */ 
	protected addEventListers():void{
	    
	}
}
