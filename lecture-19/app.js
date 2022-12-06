//CLOSURE-- a function bundeled together with referance to its lexicual environment is known as closure.(agar iss mai abc = something hota toh vo return nhi hota ccuz iss mai sirf dependent variiable hi hoga closure mai)

// function func(){
//     let name = "samarth vohra";
//     function printName(){
//         console.log(name)
//     }
//     return printName;

    
// }
// let ans = func();
// console.log(ans);
// ans();



// USES OF CLOSURE:       (objects and method uses colon)
// before introducing closure private methods and properties to use it was introduced.

// function func(){
//     let count=0;
//     return {
//         // count:0,
//         getCount: function(){
//             // return this.count;
//             return count;
//         }
//     }
// }
// let ans = func();
// console.log(ans.getCount());
// ans.count = 100;
// console.log(ans.getCount());



//PROTOTYPES--is also an object whenever an object is created object.prototype is also created with it,this prototype is known as fall back method.
let todo={
    title : 'we go jim',
    fun : function(){
        return `you have to ${this.title}`
    }
}
console.log(todo.title);
console.log(todo.fun());
// console.log(todo.samrath());            //gives error cuz not defined but toString creats object
console.log(todo.toString());

console.log(todo.__proto__) ;                          //tender proto--  ".__proto__"takes to parent
//this means todo.__proto__ == Object.prototype
// Object.prototype.__proto__ === null   (object.prototype ka bhi parent)
//PROTOTYPAL CHAIN : arr ---> object --->array.prototype--->object.prototype --->null  
// String --> object --->string.prototype--->object.prototype ---> null


//CHECK GALLERY FOR FLOWCHART


