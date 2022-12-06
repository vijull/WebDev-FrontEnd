let str = "samarth vohra"
//INCLUDES
// console.log(str.includes('sam'))
// console.log(str.includes('Sam'))               //includes method returns only boolean value
// console.log(str.includes('23'))



//SUBSTR
// console.log(str.substr(6))                   // lines cuz vo depricate ho chuka hai we cant use this in our code
//            //prints all values after that given    
// console.log(str.substr(-6,2));
//               // string will read always from left to right so if we do with negative stil length will be taken from left to right. and - length woundn't be taken and returns nothing 
   

//SUBSTRINBG
// console.log(str.substring(2,5));  // last index is never included
// console.log(str.substring(5,2));    //when starting index is greater than ending index then swapping happens and output comes the same as having (2,5)
// console.log(str.substring(-2,5));    //whenever negative index is there in substring then it will be treated as 0  
// console.log(str.substring(-2,-5));     //empty
// console.log(str.substring(0,0));  //empty cuz ending index is not included


//INDEXOF
// //indexof return type is number
// console.log(str.indexOf('a'));  //gives first encountered 
// console.log(str.indexOf('a',3)); //it will check till sama but last index is not included so it will start checking after m  
// console.log(str.indexOf('a',str.indexOf('a')+1));  //gives value of 2nd occurance of that alphabet without knowing its index




//REPLACE
// console.log(str.replace('a','e'));  //replaces only first encountered index
// //REPLACEALL
// console.log(str.replaceAll('a','e'));     //replaces all values present  


//MATHFUNCTION
// console.log(Math.random());   //genereates a random value btw 0 to 1 but never 1 always in points like 0.233546457
// console.log(Math.random()*10);  //gives random value in which exactly 10 is not included
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10)) //when we multiply by 10 then range becomes from 0 to that no. -1 cuz last excluded 
// console.log(Math.floor(Math.random()*6)+21)  //now this will make a range from 21 to 26 .again last number not included  



//ARRAY--is a ordered and hertrogenious(multiple types) collection of values.
let arr=[1,2,3,true,'sam',null,undefined,'vohra',[1,2,[3,4],8]];             //can put all possible values in one 
console.log(arr[8][2][0]);  // 8 encounter inside array 2 encounter 3,4 array and 0 encounter the 3 in array


//ARRAY METHODS
                           //  push,pop,unshift,shift all are destructiev methods
console.log(arr.push("samarth",1,2,null));    //it will return its length not the index
console.log(arr.pop());            //return the poped vlaue from array/the last value in array
console.log(arr.unshift("samarth",1,2,null));     //puts new value in first position of old array
console.log(arr.shift());             //removes the first value in a array
