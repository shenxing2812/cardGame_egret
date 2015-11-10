/**
 *
 * @author
 *
 */
var PlayerView = (function (_super) {
    __extends(PlayerView, _super);
    function PlayerView() {
        _super.call(this);
        this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
        this.skinName = "src/skin/PlayerViewSkin.exml";
    }
    var d = __define,c=PlayerView;p=c.prototype;
    p.onComplete = function () {
        this.img_head.source = "http://oss-static.detu.com/static/release-2.2.2/img/home-v2/logo1.png";
    };
    return PlayerView;
})(eui.Component);
egret.registerClass(PlayerView,"PlayerView");
