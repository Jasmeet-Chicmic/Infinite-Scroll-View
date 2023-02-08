import { _decorator, Component, instantiate, Node, Prefab, ScrollView,ScrollBar, Label } from 'cc';
const { ccclass, property } = _decorator;

let count = -10;
let countNegative = 0;
let arr = [];
@ccclass('infiniteScroll')
export class infiniteScrol extends Component {
    
    @property({type:Prefab})
        item:Prefab = null;

        onLoad()
        {
            this.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM,this.bottom);
            this.node.on(ScrollView.EventType.SCROLL_TO_TOP,this.top);
        }
    start() {
        let a = this.node.getComponent(ScrollView).content;
        // console.log(this);
        
        for(let n=1;n<=20;n++)
        {count++;
            // arr.push(count);
            let item = instantiate(this.item);
            item.getChildByName("Label").getComponent(Label).string = String(count);
            
            a.addChild(item);
            // console.log(arr);
            
        }

      

    }   

    bottom = ()=>
    {
        let a = this.node.getComponent(ScrollView).content.children[0];
        a.setSiblingIndex(19);
        // console.log(this);
        
        // let a = this.node.getComponent(ScrollView).content;
        // for(let n=1;n<=5;n++)
        // {
        //     count++;
        //     arr.push(count);
        //     // arr.push(count);
        //     // console.log(a);
        //     console.log(arr);
            
            
        //     let item = instantiate(this.item);
        // item.getComponent(Label).string = String(arr[count-1]);
        // a.addChild(item);
        // }
        
    }
    top = ()=>
    {
        let a = this.node.getComponent(ScrollView).content.children[19];
        a.setSiblingIndex(0);
        // // this.Content.insertBefore(item, this.Content.children[0]);
        // // console.log(this);
        
        
        // let a = this.node.getComponent(ScrollView).content;
        // for(let n=1;n<=5;n++)
        // {
        //     count--;
        //     countNegative--;
        //     arr.unshift(countNegative);
        //     console.log(arr);
            
            // arr.push(count);
            // console.log(a);
            
        //     let item = instantiate(this.item);
        // item.getComponent(Label).string = String(count);
        
        // }
        
    }

    update(deltaTime: number) {
        
    }
}

