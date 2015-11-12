/**
 *
 * @author 
 *
 */
class PlayerView extends eui.Component {

    private img_head: eui.Image;
    private lab_name: eui.Label;
    
    private sp_front: egret.Sprite;

    public constructor(w,h) {
        super();
        this.sp_front = new egret.Sprite();
        this.sp_front.graphics.lineStyle(0x000000);
   //     this.sp_front.graphics.beginFill(0xffffff);
        this.sp_front.graphics.drawRect(0,0,w,h);
  //      this.sp_front.graphics.endFill();
        this.addChild(this.sp_front);
        
        this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
        this.skinName = "resource/skin/PlayerViewSkin.exml";
    }

    private onComplete(): void {
        this.img_head.source = RES.getRes("animal" + 12 + "_png");
    }
}
