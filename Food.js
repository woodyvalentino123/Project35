class Food {
    constructor(){
        var lastFed;
        var foodStock;
        this.image = loadImage("images/milk.png");
        this.foodStock = foodStock;
        this.lastFed = lastFed;
    }
    getstock(){
        database = firebase.database();
    var getFoodStock = database.ref("Food");
     getFoodStock.on("value",function(data){
         foodStock = data.val();
     })
    }
    getTime(){
        database1 = firebase.database();
        var getTime = database.ref("Feedtime");
        getTime.on("value",function(data){
            lastfed = data.val();
        })
    }
    
    updateFoodStock(foodStock){
    foodStock =foodStock+1;
  database.ref("/").update({
    Food:foodStock
  })

    }
    deductFoodStock(foodStock){
        if(foodStock<=0){
            foodStock=0;
          }else{
            foodStock=foodStock-1;
          }
            database.ref('/').update({
              Food:foodStock,
              
            })
          }
          updateTime(hour){
              database.ref('/').update({
                  Feedtime:hour
              })
          }
    
     
    display(){
        var x =80,y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodStock!==0){
            for(var i =0;i<this.foodStock;i++){
                if(i%10===0){
                    x = 80;
                    y = y+50;
                }
                image(this.image,x,y,50);
                x=x+30;
            }
        }
    }
}