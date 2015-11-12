/**
 *
 * @author 
 *
 */
class Game extends egret.Sprite{
    
    private roomWnd: RoomListWnd;
    private cardBgs: any[] = [];
    
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
            var view: PlayerView = new PlayerView(300,100);
     //       view.x = w / 2 + (w / 2 - 100) * Math.sin(Math.PI * 2 * i / len) ;
            view.y = i*110 ;
            this.addChild(view);
        }
        
        for(var i = 0;i < len;i++) {
            var cardBg: egret.Sprite = new egret.Sprite();
            cardBg.graphics.lineStyle(0x000000);
            cardBg.graphics.drawRect(0,0,154,228);
            cardBg.x = 310 + i * 163;
            cardBg.y = (this.height - cardBg.height) / 2;
            this.addChild(cardBg);
            this.cardBgs[i] = cardBg;
        }
        
        var button = new eui.Button();
        button.label = "发牌";
        button.x = 500;
        button.y = 10;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.MoveCard,this);
        
	}
	
    private MoveCard():void{
        
        var index: number = Math.floor(Math.random() * 5) ;
        var num: number = Math.floor(Math.random() * 5) ;
        
        console.log("index=" + index + " num=" + num);
        
        var card = new CardView(3,num+1);
        card.x = 200;
        card.y = index*100;
        this.addChild(card);
        var cardBg = this.cardBgs[index];
        egret.Tween.get(card).to({ x: cardBg.x+77,y: cardBg.y+114 },1000).call(function() { 
            card.tranceBack();
        });
            
    }
    
}
