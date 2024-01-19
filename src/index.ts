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
type funcPara = (n: number, m: number, l?: number) => number | void

const func2: funcPara = (a, b, l) => {
    if (typeof l === "undefined") return a * b

    return a * b * l

}

// functions   
type functyoe = (...n: Array<number>) => Array<number | string>

const func3: functyoe = (...n) => {
    console.log(n)
    n.forEach(item => {
        console.log(item)

    })
    return n
}

func3(25, 34, 34, 4, 4, 5, 4)
const i = func3(33);
console.log(i)

// function with objects 
interface product {
    name: string,
    stock?: number,
    photo: string,
    age: number
    readonly id: string
}

type getData = (product: product) => void

const obj4: getData = (product) => {
    //    product.id="asd"  we can't modify it bcz it is read only 
    // product.name="Gabru"  by accessing this we can vchange its value
    console.log(product)
}
const productone: product = {
    name: "Rishang",
    photo: "profile",
    age: 20,
    id: "afsasdf"
}
obj4((productone));
obj4({
    name: "aPPLE",
    stock: 22,
    age: 4,
    photo: "apple",
    id: "asfdf"
})


//  Never type  

const error = (): never => {
    throw new Error()
    // return new Error() can't bcz type is error 
}


// classes in typescript 

// basic class in js 

class player {
    constructor(
        private height: number,
        weight: number,
        protected power: number

    ) { }

    get myheight() {
        return this.height
    }

    get mypower() {
        return this.power
    }

    set heightagain(val: number) {
        this.height = val

    }

}
// const rishang=new player(187,79) ; 
// rishang.height; 
// rishang.weight; 
const rishang = new player(1000, 225, 100000)
console.log(rishang.myheight)
// console.log(rishang.height) can't access bcz its private  
console.log(rishang)
console.log(rishang.heightagain = 23)


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
const btn = document.getElementById("btn")!
btn.onclick = () => {
    btn.innerText = "clicked"
}
const form = document.getElementById("myform") as HTMLFormElement
const input = document.querySelector("input") as HTMLInputElement
const h2 = document.getElementById('number')!

form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(input.value)
    let sum = 20
    const total = value + sum
    h2.textContent = total.toString()

}

//  interface obj5{
//     name:string, 
//     email:string
//  } 
//  const obj5:obj5={
//     name:"rishang", 
//     email:"rishangkumar9693@gmail.com"
//  } 

//   const geteamil=():string=>{
//     return obj5.name
//   }  

//   const getName=():string=>{
//     return obj5.name
//   } 

//   const getData=(key:string):string=>{ 
//     return obj5[key]

//   } 
// in the above example we are getting error  
interface obj5 {
    //    [key:string]:string 
    name: string,
    email: string
}

const obj5: obj5 = {
    name: "rishang",
    email: "rishangkumar9693@gmail.com",


}
const key = "name"
obj5[key as keyof obj5]

const getName = (): string => {
    return obj5["name"]
}

const getEmail = (): string => {
    return obj5["email"]
}

const getData = (key: keyof obj5): string => {
    return obj5[key]
}
console.log(getEmail())
console.log(getName())
console.log(getData("name"))
console.log(getData("email"))

// utility type 

// partial type  

type User = {
    name: string,
    email: string
}

// partial type if we want that property like optinal then we can use partial type  

type user2 = Partial<User>

// required  
type user3 = Required<user2> // OPPPOSITE of partial everything is required  

const user: Required<user2> = {
    name: "Rishang",
    email: "rishangkumar9693@gmail.com"
}

interface userInfo {
    age: number
    dob: number | string
}
type usernames = "harry" | "levi" | "Rishang" | "jalaj"

const user5: Record<username, userInfo> = {
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

} 
 
// pick 
interface orderInfo{
    readonly id:string, 
    city:string, 
    state:string, 
    status:string, 
} 
 
type shippingInfo=Pick<orderInfo,"city"|"state" | "status">  
 
const user6:shippingInfo={
    city:"Samastipur", 
    state:"bihar",  
    status:"completed"

} 
 
// omit  =>  opposite to pick  like in pick we write which we want to pick and in this we write which we want to leave  
 
// Exclude 
 
//  generics   in ts 
 
const func = <Custom>(n:Custom):Custom=>{   //basically we are making genric here  
    //  we use  T basically   bcz it is used in the industry 
    let v:Custom; 
    return n

}
  
const ans=func(2)
const ans1=func("baa") 
const ans2= func(true)

// now after wirting variablew name we can also access their feauture 
// example  
// ans. we can access all the number func 
// ans1. we can access  the string feature  
 
//   we can also pass multiple gneric like this  
 
const func4= <T, U>(n:T , o:U): {n:T,o:U}=>{ 
    return {n,o}

} 
 
const ans4=func4<number,string>(20,"hello"); 
 
// we can access key values  like using . property  also  
 
// extends in generic   
type Person={
    name:string, 
    age:number
}
  
type Person2={
    name:string, 
    age:number, 
    email:string
} 
 
const Person:Person={
    name:"rishang", 
    age:20
}
  
const Person2:Person2={
    name:"rishang", 
    age:30, 
    email:"rishang@gmail.com"
}
  


const func5 = <T,U extends T>(n:T,o:U):{n:T,o:U}=>{ 
     return {n,o}

} 

const ans5= func5<Person,Person2>(Person,Person2)  
// by looking at the above example extends means the pervious property should be there and u can also add additional also  
 
 
//  high lvl example  
type user={
    name:string, 
    age:number, 
} 
 
const users:user[]=[ 
    {
        name:"rishang", 
        age:300, 
     }, 
    {
        name:"jalaj", 
        age:10, 
     }, 
    {
        name:"paras", 
        age:200, 
     }, 
    {
        name:"harry", 
        age:10, 
     } 
] 
 
const func6= <T ,K extends keyof T>(user:T[],property:K ,value:T[K])=>{ 
      
  return  user.filter(item=> item[property]=== value)

} 

 
const filterPersonByName=func6(users,"name","rishang");  
const filterPersonByAge= func6(users,"age",10)
console.log(filterPersonByAge) 
filterPersonByAge.map(item => console.log(item.name))