//Exception Handling: Error/Exception
//try-catch
//try-catch-finally

try{
    let data1 = 'Hello'
    console.log(data1)
}catch(err){
    console.log('พบปัญญหาการทำงานติดต่อแอดมิน')
    //console.log(err)
    //console.log(err.name)
    console.log(err.message)
    //console.log(err.stack)
}finally{
    console.log('ขอบคุณที่ใช้บริการ')
}

