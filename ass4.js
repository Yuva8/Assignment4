var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i<11 ; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] + ","
 
}
console.log(new_string.slice(0,23));

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var new_string = "";
 
for (var i = 10; i >= 0; i --) {
 new_string += numsArr[i] + " "
}
console.log(new_string.slice(0,23));

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 !== 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var sum = 0;
for (var i = 0; i <=10; i++) {
 
 sum += numsArr[i]
}
console.log(sum);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0){
    sum += numsArr[i]
 }
 
}
console.log(sum);


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);



var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) 
{
 console.log( numsArr[i])

}




var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]

}
console.log(str_all);



var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
      if(inner_array[j] %2 !== 0 )
      {
         inner_array[j] = "even"
       }
}
console.log([numsArr]);


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = (inner_array.length-1); j >= 0 ;j-- )
 str_all = str_all + inner_array[j]+" "
 console.log(str_all);
     
}console.log(str_all);




var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = (inner_array.length-1); j >= 0 ;j-- )
 str_all = str_all + inner_array[j]+" "
 console.log(str_all);
     
}console.log(str_all);

