

//kilometerToMeter

function kilometerToMeter(km){
if(km>=0){ 
    var meter = km * 1000;
    return meter;
    }
    else{
        console.log("please use a valid input!");
    }

}

var result = kilometerToMeter(1.5);
console.log(result); 

//budgetCalculator
 
function budgetCalculator(clock,mobile,laptop){
    
        if(clock>=0 && clock % 1 == 0 && mobile>=0 && mobile% 1 == 0 && laptop>=0  &&  laptop % 1 == 0){
        
            var total = (clock*50)+(mobile*100)+(laptop*500);
            return total;
        }
    else{
        console.log("error!please use the valid input");
        }


    }

var result2 = budgetCalculator(5,3,1);
console.log(result2); 

//hotelCost

function hotelCost(spentDay){
    if(spentDay<0){
        console.log("error!please enter the valid input.");
    }
    else if(spentDay<=10){
        var cost = spentDay * 100;
        return cost;
    }
    else if(spentDay<=20){
        cost = (10*100)+((spentDay-10)*80);
        return cost;
    }
    else if(spentDay>20){
        cost = (100*10)+(80*10)+((spentDay-20)*50);
        return cost;
    }
}

var result3 = hotelCost(5);
console.log(result3);  

//megaFriend


function megaFriend(names){
    var longestNameLength = 0;
    var longestName;

  for (var i = 0; i < names.length; i++) {
      if (names[i].length > longestNameLength) {
     longestNameLength = names[i].length;
   longestName = names[i]; 
  
      }
 }
 return longestName;

}

var names = ['ashik','Munna','mahim','badul','aaaaaaaa'];
var result4 = megaFriend(names);
console.log(result4);