console.log('ABC...')
console.log("ABC...")
console.log(123456)
console.log(115.546)
console.log(true)

//ตัวแปร
var a = 10 //เป็นแบบ Global
let b = 20 //เป็นแบบ Local ใช้ได้เฉพาะใน { } หนึ่งๆ เท่านั้น ***
const c = 30 //ไม่สามานเปลี่ยนค่าได้ เป็นแบบ Local ใช้ได้เฉพาะใน { } หนึ่งๆ เท่านั้น

let data01 = 'Wow...'
let data02 = 123456

//เวลาเอาข้อมูลหลากหลายแบบมาใช้ร่วมกัน
console.log('AAA '+ 555 +'  '+ data01 +'  '+ data02 )

console.log(`AAA ${555}   ${data01}   ${data02}`)