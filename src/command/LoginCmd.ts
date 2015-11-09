/**
 *
 * @author 
 *
 */
class LoginCmd extends BaseCmd{
    
    public accountName: string;
    public pwd: string;
    
    public constructor(accountName:string,pwd:string) {
        super();
        this.cmdId = CMD_IDS.CMD_LOGIN;
        this.accountName = accountName;
        this.pwd = pwd;
	}
	
    protected parseCmd(): string {
        return JSON.stringify({ cmdId: this.cmdId,accountName: this.accountName,pwd: this.pwd });
    } 
}
