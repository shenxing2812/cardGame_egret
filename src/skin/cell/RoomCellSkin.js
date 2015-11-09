var RoomCellSkin=(function (_super) {
	__extends(RoomCellSkin, _super);
	function RoomCellSkin() {
		_super.call(this);
		
		this.height = 74;
		this.width = 628;
		this.elementsContent = [this._Label1_i(),this._Label2_i()];
		
		eui.Binding.bindProperty(this, ["hostComponent","data","roomName"], this._Label1,"text");
		eui.Binding.bindProperty(this, ["hostComponent","data","roomNum"], this._Label2,"text");
	}
	var _proto = RoomCellSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.x = 26;
		t.y = 27;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.x = 350;
		t.y = 27;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return [];
		},
		enumerable: true,
		configurable: true
	});
	return RoomCellSkin;
})(eui.Skin);