//Operator ตัวดำเนินการ
//+ - * / % ** --
console.log(10**20);

// == != === !=== > < >= <=
// !! & !!
let a = 10;
let b = "10";

//Python: a + b จะได้ Error
//JAVA: a + b  จะได้ 1010
//javascript: a+ b  จะได้ 20

//let c = a + b
console.log(a*b);

//เปรียบว่าเท่ากันใช่ไหม
console.log(a == b); //ไม่สนใจ type
console.log(a === b); //สนใจ type

//เปรียบว่าไม่เท่ากันใช่ไหม
console.log(a != b); //ไม่สนใจ type
console.log(a !== b); //สนใจ type

a ='hello'
console.log('Bangna' < 'Bangkok')
// ternay Operator ***
//____?____:____
// เงื่อนไข ? ทำเมื่อจริง : ทำเมื่อเท็จ
 
let score = 45;
let grade = score > 55 ? 'A' : 'B'
console.log(grade)
//Nullish Operator
//____??____
//หน้าเครื่อหมาย??ไม่เป็น null หรือ undefined จะได้ค่านั้นเลย
let data1 = null
console.log(data1 ?? 'Hi...')
let data2 = 'Wow wow wow'
console.log(data2 ?? 'Hello...')