"use strict";
// variable declaration 
let a = 25;
//a="sad";   in ts this is error but works in js and in browser we can't assign string to int var
alert(a);
let namee = "Rishang";
let nambo;
let another = "Rishang";
// if you want to store either number or string   
let surname; //union type 
surname = 45;
alert(surname);
surname = "rishang";
alert(surname);
let b = 24;
b = "kumar";
// b=false can't assign boolean  to string and number 
const sum = (n, m) => {
    let a = n + m;
    alert(`sum of two num: ${a}`);
};
sum(4, 5);
const sum2 = (n, m) => {
    console.log(n + m);
};
sum2(3, 4);
// aRRAY IN TS 
// declaration of array  
const c = [2, 4, 5, 6, 7, 8];
const d = ["hello"];
// another method  
const arr = ["heeloo", "hii"];
const arr2 = [23, 34, 45];
const arr3 = ["hello", 23, "hi"]; //for both 
const arr4 = ["hii", 20, "hey"]; // we can call this fixed sie array or tupple 
const obj = {
    height: 6,
    weight: 79,
    gender: "male"
};
const obj2 = {
    height: 5,
    weight: 50,
    //there is no need for us to declare gender bcz now gender is optional 
};
const obj3 = {
    height: 6,
    weight: 80,
    dob: 14,
    gender: "male",
    func: (n, m) => {
        console.log(n * m);
    }
};
obj3.func(20, 30);
const func2 = (a, b, l) => {
    if (typeof l === "undefined")
        return a * b;
    return a * b * l;
};
const func3 = (...n) => {
    console.log(n);
    n.forEach(item => {
        console.log(item);
    });
    return n;
};
func3(25, 34, 34, 4, 4, 5, 4);
const i = func3(33);
console.log(i);
const obj4 = (product) => {
    //    product.id="asd"  we can't modify it bcz it is read only 
    // product.name="Gabru"  by accessing this we can vchange its value
    console.log(product);
};
const productone = {
    name: "Rishang",
    photo: "profile",
    age: 20,
    id: "afsasdf"
};
obj4((productone));
obj4({
    name: "aPPLE",
    stock: 22,
    age: 4,
    photo: "apple",
    id: "asfdf"
});
//  Never type  
const error = () => {
    throw new Error();
    // return new Error() can't bcz type is error 
};
// classes in typescript 
// basic class in js 
class player {
    constructor(height, weight, power) {
        this.height = height;
        this.power = power;
    }
    get myheight() {
        return this.height;
    }
    get mypower() {
        return this.power;
    }
    set heightagain(val) {
        this.height = val;
    }
}
// const rishang=new player(187,79) ; 
// rishang.height; 
// rishang.weight; 
const rishang = new player(1000, 225, 100000);
console.log(rishang.myheight);
// console.log(rishang.height) can't access bcz its private  
console.log(rishang);
console.log(rishang.heightagain = 23);
// class theGirlRishangIsFinding {
//     constructor(
//         public past:string, 
//         public isSheWearSpecs:boolean,
//         readonly herLoyalty:String,  
//         private mineSecret:string
//     ){} 
//     get getMySecret(){
//        return  this.mineSecret
//     }
// } 
// const RishangProposedher=new theGirlRishangIsFinding("clean",true,"towardsRishang","safe") 
// RishangProposedher.herLoyalty="towardsXyz"  //not possible to change bcz it is read only 
// console.log(RishangProposedher.minesecret) // not possible to access by anyone except rishang  
// Dom in ts 
//  type assertion  
// there are three ways to tell ts  
// 1 const btn=document.getElementById('btn') as HTMLElement   
// 2 const btn= <HTMLElement> document.getElementById("btn"); 
const btn = document.getElementById("btn");
btn.onclick = () => {
    btn.innerText = "clicked";
};
const form = document.getElementById("myform");
const input = document.querySelector("input");
const h2 = document.getElementById('number');
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(input.value);
    let sum = 20;
    const total = value + sum;
    h2.textContent = total.toString();
};
const obj5 = {
    name: "rishang",
    email: "rishangkumar9693@gmail.com",
};
const key = "name";
obj5[key];
const getName = () => {
    return obj5["name"];
};
const getEmail = () => {
    return obj5["email"];
};
const getData = (key) => {
    return obj5[key];
};
console.log(getEmail());
console.log(getName());
console.log(getData("name"));
console.log(getData("email"));
const user = {
    name: "Rishang",
    email: "rishangkumar9693@gmail.com"
};
const user5 = {
    harry: {
        age: 19,
        dob: 16
    },
    levi: {
        age: 20,
        dob: 11
    },
    Rishang: {
        age: 20,
        dob: 14
    }, jalaj: {
        age: 21,
        dob: "feb"
    }
};
const user6 = {
    city: "Samastipur",
    state: "bihar",
    status: "completed"
};
// omit  =>  opposite to pick  like in pick we write which we want to pick and in this we write which we want to leave  
// Exclude 
//  generics   in ts 
const func = (n) => {
    //  we use  T basically   bcz it is used in the industry 
    let v;
    return n;
};
const ans = func(2);
const ans1 = func("baa");
const ans2 = func(true);
// now after wirting variablew name we can also access their feauture 
// example  
// ans. we can access all the number func 
// ans1. we can access  the string feature  
//   we can also pass multiple gneric like this  
const func4 = (n, o) => {
    return { n, o };
};
const ans4 = func4(20, "hello");
const Person = {
    name: "rishang",
    age: 20
};
const Person2 = {
    name: "rishang",
    age: 30,
    email: "rishang@gmail.com"
};
const func5 = (n, o) => {
    return { n, o };
};
const ans5 = func5(Person, Person2);
const users = [
    {
        name: "rishang",
        age: 300,
    },
    {
        name: "jalaj",
        age: 10,
    },
    {
        name: "paras",
        age: 200,
    },
    {
        name: "harry",
        age: 10,
    }
];
const func6 = (user, property, value) => {
    return user.filter(item => item[property] === value);
};
const filterPersonByName = func6(users, "name", "rishang");
const filterPersonByAge = func6(users, "age", 10);
console.log(filterPersonByAge);
filterPersonByAge.map(item => console.log(item.name));
