/**
 *
 * @author
 *
 */
var RoomCell = (function (_super) {
    __extends(RoomCell, _super);
    function RoomCell() {
        _super.call(this);
        //自定义的 ItemRenderer
        this.touchChildren = true;
        this.lab_rname = new eui.Label();
        this.lab_rname.textColor = 0xfd0000;
        this.addChild(this.lab_rname);
        this.lab_rnum = new eui.Label();
        this.lab_rnum.x = 300;
        this.lab_rnum.textColor = 0xffff00;
        this.addChild(this.lab_rnum);
    }
    var d = __define,c=RoomCell;p=c.prototype;
    p.dataChanged = function () {
        //数据改变时，会自动调用 dataChanged 这个方法
        //显示数据中的 label 值
        this.lab_rname.text = this.data.roomName;
        this.lab_rnum.text = this.data.roomNum;
    };
    return RoomCell;
})(eui.ItemRenderer);
egret.registerClass(RoomCell,"RoomCell");
