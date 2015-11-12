var sddSkin=(function (_super) {
	__extends(sddSkin, _super);
	function sddSkin() {
		_super.call(this);
		
		this.height = 100;
		this.width = 300;
		this.elementsContent = [this.img_head_i(),this.lab_name_i(),this.lab_leftCard_i()];
	}
	var _proto = sddSkin.prototype;

	_proto.img_head_i = function () {
		var t = new eui.Image();
		this.img_head = t;
		t.height = 73;
		t.width = 77;
		t.x = 8;
		t.y = 6;
		return t;
	};
	_proto.lab_name_i = function () {
		var t = new eui.Label();
		this.lab_name = t;
		t.height = 29;
		t.text = "名字名字";
		t.width = 163;
		t.x = 89;
		t.y = 8;
		return t;
	};
	_proto.lab_leftCard_i = function () {
		var t = new eui.Label();
		this.lab_leftCard = t;
		t.height = 29;
		t.text = "牌堆剩余：12";
		t.width = 186;
		t.x = 92;
		t.y = 49;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["img_head","lab_name","lab_leftCard"];
		},
		enumerable: true,
		configurable: true
	});
	return sddSkin;
})(eui.Skin);