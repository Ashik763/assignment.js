// function budgetCalculator(budget){
//     var j=0;
//     for(var i = 0; i<budget.length;i++){
//         if(budget[i]>=0 && budget[i] % 1 == 0){
//              j++;
//         }
//     }
//     if(j==3){
//         var clock = budget[0];
//         var mobile =  budget[1];
//         var laptop = budget[2];
//         var total = (clock*50)+(mobile*100)+(laptop*500);
//         return total;
//         }
//     else{
//         console.log("error!please use the valid input");
//         }


//     }




// var budget = [5,7,2];
// var result2 = budgetCalculator(budget);
// console.log(result2);

// function megaFriend(names){
//     var longestNameNameNameNameLength = 0 ;
//     var longestNameNameNameName=[];
//     for(var i=0; i<names.length;i++){
//         if(names[i].length > longestNameNameNameNamelength){
//             longestNameNameNameNameLength = names[i].length;
//              longestNameNameNameName = names[i];
            
//         }
        
//     }
//     return longestNameNameNameName;
// }
// var result4 = megaFriend(['a','ab','abc']);

// console.log(result4);



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
  
 
