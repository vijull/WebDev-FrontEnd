//in case of let and const hoisting is done a liitle different as that of var.That hoisting is done in dead temporal zone(let y ;          y=100; the spaace /time btw that area)
// console.log(x);
// console.log(y);
// var x=10;            //undefined
// let y=100;           // can't determine y before initilization




//HIGHER ORDER functions are the functions which accept another function as an argument    OR    when we return an entire function from the function itself then also it is known as higher order function

// function a(fn){
//     console.log('inside a');
//     fn();
// }
// // function b(){
// //     console.log('inside b');
// // }
// // a();
// // a(b);
// a(function b(){
//          console.log('inside b');
//  });                                  //when u directly use the function without giving it any name then it is known as annonymonous function






//FUNCTIONAL EXPRESSION--when we assign an entire function to some variable 

// function a(){
//     console.log('inside a');
//     function b(){
//         console.log('inside b');
//     }
//     return b;
// }

// let ans = a();
// comsole.log(ans);
// ans(); 


//CALL BACK FUNCTION-- when a function is passed as an argument to some function calling and inside that function calling the passed argument is executed
//b is the callback function here
                     // refer GOLDY notes
// function a(fn){
//     console.log('inside a');
//     fn();
// }
// function b(){
//     console.log('inside b')
// }
// a(b); 




//ARRAY METHODS WITH CALL BACK FUNCTION 

// FOR EACH is a method not a loop,and its a call back function
let a=[1,2,3,4,5]
a.forEach(function(i){              //executes each and every entity in array
 console.log(i);
}
)

//MAP method also accepts call back function but it returns a new array
let arr = [10,12,14,16,18];
let neww = arr.map(function(i){
    return i+20;
})
console.log(arr);
console.log(neww);


//FILTER 
let arrr = [1,2,3,4,5,6,7,8,9,10];
let newww = arrr.filter(function(i){
    if(i%2==0){return true;}
    return false;
})
console.log(arrr);
console.log(newww);
