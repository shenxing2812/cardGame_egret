/**
 *
 * @author 
 *
 */
class GameManager {
    
    private static _instance: GameManager;

    public static getInstance(): GameManager {
        if(!this._instance) {
            this._instance = new GameManager();
        }
        return this._instance;
    }
    
    //游戏
    public game: Game;
    
    //游戏配置
    public gameConfig: GameConfig;
    
    //游戏数据
    public gameData: GameData;
    
    
	public constructor() {
        this.gameConfig = new GameConfig();
        this.gameData = new GameData();
	}
}
