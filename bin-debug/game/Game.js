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
    }
    var d = __define,c=Game;p=c.prototype;
    /**
     * 注册事件
     */
    p.addEventListers = function () {
    };
    return Game;
})(egret.Sprite);
egret.registerClass(Game,"Game");
