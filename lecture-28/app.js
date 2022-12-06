// let data = '{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}';



// let jsonData = JSON.parse(data);
// console.log(jsonData.ticker.price);




// XMLHTTPREQUEST--->constructor function
// let ul = document.querySelector('ul')
//let req = new XMLHttpRequest();
// req.open('GET', 'https://inshorts.deta.dev/news?category=science')
// req.send();
// // console.log(req);


// req.onload = function(){
//     // console.log(this.response);
//    let parsedData=  JSON.parse(this.response);
//    console.log(parsedData);


//    for(let news of parsedData.data){

//     console.log(news.content);
//    let li = document.createElement('li');
//    li.innerHTML = `<img src="${news.imageUrl}">
//                    <p>${news.content}</p>`
//     ul.append(li);

//     }
// }
// req.onerror = function(){
//     console.log(this.response);

// }
 


//**********IMP************FETCH:is a web api ---above code using fetch to make it easy and makes all chunks appear at once
let ul = document.querySelector('ul')
fetch('https://inshorts.deta.dev/news?category=science')
.then(function(res){
    return res.json();
})
.then(function(d){
console.log(d);
for(let news of d.data){

        console.log(news.content);
       let li = document.createElement('li');
       li.innerHTML = `<img src="${news.imageUrl}">
                       <p>${news.content}</p>`
        ul.append(li);
    
        }
    

})
.catch()