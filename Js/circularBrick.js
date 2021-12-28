class Circularbrick{

constructor(x,y,r){

this.body = Bodies.circle(x,y,r);
this.r = r;
this.image = loadImage("Image/Circularbrick.png");
World.add(world,this.body);
}  

show(){
let pos = this.body.position;
push();
translate(pos.x,pos.y);
ImageMode(CENTER);
image(this.image,0,0,this.r);
pop();

}
}