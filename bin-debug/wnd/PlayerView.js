/**
 *
 * @author
 *
 */
var PlayerView = (function (_super) {
    __extends(PlayerView, _super);
    function PlayerView(w, h) {
        _super.call(this);
        this.sp_front = new egret.Sprite();
        this.sp_front.graphics.lineStyle(0x000000);
        //     this.sp_front.graphics.beginFill(0xffffff);
        this.sp_front.graphics.drawRect(0, 0, w, h);
        //      this.sp_front.graphics.endFill();
        this.addChild(this.sp_front);
        this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
        this.skinName = "resource/skin/PlayerViewSkin.exml";
    }
    var d = __define,c=PlayerView;p=c.prototype;
    p.onComplete = function () {
        this.img_head.source = RES.getRes("animal" + 12 + "_png");
    };
    return PlayerView;
})(eui.Component);
egret.registerClass(PlayerView,"PlayerView");
