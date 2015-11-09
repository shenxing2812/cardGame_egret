/**
 *
 * @author
 *
 */
var MyEventDispatcher = (function (_super) {
    __extends(MyEventDispatcher, _super);
    function MyEventDispatcher() {
        _super.call(this);
    }
    var d = __define,c=MyEventDispatcher;p=c.prototype;
    MyEventDispatcher.getInstance = function () {
        if (!this._instance) {
            this._instance = new MyEventDispatcher();
        }
        return this._instance;
    };
    return MyEventDispatcher;
})(egret.EventDispatcher);
egret.registerClass(MyEventDispatcher,"MyEventDispatcher");
