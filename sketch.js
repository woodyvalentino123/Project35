//Create variables here
var dog, happyDog,database,foods,foodStock;
var img1,img2;
var lastfed,milk;
var hour;

function preload()
{
 
  //load images here
  img1 = loadImage("images/dogImg.png");
  img2 = loadImage("images/dogImg1.png");
  food1 = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  
  dog = createSprite(400,200,20,20);
  
  happyDog = createSprite(100,100,20,20);
 
  milk = new Food();

  milk.updateTime(hour)
 
  
  
  
  
}


function draw() {  
  background(46,139,87);
  var button1 = createButton('Feed the Dog');
    var button2 = createButton('Add the Food');
    button1.position(700,100);
    button2.position(700,60);
    console.log(hour);
  
 button1.mousePressed(function(){
   deduct = new Food();
    deduct.deductFoodStock(foodStock);
    dog.scale = 0.2;

 })
       
   button2.mousePressed(function(){
    var  updt= new Food();
    updt.updateFoodStock(foodStock);
    happyDog.addImage(img1);
    happyDog.scale = 0.2;
 })
 
  drawSprites();
  
  
  dog.addImage(img2)
  dog.scale=0.2;
  milk.display();
  
  textSize(15);
  fill('red')
  stroke(4)
  text("Last Fed :" + time,80,40);
  //add styles here
  

}



function showerror(){
  console.log("error");

}

async function update(hour){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
     hour = datetime.slice(11,13);
}



