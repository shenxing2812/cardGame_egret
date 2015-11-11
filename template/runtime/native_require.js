
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/socket/socket.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/command/BaseCmd.js",
	"bin-debug/command/CMD_IDS.js",
	"bin-debug/command/CMD_REP_IDS.js",
	"bin-debug/command/EnterRoomCmd.js",
	"bin-debug/command/GetRoomListCmd.js",
	"bin-debug/command/LoginCmd.js",
	"bin-debug/event/LoginEvent.js",
	"bin-debug/event/MyEventDispatcher.js",
	"bin-debug/event/RoomEvent.js",
	"bin-debug/game/Game.js",
	"bin-debug/main/GameConfig.js",
	"bin-debug/main/GameData.js",
	"bin-debug/main/GameManager.js",
	"bin-debug/socket/MySocketResponder.js",
	"bin-debug/socket/Mysocket.js",
	"bin-debug/wnd/CardView.js",
	"bin-debug/wnd/LoginWnd.js",
	"bin-debug/wnd/PlayerView.js",
	"bin-debug/wnd/RoomListWnd.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 1136,
		contentHeight: 640,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};