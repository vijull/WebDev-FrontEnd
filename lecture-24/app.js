//SUBMIT EVENT
// let form = document.querySelector('form')
// form.addEventListener('submit' , function(e){
//     e.preventDefault();                                  
//     console.log("daba diya");
// })

// let form = document.querySelector('form')
// form.addEventListener('submit' , function(e){  
//     e.preventDefault();                                              
//     console.log(form.elements);                      //only form relevent data will be shown
// }) 

// let form = document.querySelector('form')
// form.addEventListener('submit' , function(e){  
//     e.preventDefault();                                              
//     console.log(form.elements[1].value);        //returns value of the index given   and if full element at that index needed only element[1]            
// }) 

let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')


btn.addEventListener('click' , function(){
    let li = document.createElement('li')
    li.innerText =  inp.value;
    ul.append(li);
    inp.value= " "         //this will remove the string value already given so that we dont have to change it manually


    li.addEventListener('click' , function(){
        li.remove();
    })
})