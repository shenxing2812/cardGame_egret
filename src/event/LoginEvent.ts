/**
 *
 * @author 
 *
 */
class LoginEvent extends egret.Event{
    
    public static SOCKET_STATE_CHANGED: string = "SOCKET_STATE_CHANGED";
    
    public static LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
    
    public static LOGIN_FAIL: string = "LOGIN_FAIL";
    
    public msg: string;
    
	public constructor(_type:string) {
        super(_type);
	}
}
