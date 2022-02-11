class Ground
{

    constructor(x,y,h,w){
        var options_rect = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,h,w, options_rect);
        this.h = h;
        this.w = w;
        World.add(world, this.body);
    }
    show(){
        var pos = this.body.position;
        
        push();
        rectMode(CENTER);
        stroke(200);
        fill(0);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}