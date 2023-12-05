//var heading = document.getElementById('info_head');
let height = 476
let width = height

var h1,h2
var resolution
var arr = [] // 28 * 28
var pixel_size

function setup() {
    var can = createCanvas(width, height);
    can.parent('canvasP5')
    
    resolution = 28
    pixel_size = int(width / resolution)

    h1 = createElement ('h3', 'Pointer coordinates')
    h1.position(1100,100)

    h2 = createElement ('h3', 'Pixel coordinates')
    h2.position(1100,150)

    console.log("pixel size = " + pixel_size);
}

function print_arr(){
    for(var i = 0;i < resolution;i++){
        for(var j = 0;j < resolution;j++){
            rect(i*pixel_size, j*pixel_size, pixel_size, pixel_size)
        }
    }
}

function mouseMoved(){
    
    //ellipse pointer
    fill(225,0,0)
    noStroke()
    // ellipse(mouseX, mouseY, 10)
    h1.html("pointer : "+int(mouseX)+" , "+int(mouseY)+" ")
    
    //rect pointer
    fill(225,0,0)
    noStroke()
    rect(int(mouseX/pixel_size)*pixel_size,int(mouseY/pixel_size)*pixel_size, pixel_size,pixel_size)
    h2.html("box : "+int(mouseX/pixel_size)+" , "+int(mouseY/pixel_size))
}



function draw(){

    background(0);
    
    fill(225,225,225)
    stroke(5)
    print_arr()
    
    mouseMoved()
}
