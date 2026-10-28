const express=require('express')
const app=express();
const mongoose=require('mongoose')
const port=8080;
const methodOverride=require("method-override")
const Listing=require('./models/listing.js')
const path=require('path');
const ejsMate=require('ejs-mate')
const wrapAsync=require("./utils/wrapAsync.js")
const ExpressError=require("./utils/ExpressError.js")
const{listingSchema}=require("./schema.js")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.engine('ejs', ejsMate);

const MONGO_URL ='mongodb://127.0.0.1:27017/dayra';
main().then(()=>{
    console.log("Mongose Connection active")
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL)
}

const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);

    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg)
    }
    else{
        next();
    }
}

// index route

app.get("/listings",wrapAsync(async(req,res)=>{
const allListings=await Listing.find({})
res.render("listings/index.ejs",{allListings})
}))


// new route

app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
})

//create
app.post("/listings",validateListing, wrapAsync(async (req,res,next)=>{
      
        let listing=new Listing(req.body.listing);
        await listing.save();
        res.redirect("/listings")
}))

// Show
app.get("/listings/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}));


// edit
app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}))

//update

app.put("/listings/:id", validateListing, wrapAsync(async(req,res)=>{
   
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}))

//delete
app.delete("/listings/:id",wrapAsync(async(req,res)=>{
let {id}=req.params;
let deletedListing=await Listing.findByIdAndDelete(id);
console.log(deletedListing);
res.redirect("/listings")
}))


app.listen(port,()=>{
    console.log(`port is listening to ${port}`);
})

app.get("/",(req,res)=>{
    res.redirect("/listings");
})



//All
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found!!"))
})

//Error  handling

app.use((err,req,res,next)=>{
let{status=500,message="Something went wrong"}=err;
res.status(status).render("error.ejs",{message})
   // res.status(status).send(message);
})