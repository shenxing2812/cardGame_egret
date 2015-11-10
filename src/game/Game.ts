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
        
        this.addEventListers();
	}
	
	/**
	 * 注册事件
	 */ 
	protected addEventListers():void{
        MyEventDispatcher.getInstance().addEventListener(RoomEvent.ENTER_ROOM,this.onEnterRoom,this);
	}
	
	//进入房间，创建玩家视图
	private onEnterRoom():void{
        this.removeChild(this.roomWnd);
        
        var w = GameManager.getInstance().gameConfig.stage_width;
        var h = GameManager.getInstance().gameConfig.stage_height;
        
        var len = 5;
        
        for(var i = 0;i < len;i++){
            var view: PlayerView = new PlayerView();
            view.x = w / 2 + (w / 2 - 100) * Math.sin(Math.PI * 2 * i / len) ;
            view.y = h / 2 + (h / 2 - 160) * Math.cos(Math.PI * 2 * i / len) ;
            this.addChild(view);
        }
	}
}
