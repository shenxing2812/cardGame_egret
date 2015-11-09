/**
 *
 * @author 
 *
 */
class RoomListWnd extends egret.Sprite {
    
    private  dataGroup: eui.List;
    
    public constructor(w,h) {
        super();
        this.graphics.beginFill(0xcccccc);
        this.graphics.drawRect(0,0,w,h);
        this.graphics.endFill();
        
        this.build();
    }
    protected build():void {
        //先创建一个数组
        var sourceArr:any[] = [];
        for(var i:number = 1; i< 51; i++){
            //给数据中添加一个含有"label"属性的对象
            sourceArr.push({ roomName: "room" + i ,roomNum:"1/5",label:""});
        }
        //用ArrayCollection包装
        var myCollection: eui.ArrayCollection = new eui.ArrayCollection(sourceArr);
        
        var dataGroup: eui.List = new eui.List();
        dataGroup.touchEnabled = true;
        dataGroup.dataProvider = myCollection;
        dataGroup.horizontalCenter = 0;
        dataGroup.verticalCenter = 0;
        this.dataGroup = dataGroup;
      //  this.addChild(dataGroup);
        
        var scroller = new eui.Scroller();
        scroller.height = 500;
        scroller.width = 700;
        scroller.viewport = dataGroup;
        this.addChild(scroller);
        
        var vLayout: eui.VerticalLayout = new eui.VerticalLayout();
        vLayout.horizontalAlign = egret.HorizontalAlign.CONTENT_JUSTIFY;
        vLayout.gap = 5;
        dataGroup.layout = vLayout;
    
//        var exml = `
//            <e:Skin xmlns:e="http://ns.egret.com/eui"> <e:Image source="resource/assets/Panel/border.png"/> <e:Label textColor="0xfd0000" text="{data.label}"/> </e:Skin>`;
    
     //   dataGroup.itemRenderer = RoomCell;
        dataGroup.itemRendererSkinName = "src/skin/cell/RoomCellSkin.exml";//也可以直接设置 exml 文件做为 ItemRenderer
    
        var btn_selectRoom = new eui.Button();
        btn_selectRoom.label = "进入";
        btn_selectRoom.x = 650;
        btn_selectRoom.y = this.height/2;
        this.addChild(btn_selectRoom); 
        btn_selectRoom.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this);
    
    }

    private onButtonClick(e: egret.TouchEvent) {
       alert(this.dataGroup.selectedIndex);
    }
}
