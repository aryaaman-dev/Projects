const mongoose=require('mongoose');
const Listing=require('../models/listing.js');
const initData=require('./init.js')

const MONGO_URL ='mongodb://127.0.0.1:27017/dayra';
async function main(){
    await mongoose.connect(MONGO_URL)
}

main().then(()=>{
    console.log("Mongose Connection active")
})
.catch((err=>{
    console.log(err);
}))

const initDB=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data)
    console.log('Data is initialised')
}

initDB();