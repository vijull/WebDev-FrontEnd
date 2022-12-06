// let person = {
//     name:'sushant',     //name is key and sushant is value and this whole thing is a property
//     age: 12 ,
//     isMale: true,
//     marks: function(){
//         return 80-10-20;
//     }
// }
// console.log(person.marks());
// console.log(person.name);
// console.log(person.isMale);
// console.log(person.age);
// console.log(person);

// console.log(person[name]); // undefined
// console.log(person['name']);  // this works 
//                                             // by default browser saves key as string

//let person2 = person;
// console.log(person2.name)
//person2.name = 'simran';              //by default referance pass hota hai
// console.log(person2.name)
// console.log(person.name)


// let person3 = {
//     pa:0,
//     web:40,
//     marks: function(){
//         return this.pa
//     }                              //"this" points towards object which is person3 not method which is pa,web , marks

// }
// console.log(person3.marks())

                                        // ******* everthing inside js is object 

// let str = 'samarth vohra'
//                       // length is a property not a method 
// // console.log(str.length());
// // console.log(str.length);

// let ans = str.toUpperCase();
// console.log(ans);
// console.log(str);


let strr = '                                  samarth vohra                   ';
let ans = strr.trim();
console.log(ans);
console.log(ans.length);
console.log(strr);
console.log(strr.length);