//CONSTRUCTOR FUNCTION  ---acts as a blue print that is it returns an object whenever the function calling is done along with a special keyword i.e 'new'.
// it is used to create  multiple objects just by calling the function and not hardcoding it . constructor function starts with capital no hard fast and rule.

// when a normal function is called using 'new' keyword he knows he had to return a new object with 
// function User(user,mail){
// this.username = user;
// this.email = mail;

// this.getName = function(){
//     return `my name is ${this.username}`
// }

// }
// const ans = new User('tanshi',"tanshi@gmail.com");
// const ans2 = new User('ayushman',"ayushman@gmail.com");
// console.log(ans);
// console.log(ans2);
// console.log(ans2.getName());



//CLASS SYNTAX -- it is the syntactical sugar(making things in a neater way or good code writing) for constructor function.
class User{  
    constructor(user,mail){                   //no equal to and firts letter capital
    this.username = user;
    this.email = mail;
    
}
getName(){
    return `my name is ${this.username}`
}}


let ans = new User('tanshi',"tanshi@gmail.com");
console.log(ans.username);
console.log(ans.email);
console.log(ans.getName());



class Student extends User{
    constructor(username,email,rollno){             //calling above parameters from constructor to tell ki bc upper sa lena hai.
        super(username,email);          //this keyword calls parameters given in above constructor else constructor funciton is overwrite
        this.rollno = rollno;

    }
}
let ans2 = new Student('tanshi',"tanshi@gmail.com",'50');
console.log(ans2.username);
console.log(ans2.email);
console.log(ans2.rollno);
console.log(ans2.getName());  