var Particles = [];
function setup()
{
    createCanvas(outerWidth,outerHeight);
   // Particles = new Particle(500,500);
    
}
function mousePressed()
{
    Particles.push(new Particle(mouseX,mouseY));
    
}
function draw()
{
    background(255); 
    for(var i = 0 ; i < Particles.length; i++)
        {
    Particles[i].update();
    Particles[i].display();
            
       if(Particles.length > 25)
           {
               Particles.splice(0,1);
           }
            
            
        }
}

function Particle(x,y)
{
   var s = 10;
    this.x = x;
    this.y = y;
    
    this.xspeed = random(-s,s);
    this.yspeed = random(-s,s);
    
    this.history = [];
    
    this.update = function()
    {
        
   
        
       this.x = this.x + random(-s,s);;
        this.y = this.y + random(-s,s);;
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed ;
        
//        for(var i = 0; i < this.history.length;i++)
//            {
//                this.history[i].x += random(-2,2);
//                this.history[i].y += random(-2,2);
//            }
        
        var v = createVector(this.x,this.y);
        this.history.push(v);
        
        if(this.history.length > 25)
            {
                this.history.splice(0,1);
            }
    }
    this.display = function()
    {
        stroke(0);
        fill(150);
        ellipse(this.x,this.y,25,25);
        
        noFill();
        beginShape();
        for(var i = 0; i < this.history.length; i++)
            {
                var pos = this.history[i];
               fill(random(0,255),0,100,50);
                ellipse(pos.x,pos.y,i,i);
                vertex(pos.x,pos.y);
            }
        endShape();
        
         if(this.x < 0)
            {
                this.x = width;
            }
       else if(this.y < 0)
            {
                this.y = height;
            }
       else if(this.x > width)
            {
                this.x = 0;
            }
       else if(this.y > height)
            {
                this.y = 0;
            }
       
    }
}