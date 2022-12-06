//the first execution context that is created is called global execution context.


//HOISTING--is defined as accessing any variable or function before its declaration is known as hoisting.
// console.log(x);
// f();

// function f(){
//     console.log('hello');

// }
// var x=100;


                                   //SPECIAL EXAMPLE
// console.log(a);
// function b(){
//     c();
//     var x=999;
//     function c(){
//         console.log(x);

//     }
// }
// b();
// var a=100;

//LEXICAL ENVIRONMENT--lexical scope = local memory + lexical environment of its parent



            //IMP                                            //let and const has a block scope
                                                        //variable has functional scope
       

//eg1                                                       
// let scoree = 50;
// if(scoree>=33){
//     let x=30;
// }
// console.log(x);

//eg2
let score = 50;
if(score>=33){
    var x=30;
}
console.log(x);
