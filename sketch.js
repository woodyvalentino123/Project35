//Create variables here
var doghungry, happyDog,database,foods,foodStock;
var img1,img2;
var lastfed,milk;
var time;
var button1,button2;
var happyD,hungryD;
var getFoodStock;
function preload()
{
 
  //load images here
  happyD = loadImage("images/dogImg.png");
  hungryD = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  happyDog = createSprite(100,100,20,20); 
  doghungry = createSprite(400,200,20,20);
  doghungry.addImage(hungryD);
  doghungry.scale=0.2;

  database = firebase.database();
  getFoodStock = database.ref("Food");
  getFoodStock.on("value",readStock,showerror);
   
    foodobj = new Food();

  button1 = createButton('Feed the Dog');
  button2 = createButton('Add the Food');

  button1.position(700,95);
  button2.position(800,95);

  button1.mousePressed(feedDog);
  button2.mousePressed(addFoods)
  
  }


function draw() {  
  background(46,139,87);
  foodobj.display();


  feedTime = database.ref("FeedTime");
  feedTime.on("value",function(data){
   lastFed = data.val();
  })

  
fill(225);
textSize(15);
if(lastFed>=12) {
  text("Last Fed :" + lastFed%12 + "PM",350,30)
} 
else if (lastFed === 0){
  text("Last Fed : 12  AM",350,30);
}else {
  text("Last Fed : "+ lastFed + "AM",350,30);
}
   
  drawSprites();
   

}



function showerror(){
  console.log("error");

}

  async function hour(){
  var response =  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
     time = datetime.slice(11,13);
     console.log(time);
  }

function readStock(data){
  foodS= data.val();
  foodobj.updateFoodStock(foods)

}
function feedDog(){
  dog.addImage(happyD);
  foodobj.updateFoodStock(foodobj.getFoodStock()-1);
  database.ref("/").update({
  Food:foodobj.getFoodStock(),
  FeedTime:hour(time)
})
}

function addFoods(){
  foodS++;
  database.ref("/").update({
    Food:foodS
  })
}