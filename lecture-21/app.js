//ARROR FUCNTION

// let ans = ()=>{
//     console.log('Hi bhai')
// }
// ans();


    //1. in case of arrow functions if only single executable statement is there then we can ignore writting the return keyword.
    // 2.if only one argument is present then we can ignore writting parantheses  (like in a,b () is there but if it was only a then no need of ()this)

// let ans1 = (a,b)=>a+b;

// let sum =ans(4,5);
// console.log(sum)

// let ans = a=>{
//     // let ans = (a)=>{
//     return Math.sqrt(a);
// }

// let sqrr =ans(9);
// console.log(sqrr)


                            // for diagrams check gallery (9-9)
//CALL BACK FUNCTION

// console.log('start');
// setTimeout(function(){
//     console.log('middle');
// },0)                     //end ka baad kyu ki call toh huya na 

// console.log('end');
// setTimeout(function(){
//     console.log('yo bro');
// },6000)



//CALLBACK HELL
function step1(fn){
    setTimeout(function(){
        console.log("hi bhai");
        fn();
    },4000)
}

function step2(fn){
    setTimeout(function(){
        console.log("bye bhai");
        fn();
    },2000)}

    
function step3(fn){
    setTimeout(function(){
        console.log("namaste bhai");
        fn();
    },5000)
}

function step4(){
    setTimeout(function(){
        console.log("lanka lag gyi bhai");
    },3000)
}

step1(function(){
    step2(function(){
        step3(function(){
            step4();
        });
    });
});
// step2();