//value of variable
let date1 = 'Hello';
let date2 = 20;
let date3 = true;
//index of number 0 1 2 3 4
let date4 = [10,20,30,40,50];
let date6 = ['John',20,true] //ไม่แนะนำ
let date7 = ['John','Manee','blue']
let date5 ={
    fullname:'Hom',
    age:24,
    status:true,
    color:['red','green','blue'],
    address:{
        no: '10/5',
        soi:'Soi 10',
        street:'Petchakasem',
        province:'Bangkok'
    }
}

let data8 = null;
let date9;

console.log(date8)
console.log(date9)
console.log('-------')
console.log(date5.fullname)
console.log(date5.status)
console.log(date5.color[1])
console.log(date5.address.street)
console.log('-------')


console.log(date1)
console.log(date2)
console.log(date3)
console.log('-------')
//เข้าถึงข้อมูลแต่ละตัวของ array
console.log(date4[2])
console.log(date4[4])
date4[2] = 333
console.log(date4[2])
console.log('-------')
//เข้าถึงข้อมูลทุกตัวของ array
date4.forEach((value)=>{
    console.log(value*10)
})
