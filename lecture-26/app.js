console.log($('h1'))          //this works as queryselector all so selects all h1
console.log($('h1').css('color' , 'orange'))                //all values given in argument gets in string
console.log($('h1').css('background-color' , 'lightgray'))     //properties given here should be in kebab case i.e with '-'


//making objects and puting multiple properties in one
console.log($('h1').css({
    color:'yellow',
    backgroundColor: 'green'                 //in objects properties should be in camel case
}))



console.log($('h1').text()) //gets all text
console.log($('#sammu').text())     // gitter only that element
console.log($('#sammu').html('<em>samarth</em>'))       //changes elements value
console.log($('#sammu').attr('id'))                //returns that attribute
console.log($('#sammu').attr('id', 'samarth'))              //catches another element when given 2nd element
