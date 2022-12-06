//DOM is an api with which we can chaneg our html
// 5 ways to do selection:
//1.getElementById                  (THE FIRST ENCOUNTER ELEMENT WILL RETURN WITH ONLY ONE ELEMENT)
//2.getElementByTagName                check ss dated 13-09-22  //return full array 
// to give properties to single array element by giving its indexing and to give properties to all at once use looping
//3.getElementByClassName              
//4.querySelector         (for using tag give tag name in bracket,for using id give #id in bracket,and for class use .)       can use all inexing and looping all in once in this   returns only one element which first encountered
// querySelectorAll   returns all elements at once
// querySelector also acts as a setter as we can give new value thorugh it eg: p.innerText = " sammu bhai ji"



//****************INETERVIEW QUESTION ***************
//INNER TEXT-- is a method which has brains that is it will read it style sheet and returns the content accordingly .
//INNER HTML-- returns the entire content along with all the tags that are present in that selected element.
//TEXT CONTENT-- has no brains that is it will directly returns the entire content without even reading the style sheet.



// .getAttribute('')    getting attributes of argument but only one
// .setAttribute('value to be changed', 'the new changed value')    setting attribute of argument


// let arr = [
//     'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?s=612x612&w=is&k=20&c=tSDvNq3h5oTvHeIb0vHOrxQZ7M9RmYC5EOeGeV0r3Qc=',
//     'https://media.istockphoto.com/photos/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage-picture-id1347150429?b=1&k=20&m=1347150429&s=170667a&w=0&h=RKG23YFnuqu8RtEYHBX7xmaJR6uOtb8c0xYCTboMYUw=',
//     'https://media.istockphoto.com/photos/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-picture-id1338737959?b=1&k=20&m=1338737959&s=170667a&w=0&h=Wj4IEck0-UYQquyOfnORvotapuarDJ4fABPDm-9ITV0='

// ]

// let image = document.querySelector('img')
// let n = 0;
// setInterval(function(){
//     image.setAttribute('src' , arr[n]);
//     n=(n+1)%arr.length
// },2000)


//CLASS LIST:
// add        adds class
// remove     removes class
// toggle     acts like a switch on off
//contain     tells if it is present or not
