var myswitch = false;

function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    /*
    if (!myswitch){
        background(0);
    }else{
        background(255)
    }
    */
    
    
}

function mousePressed(){
    myswitch = !myswitch;
}