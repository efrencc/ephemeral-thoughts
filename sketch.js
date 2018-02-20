var myc = {
    A1 : 100,
    A2 : 45,
};
var theta = 0;
var freq = 1/20;
var x = 13;
var dx = 2;
//var sintheta = 0;

function setup() {
    createCanvas(600,400);
    background(150,0,200)
}

function draw() {
    background(150,0,20)
    
    // // Session 1 \\ \\
    /*
    //data points
    fill(150,250,150)
    for(i=0;i<5;i++)
    ellipse(50+30*i,100+20*i,15,15)

    // Moving with mouse
    noStroke()
    fill(250,100,100,150) //fourth argument: transparency
    ellipse(mouseX,mouseY,20,20)
        
    // moving with time
    fill(50,50,250,100)
    ellipse(circleX,circleY,15+circleX/10,15+circleY/5)
    // Update variables
    circleX = (circleX+1)%dimensionX;
    circleY = (circleY + 1)%dimensionY;
    */
    
    
    //moving sinusoidally
    fill(200,0,200);
    noStroke();
    sintheta = height/2 + myc.A1*Math.sin(theta*freq);
    ellipse(theta%width,sintheta,20,20);
    
    //moving circularly
    ellipse(theta%width + myc.A2*Math.sin(theta*freq),sintheta + myc.A2*Math.cos(theta*freq),15,15);
    
    //bouncing
    //fill(0,0,200);
    noFill();
    stroke(0);
    strokeWeight(3);
    ellipse(x,height/3,25,25);
    
    /*
    //rain
    fill(0,50,50,x);
    noStroke();
    ellipse(random(0,width),random(0,height),50,50);
    */
    
    //update
    theta = theta+1;
    if (x+12.5>=width || x-12.5<0){
        dx = -1*dx;
    };
    x = x+dx;

    

    
    // // Session 2 \\ \\
    
}

function mousePressed() {
    /*
    background(20,140,0,100);//note transparency makes it look like color changes
    noFill();
    strokeWeight(4);
    ellipse(random(0,width),random(0,height),10,10);
    */
}