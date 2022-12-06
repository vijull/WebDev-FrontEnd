let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');

function fetchData(searchText) {
  axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
  .then(function(response) {
    manipulateDOM(response.data);
  })
}

function manipulateDOM(data) {
  while(list.firstChild) {
    list.firstChild.remove();
  }

  for (let d of data) {
    if (d.show.image) {
      let img = document.createElement('img');
      img.setAttribute('src', d.show.image.original);
      list.appendChild(img);
    }  
  }
}

btn.addEventListener('click', function() {
  let searchText = input.value;
  let data = fetchData(searchText);
})


// *****BROWSER*****                |                ****NODE JS****
// window -- global object          |                  global
// document                         |                  no document
// file system not managed          |                  file system managed


import{name,tomper,class1}
from'./app2.js'

console.log(name);
// console.log(tomper);
// console.log(class1);