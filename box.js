class Box{

constructor(x,y){

 var options = {
  
    isStatic:false,
    restitution: 0.4,
            friction: 0.0

  

 }
this.x=x;
this.y=y;
this.Visibility=225
this.body = Bodies.rectangle(this.x,this.y,20,40);
World.add(world,this.body);


}

display(){
   var angle = this.body.angle;
   var pos= this.body.position;
    if(this.body.speed<5){
      
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("black")
      strokeWeight(2);

      rect(0,0,20, 40);
      pop();
              }
              else{
                World.remove(world, this.body);
                push();
                this.Visibility = this.Visibility - 5;
                tint(255, this.Visibility);
                pop();
              }
            }
            //score(){
           ///   if (this.Visiblity < 0 && this.Visiblity > -1005){
            //    score++;
            //  }
          //  }
          
          score() {
            if(this.Visibility < 0 && this.Visibility > -105){
                score++;
            }
          }
}

