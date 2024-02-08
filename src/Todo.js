export var id = 1;
import TimeTransfer from "./timeTransfer.js";
const timeTransfer = new TimeTransfer();
export default class Todo {
    constructor(content) {
        this.id = id;
        this.content = content;
        this.createAt = timeTransfer.timestampToTime(Date.now());
        this.updateAt = null;
        this.isDone = false;
        id++;
    }

    done(status) {
        this.isDone = status;
        this.updateAt = timeTransfer.timestampToTime(Date.now());
    }

    modifyContent(newContent) {
        this.content = newContent;
        this.updateAt = timeTransfer.timestampToTime(Date.now());
    }
    modifyStatusAndContent(newContent,status){

        if(newContent!=undefined && newContent!=null){
            Promise.resolve(this.modifyContent(newContent));
        }
        if(status !=undefined && status!=null){
            Promise.resolve(this.done(status));
        }
    }


}
