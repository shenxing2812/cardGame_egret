/**
 *
 * @author 
 *
 */
class MyEventDispatcher extends egret.EventDispatcher {
    
    private static _instance: MyEventDispatcher;
    public static getInstance(): MyEventDispatcher {
        if(!this._instance) {
            this._instance = new MyEventDispatcher();
        }
        return this._instance;
    }
    
    public constructor() {
        super();
	}
}
