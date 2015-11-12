var loginSkin=(function (_super) {
	__extends(loginSkin, _super);
	function loginSkin() {
		_super.call(this);
		
		this.height = 400;
		this.width = 600;
		this.elementsContent = [this._Label1_i(),this._Label2_i(),this.txt_name_i(),this.txt_pwd_i(),this.btn_login_i()];
	}
	var _proto = loginSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "用户名：";
		t.x = 134;
		t.y = 90;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "密    码：";
		t.x = 134;
		t.y = 145;
		return t;
	};
	_proto.txt_name_i = function () {
		var t = new eui.EditableText();
		this.txt_name = t;
		t.border = true;
		t.borderColor = 0xffffff;
		t.height = 37;
		t.maxChars = 16;
		t.text = "";
		t.width = 259;
		t.x = 244;
		t.y = 89;
		return t;
	};
	_proto.txt_pwd_i = function () {
		var t = new eui.EditableText();
		this.txt_pwd = t;
		t.border = true;
		t.borderColor = 0xffffff;
		t.height = 37;
		t.maxChars = 16;
		t.text = "";
		t.width = 259;
		t.x = 244;
		t.y = 143;
		return t;
	};
	_proto.btn_login_i = function () {
		var t = new eui.Button();
		this.btn_login = t;
		t.label = "登录";
		t.x = 227;
		t.y = 214;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["txt_name","txt_pwd","btn_login"];
		},
		enumerable: true,
		configurable: true
	});
	return loginSkin;
})(eui.Skin);