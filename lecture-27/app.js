// console.log($('li'))
// console.log($('li').first().css('color' , 'red'))
// console.log($('li').last().css('color' , 'blue'))
// //console.log($('li').nth-of-type(2).css('color' , 'red'))         //doesn't work
// console.log($('li:nth-of-type(2)').css('color' , 'orange'))    //give property inside that li only so as to make it work
// console.log($('li:nth-of-type(odd)').css('color' , 'lightgreen'))

// const { fn } = require("jquery")

 

// //SELECTING INPUT
// console.log($('input'))
// console.log($('input').val());          //getting inputting values 



//$('h1').addClass()
//$('h1').removeClass()
//$('h1').toggleClass()
//$('h1').hasClass()


// console.log($('h1').first().addClass('sammu'))        //adds class
// console.log($('h1').first().removeClass('sammu'))         //remove class
// console.log($('h1').removeClass('parth'))   
// console.log($('h1').last().toggleClass('sammu'))        //toggles class
// console.log($('h1').last().toggleClass('sammu'))


// //has class
// console.log($('h1').last().hasClass('sammu'))     //fasle cuz not present
// console.log($('h1').last().toggleClass('sammu'))    //toggled
// console.log($('h1').last().hasClass('sammu'))    //now present so true



//button on click
// console.log($('button').click(function(){
//     console.log('daba do')
// }
// ))   

//this -->points to a that element or tag what we give -- on clicking li changes color .
// console.log($('li').click(function(){
//     $(this).css('color','blue')
// }))

  

// //on click-- same as addEventListner
// console.log($('button').on('click' , function(){
//     console.log('daba toh diya paii')
// }))










///*************PROMISE*********** */

// conditions: 1.true/false
//             2. time
// SYNTAX
// let P = new Promise(func(resole),reject)

// P.then().catch()

//RESOLVE
// let P = new Promise(function(resolve,reject){
//         resolve();


// })
// P.then(()=>{
//     console.log("paisa dedia")                      //paisa dedia
// }).catch(()=>{
//     console.log("paisa nhi de reha")
// })


//REJECT
// let P = new Promise(function(resolve,reject){
//     reject();


// })
// P.then(()=>{
// console.log("paisa dedia")                   //paisa nhi de reha
// }).catch(()=>{
// console.log("paisa nhi de reha")
// })


//BOTH RESOLVE AND REJECT
// let P = new Promise(function(resolve,reject){
//     resolve();
//     reject();                           //prints de dia cuz jo upper hai vo chalega


// })
// P.then(()=>{
// console.log("paisa dedia")
// }).catch(()=>{
// console.log("paisa nhi de reha")
// })



//RESOLVE WITH DATA
// let P = new Promise(function(resolve,reject){
//     resolve('10 rupee');


// })
// P.then((data)=>{
// console.log(data)                            //giving by data 
// }).catch((data)=>{
// console.log(data)
// })


//TIME 
// let P = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('fetching the data...')
//         resolve('10 rupee')

//     },3000)
    


// })
// P.then((data)=>{
// console.log(data)
// }).catch((data)=>{
// console.log(data)
// })


//CALLBACK HELL   -- next code we resolve it with promise
// let step1 = function(fn){
//     setTimeout(function(){
//         console.log('payment in progress...');
//         fn();

//     },3000)
// }

// let step2 = function(){
//     setTimeout(function(){
//         console.log('paytm 10rs recieved');
//     },5000)
// }


// step1(function(){
//     step2();
// });



//PROMISE 
let step1 = new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log('payment in progress...');
        resolve();

    },3000)
})

let step2 = function(){
    setTimeout(function(){
        console.log('paytm 10rs recieved');
    },5000)
}


step1.then(()=>{
    step2();
});



