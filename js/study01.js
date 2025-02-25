//data type
//string
console.log('ABC...')
console.log("ABC...")
//Number
console.log(123456)
console.log(115.546)
//Bloolean
console.log(true) //false
//Array
console.log([1,2,3,4,5,'Hello',true])
//Oject
console.log({fullname:'Hom',age:23})
//Null
console.log(null)
//Undefined
console.log(undefined)
//ตัวแปร
var a = 10 //เป็นแบบ Global
let b = 20 //เป็นแบบ Local ใช้ได้เฉพาะใน { } หนึ่งๆ เท่านั้น ***
const c = 30 //ไม่สามานเปลี่ยนค่าได้ เป็นแบบ Local ใช้ได้เฉพาะใน { } หนึ่งๆ เท่านั้น

let data01 = 'Wow...'
let data02 = 123456

//เวลาเอาข้อมูลหลากหลายแบบมาใช้ร่วมกัน
console.log('AAA '+ 555 +'  '+ data01 +'  '+ data02 )

console.log(`AAA ${555}   ${data01}   ${data02}`)