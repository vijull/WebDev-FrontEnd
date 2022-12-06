let inp = document.querySelector('input');
let btn = document.querySelectorAll('button');

for(let buttons of btn){
    buttons.addEventListener('click' , function(e){
        let btnText = e.target.innerText;
    
        //  console.log(btnText)
        if(btnText == 'AC'){
            inp.value = ""
        }
        else if(btnText === '='){
            try{
            inp.value = eval(inp.value)
            }
            catch{
                inp.value = "pagal hai kya?"
            }
        }
        else{
            inp.value += btnText
        }
        
    })
}