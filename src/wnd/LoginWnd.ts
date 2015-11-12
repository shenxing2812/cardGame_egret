/**
 *
 * @author 
 *
 */
class LoginWnd extends eui.Component{
	
    private txt_name : eui.EditableText;
    private txt_pwd : eui.EditableText;
    private btn_login : eui.Button;
    
    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
        this.skinName = "resource/skin/loginSkin.exml";
	}
	
	 
    protected createChildren() {
        super.createChildren();
        console.log("createChildren")
    }
    
    private onComplete():void {
        console.log("onComplete");
        this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this);
    }
    
    private onButtonClick(e:egret.TouchEvent){
        var accountName: string = this.txt_name.text;
        var pwd: string = this.txt_pwd.text;
   //     console.log("name=" + accountName + " pwd=" + pwd);
        
        var cmd: LoginCmd = new LoginCmd(accountName,pwd);
        cmd.sendCmd();
        
    }
}
