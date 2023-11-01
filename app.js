// let a = 23;
// console.log(a);
// let x:string;
// x="hello"
// console.log(x);
// let a =(x,y)=>{x+y};
// console.log(a);
// var b =(x:number,y:number)=>x+y;
// console.log(b(3,5));
// ======> array in ts
// var arr = [10,20,30,"hello","world",true,false]
// console.log(arr);
// let arr: [number,number,number,string,string,boolean?,boolean?] = [10,20,30,"hello","world",true,false]
// console.log(arr);
var arr = [10, 20, "hello", "world"];
console.log(arr);
// let arr:[number,string,boolean?]=[10,"hello"]
// console.log(arr);
// arr.push(true)
// console.log(arr);
// ======> object in ts
// let person = {
//     name:"hello",
//     age:23
// }
// console.log(person);
// ===>
// type obj = {
//     name? : string | number,
//     age? : number,
//     email? : string
// }
// var person: obj= {
//     name:"hello",
//     age:12
// }
// person.email= "hello@test.in";
// console.log(person);
// =====>
// var person:{name?: string, age:number,password?:string|number} = {
//     name:"hello",
//     age:13
// }
// person.password = 1234;
// console.log(person);
