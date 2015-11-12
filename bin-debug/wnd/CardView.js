/**
 *
 * @author
 *
 */
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView(type, num) {
        _super.call(this);
        this.itemSizeWidth = 50;
        this.isBackNow = true;
        this.type = type;
        this.num = num;
        this.img_back = new egret.Bitmap();
        this.img_back.anchorOffsetX = 77;
        this.img_back.anchorOffsetY = 114;
        this.img_back.texture = RES.getRes("card_back_png");
        this.addChild(this.img_back);
        this.sp_front = new egret.Sprite();
        this.addChild(this.sp_front);
        this.sp_front.graphics.lineStyle(0x000000);
        this.sp_front.graphics.beginFill(0xffffff);
        this.sp_front.graphics.drawRect(0, 0, this.img_back.width, this.img_back.height);
        this.sp_front.graphics.endFill();
        this.sp_front.anchorOffsetX = this.img_back.anchorOffsetX;
        this.sp_front.anchorOffsetY = this.img_back.anchorOffsetY;
        for (var i = 0; i < this.num; i++) {
            var animal_bitmap = new egret.Bitmap();
            animal_bitmap.texture = RES.getRes("animal" + (i + 1) + "_png");
            animal_bitmap.width = this.itemSizeWidth;
            animal_bitmap.height = this.itemSizeWidth;
            //            animal_bitmap.x = (this.img_back.width - animal_bitmap.width) / 2;
            //          //  animal_bitmap.y = (this.img_back.height - animal_bitmap.height) / 2;
            //            animal_bitmap.y = i * (40 + 5);
            this.setPosition(animal_bitmap, i);
            this.sp_front.addChild(animal_bitmap);
        }
        this.sp_front.visible = false;
    }
    var d = __define,c=CardView;p=c.prototype;
    p.tranceBack = function () {
        if (!this.isBackNow)
            return;
        //        this.img_back.anchorOffsetX ＝ this.img_back.width / 2;
        //        this.img_back.anchorOffsetY ＝ this.img_back.height / 2;
        var weakSelf = this;
        egret.Tween.get(this.img_back).to({ scaleX: 0 }, 500).call(function () {
            weakSelf.img_back.visible = false;
            weakSelf.sp_front.scaleX = 0;
            weakSelf.sp_front.visible = true;
            weakSelf.isBackNow = false;
            egret.Tween.get(weakSelf.sp_front).to({ scaleX: 1 }, 500);
        });
    };
    p.setPosition = function (sp, index) {
        var poses;
        if (this.num == 1) {
            poses = [{ x: (this.img_back.width - sp.width) / 2, y: (this.img_back.height - sp.height) / 2 }];
        }
        else if (this.num == 2) {
            poses = [
                { x: (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 },
                { x: this.img_back.width - sp.width - (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 }
            ];
        }
        else if (this.num == 3) {
            poses = [
                { x: (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 - sp.height / 2 },
                { x: this.img_back.width - sp.width - (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 - sp.height / 2 },
                { x: (this.img_back.width - sp.width) / 2, y: (this.img_back.height - sp.height) / 2 + sp.height / 2 }
            ];
        }
        else if (this.num == 4) {
            poses = [
                { x: (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 - sp.height / 2 },
                { x: this.img_back.width - sp.width - (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 - sp.height / 2 },
                { x: (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 + sp.height / 2 },
                { x: this.img_back.width - sp.width - (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 + sp.height / 2 }
            ];
        }
        else if (this.num == 5) {
            poses = [
                { x: (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 - sp.height },
                { x: this.img_back.width - sp.width - (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 - sp.height },
                { x: (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 + sp.height },
                { x: this.img_back.width - sp.width - (this.img_back.width - sp.width * 2) / 3, y: (this.img_back.height - sp.height) / 2 + sp.height },
                { x: (this.img_back.width - sp.width) / 2, y: (this.img_back.height - sp.height) / 2 }
            ];
        }
        sp.x = poses[index].x;
        sp.y = poses[index].y;
    };
    return CardView;
})(egret.Sprite);
egret.registerClass(CardView,"CardView");
