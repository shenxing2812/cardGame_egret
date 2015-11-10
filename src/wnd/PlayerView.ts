/**
 *
 * @author 
 *
 */
class PlayerView extends eui.Component {

    private img_head: eui.Image;
    private lab_name: eui.Label;

    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
        this.skinName = "src/skin/PlayerViewSkin.exml";
    }

    private onComplete(): void {
        this.img_head.source = "http://oss-static.detu.com/static/release-2.2.2/img/home-v2/logo1.png";
    }
}
