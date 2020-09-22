class Food {
    constructor(){
        
        this.body = createSprite(720,220,70,70)
        this.image = loadImage("images/milk.png");
        this.foodStock = 0;
        this.lastFed ;
    }
    getstock(){
        database = firebase.database();
    var getFoodStock = database.ref("Food");
     getFoodStock.on("value",function(data){
         this.foodStock = data.val();
     })
    }
    getTime(){
        database1 = firebase.database();
        var getTime = database.ref("FeedTime");
        getTime.on("value",function(data){
        this.lastfed = data.val();
            
        })
    }
    
    updateFoodStock(foodStock){
    this.foodStock =this.foodStock+1;
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
                  FeedTime:hour
              })
          }
    
     
    display(){
        var x =80,y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodStock.getStock!==0){
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