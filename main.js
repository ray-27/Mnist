//var heading = document.getElementById('info_head');
var h1

function setup() {
    var can = createCanvas(500, 500);
    can.parent('canvasP5')
    
    h1 = createElement ('h3', 'Waiting')
    h1.position(1100,100)
}

function mouseMoved(){
    fill(225,0,0)
    noStroke()
    ellipse(mouseX, mouseY, 10)

    h1.html(mouseX+","+mouseY+" ")
    
}

function draw(){

    background(0);
    mouseMoved()

}