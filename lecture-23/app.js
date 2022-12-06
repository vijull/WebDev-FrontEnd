//C       R     U      D
//create read update delete

// creating
// let parent = document.querySelector('section');
// let h1 = document.createElement('h1');

// //APPEND CHILD -- using parent and child 
// parent.appendChild(h1)
// console.log(parent)
// h1.innerText = "sammu vahi";
// console.log(h1.innerText)



//APPEND      no parent creation needed
// let h2 = document.createElement('h2')
// let h3 = document.createElement('h3')
// h2.innerText = "h2";
// h3.innerText = "h3";
// parent.append(h2,h3);


//PREPEND --- to make it to top appending
// let h2 = document.createElement('h2')
// let h3 = document.createElement('h3')
// h2.innerText = "h2";
// h3.innerText = "h3";
// parent.prepend(h2,h3);

//BEFORE 
//AFTER   ( do urself from MDN )

//DELETE -- remove() removes multiple at once
// let h3 = document.querySelector('h3')
// console.log(h3)
// h3.remove();

// wont remove multiple items in removechild only one in start will 
// let parent = document.querySelector('section')
// let h2 = document.querySelector('h2')
// let h3 = document.querySelector('h3')
// parent.removeChild(h2,h3)

// function fun(){
//     console.log("event occured")              //event that occured shows count
// }

// let btn = document.querySelector('button')
// btn.onclick = function(){
//     console.log('maza aaya')
// }
                //    ***CAN DO BOTH WAYS 

// let btn = document.querySelector('button')
// let namee = function(){
//     console.log('samarth vohra')
// }
// btn.onclick = namee;


// let btn = document.querySelector('button')
// let namee = function(){
//     console.log('samarth vohra')
// }
// let hello = function(){
//     console.log("sammu ji")            //value overwritting
// }
// btn.onclick = namee;
// btn.onclick = hello;

// let btn = document.querySelector('button')
// btn.addEventListener('click' , function(){
//     console.log("namaste ji")
// })



// let btn = document.querySelector('button')
// let namee = function(){
//     console.log('samarth vohra')
// }
// let hello = function(){
//     console.log("sammu ji")
// }                                                 //this runs both simultaneously

// btn.addEventListener('click' , namee)
// btn.addEventListener('click' , hello)



//ADDING COLOR TO BODY USING ADDEVENTLISTNER

// let btn = document.querySelector('button')
// let body = document.querySelector('body')
// btn.addEventListener('click', function(){
//     body.style.backgroundColor = "yellow"
// })



//INPUT EVENT
// let inp = document.querySelector('input')
// inp.addEventListener('input' , function(){
//     console.log("input chal gya")
// })


// let inp = document.querySelector('input')        
// inp.addEventListener('input' , function(randomname){           //this randomname gives access of all to event
//     console.log(randomname)
// })



// let inp = document.querySelector('input');      
// inp.addEventListener('input' , function(randomname){           
//     console.log(randomname.data)                  //prints one by one element
// }) 



// let inp = document.querySelector('input')        
// inp.addEventListener('input' , function(randomname){           
//     console.log(randomname.target)                    //points to that input
// })


// let inp = document.querySelector('input')        
// inp.addEventListener('input' , function(randomname){           
//     console.log(randomname.target.value)              //returns value given by  user one by one change seen
// })


// let inp = document.querySelector('input')        
// inp.addEventListener('input' , function(randomname){          
//     if(randomname.data == '!' )                //returns value in one go after putting ! in value to
//     console.log(randomname.target.value)
// })

let h1 = document.querySelector('h1')
let inp = document.querySelector('input')
inp.addEventListener('input' , function(e){
    h1.innerText = e.target.value;
})
