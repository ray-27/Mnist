var data;

function preload(){
  data = loadStrings('data.txt')
}


no_pixels = 28
factor = 1.5

size_of_each = 10 * factor

Width = no_pixels * size_of_each
Height = no_pixels * size_of_each

 var arr = [1,0,0,0,0,0,0,5,2,7,0]

function setup() {
  createCanvas(Width, Height);
  h1 = createElement('h1',"heading"); 
}




function cur(comm){
    
    fill(225,0,0)
  if(comm === 'e'){
    ellipse(mouseX,mouseY,10)
    h1.html(mouseX+" , "+mouseY)
  }
  else if(comm === 'r'){
    rect(int(mouseX/size_of_each)*size_of_each,int(mouseY/size_of_each)*size_of_each,size_of_each)
    h1.html(mouseX+" , "+mouseY+" | pixel : ")
  }
  

}

function draw() {
  background(220);
  
  cur('r')
  
  
  
  noFill();
  noStroke();
  
  for(let i = 0;i < no_pixels;i++){
    for(let j  = 0;j < no_pixels;j++){
          rect(i*size_of_each,j*size_of_each,size_of_each)
    }
  }
  
  var c = 0;
  for(let i = 0;i < no_pixels;i++){
    for(let j  = 0;j < no_pixels;j++,c++){
      if(data[c] !== '0'){
          fill(0)

          rect(i*size_of_each,j*size_of_each,size_of_each)
      }
    }
  }
  
  noFill()
  
  
  
}