var sddSkin=(function (_super) {
	__extends(sddSkin, _super);
	function sddSkin() {
		_super.call(this);
		
		this.height = 160;
		this.width = 120;
		this.elementsContent = [this.img_head_i(),this.lab_name_i()];
	}
	var _proto = sddSkin.prototype;

	_proto.img_head_i = function () {
		var t = new eui.Image();
		this.img_head = t;
		t.height = 73;
		t.width = 77;
		t.x = 15;
		t.y = 13;
		return t;
	};
	_proto.lab_name_i = function () {
		var t = new eui.Label();
		this.lab_name = t;
		t.height = 29;
		t.text = "名字名字";
		t.width = 68;
		t.x = 23;
		t.y = 100;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["img_head","lab_name"];
		},
		enumerable: true,
		configurable: true
	});
	return sddSkin;
})(eui.Skin);