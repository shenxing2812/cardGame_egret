/**
 *
 * @author 
 *
 */
class CardView extends egret.Sprite{
    
    private  type:number;
    private  num:number;
    
    private isBackNow: Boolean = true;
    
    private img_back: egret.Bitmap;
    private sp_front: egret.Sprite;
    
	public constructor(type:number,num:number) {
        super();
        this.type = type;
        this.num = num;
        this.img_back = new egret.Bitmap();
        this.img_back.anchorOffsetX = 77;
        this.img_back.anchorOffsetY = 114;
        this.img_back.texture = RES.getRes("card_back_png");
        this.addChild(this.img_back);
        
        var animal_bitmap = new egret.Bitmap();
        animal_bitmap.texture = RES.getRes("animal1_png");
        this.sp_front = new egret.Sprite();
        this.sp_front.addChild(animal_bitmap);
        this.addChild(this.sp_front);
        
        this.sp_front.graphics.beginFill(0x000000);
        this.sp_front.graphics.drawRect(0,0,this.img_back.width,this.img_back.height);
        this.sp_front.graphics.endFill();
        
        this.sp_front.anchorOffsetX = this.img_back.anchorOffsetX;
        this.sp_front.anchorOffsetY = this.img_back.anchorOffsetY;
        
        animal_bitmap.x = (this.img_back.width - animal_bitmap.width)/2;
        animal_bitmap.y = (this.img_back.height - animal_bitmap.height) / 2;
        
        this.sp_front.visible = false;
	}
	
	public tranceBack():void{
        if(!this.isBackNow)
            return;
       
//        this.img_back.anchorOffsetX ＝ this.img_back.width / 2;
//        this.img_back.anchorOffsetY ＝ this.img_back.height / 2;
        var weakSelf = this;
        egret.Tween.get(this.img_back).to({ scaleX: 0 },500).call(function() { 
            weakSelf.img_back.visible = false;
            weakSelf.sp_front.scaleX = 0;
            weakSelf.sp_front.visible = true;
            weakSelf.isBackNow = true;
            egret.Tween.get(weakSelf.sp_front).to({ scaleX: 1 },500);   
         });
	}
}
