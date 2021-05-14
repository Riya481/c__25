class Dustbin{
    constructor(x,y,width,height) {
        var option={
            isStatic:true
        }
        this.dustbin=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.dustbin);
        this.width=width;
        this.height=height;
    }

    display(){
        fill("red");
        rectMode(CENTER);
        rect(this.dustbin.position.x,this.dustbin.position.y,this.width,this.height);
}
}
