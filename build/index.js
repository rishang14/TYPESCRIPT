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
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
const rishang = new player(187, 79);
// rishang.height; 
// rishang.weight; 
console.log(rishang.weight);
