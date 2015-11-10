/**
 *
 * @author
 *
 */
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(width, height) {
        _super.call(this);
        this.graphics.beginFill(0xe74c3c);
        this.graphics.drawRect(0, 0, width, height);
        this.graphics.endFill();
        this.roomWnd = new RoomListWnd(width, height);
        this.addChild(this.roomWnd);
        this.addEventListers();
    }
    var d = __define,c=Game;p=c.prototype;
    /**
     * 注册事件
     */
    p.addEventListers = function () {
        MyEventDispatcher.getInstance().addEventListener(RoomEvent.ENTER_ROOM, this.onEnterRoom, this);
    };
    //进入房间，创建玩家视图
    p.onEnterRoom = function () {
        this.removeChild(this.roomWnd);
        var w = GameManager.getInstance().gameConfig.stage_width;
        var h = GameManager.getInstance().gameConfig.stage_height;
        var len = 5;
        for (var i = 0; i < len; i++) {
            var view = new PlayerView();
            view.x = w / 2 + (w / 2 - 100) * Math.sin(Math.PI * 2 * i / len);
            view.y = h / 2 + (h / 2 - 160) * Math.cos(Math.PI * 2 * i / len);
            this.addChild(view);
        }
    };
    return Game;
})(egret.Sprite);
egret.registerClass(Game,"Game");
