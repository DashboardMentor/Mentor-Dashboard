const dbConnect = require('./mongodb')

const insert = async()=>{
    const db = await dbConnect()
    // console.log(db)
    const result = db.insert(
        {name:"cars", brand:"BMW"}
    )
    console.log(result)
}
    
insert()