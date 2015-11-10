/**
 *
 * @author
 *
 */
var GameManager = (function () {
    function GameManager() {
        this.gameConfig = new GameConfig();
        this.gameData = new GameData();
    }
    var d = __define,c=GameManager;p=c.prototype;
    GameManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new GameManager();
        }
        return this._instance;
    };
    return GameManager;
})();
egret.registerClass(GameManager,"GameManager");
