const express = require("express");
const app = express();

require("dotenv").config();

// import database setup
const connectDB = require("./DB/dbConfig");

//express body parser to enable express read JSON files

app.use(express.json());

//home page
app.get('/',(req, res) =>{
    res.send({
      success : true,
      message : "Welcome to Vox e-commerce firm ",
  
    })
  })


//Category route
app.use("/category", require("./routes/category"));


//items route
app.use("/items", require("./routes/items"));




  //handling errors for non-existing  routes
app.all('*',  (req, res) =>{
    res.status(404).json({ message : "This route does not exist"})
})


  //generic error handler to handle errors from the ebay api
app.use((error, req, res, next) =>{
    res.status(500).json({
        message : error.message
    })
})


//env 
const PORT = process.env.PORT  || 3000;
const MONGO_URI = process.env.MONGO_URI;



//Using Async-await to up server & DB  to force the server from connecting first before the database
const startConnections = async() =>{
    try {
        await connectDB(MONGO_URI);
        app.listen(PORT, () => console.log(`server listening at port:${PORT}`))

    } catch (error) {
        console.error('Unable to connect to the Database ' + error)
    }

}

//initialize connections
startConnections();