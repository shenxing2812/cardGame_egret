/**
 *
 * @author 
 * 解析服务端返回的数据数据
 *
 */
class MySocketResponder {
	public constructor() {
    	
	}
	
	public parse(str:string):void{
        var object = JSON.parse(str);
        var cmdId: string = object.cmdId;
        console.log("cmdId:"+object.cmdId);
        if(cmdId == CMD_IDS.CMD_LOGIN){
            var loginEvent: LoginEvent = new LoginEvent(LoginEvent.LOGIN_SUCCESS);
            loginEvent.msg = "登录成功";
            MyEventDispatcher.getInstance().dispatchEvent(loginEvent);
        }
	}
}
