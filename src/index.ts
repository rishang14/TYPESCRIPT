// variable declaration 

let a = 25;

//a="sad";   in ts this is error but works in js and in browser we can't assign string to int var
alert(a)

let namee: string = "Rishang";
let nambo: boolean;
let another = <string>"Rishang"
// if you want to store either number or string   
let surname: string | number; //union type 
surname = 45;
alert(surname)
surname = "rishang"
alert(surname)


// type aliasis 

type username = string | number

let b: username = 24;
b = "kumar";
// b=false can't assign boolean  to string and number 
const sum = (n: number, m: number) => {
    let a: number = n + m
    alert(`sum of two num: ${a}`)
}
sum(4, 5)

// another method 
type param = (n: number, m: number) => number | void

const sum2: param = (n, m) => {
    console.log(n + m)
}
sum2(3, 4)

// aRRAY IN TS 

// declaration of array  
const c: number[] = [2, 4, 5, 6, 7, 8];
const d: string[] = ["hello"];

// another method  
const arr: Array<string> = ["heeloo", "hii"];
const arr2: Array<number> = [23, 34, 45];
const arr3: Array<number | string> = ["hello", 23, "hi"] //for both 
const arr4: [string, number, string] = ["hii", 20, "hey"] // we can call this fixed sie array or tupple 

// obj in ts   
// type or interface both work same but they are little bit different   but in type we have to use = and in interface we doesn't 
// we can extend interface like  inheritance  but we can do this with type 
interface obj {
    height: number;
    weight: number;
    gender?: string //after adding ? this is optional property otherwise it is mandatory 
}

type funcType = (n: number, m: number) => void
interface newObj extends obj {
    dob: number | string
    //  func?:(n:number,m:number)=>void we can do in  a precise way  
    func: funcType
}

const obj: obj = {
    height: 6,
    weight: 79,
    gender: "male"

}

const obj2: obj = {
    height: 5,
    weight: 50,
    //there is no need for us to declare gender bcz now gender is optional 
}

const obj3: newObj = {
    height: 6,
    weight: 80,
    dob: 14,
    gender: "male",
    func: (n, m) => {
        console.log(n * m)
    }
}
obj3.func(20, 30);

// function in ts   
type funcPara=(n:number,m:number,l?:number)=> number | void
 
const func2:funcPara=(a,b,l)=>{  
    if(typeof l=== "undefined") return  a*b

    return a * b * l

} 
