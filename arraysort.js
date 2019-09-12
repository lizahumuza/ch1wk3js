
//function arraySort(arr) {
    //var arr=[2,0,6,5,1,7,'z','a'];
    //var evens= [(arr%2==0)];
    //var odds= [(arr%2==1)];
    //var chars = ['g'];
    //console.log(arr.sort(function(evens,odds,chars) {
       // return {evens: [], odds: [],
          //  chars:[]}
   // }));
    
//}
//arraySort();
var mixedArray=[2,0,6,5,1,7,'z','a'];

// mixedArray.sort(function arraySort(evens,odds,chars){
//     var evens= [];
//     var odds= [];
//     var chars= [];
 
//   for(i=1;i<=8;i++)
// {
//   if ( i%2==0 )
//   {
    
//     console.log(evens.push(i));
//   }
//   else if ( i%2==1 ) 
//   {
    
//    return odds.push;
//   }
//   else 
//   {
//     return char.push;
//   }
  
// }
// console.log(i);
//                       });
 
function arraySort(arr){
        var evens= [];
        var odds= [];
        var chars= [];
      
      for(i=0;i<arr.length;i++)
    {
      if (arr[i]%2==0 )
      {
        
       evens.push(arr[i]);
      }
      else if (arr[i]%2==1 ) 
      {
        
        odds.push(arr[i]);
      }
      else 
      {
        chars.push(arr[i]);
      }
      
    } 
    var values = {'evens': evens,'odds':odds,'chars':chars};
    console.log(values);
    return values;

                          }

arraySort(['a',4,7,'d',3,2]);


