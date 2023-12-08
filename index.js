const { Client } = require("@elastic/elasticsearch");
const courseRoutes = require('./routes/courses')
const mongoose = require('mongoose')

// const { createCourses } = require("./routes/createindex");
// const { searchCourses } = require("./routes/Searchindex");
// const { removeCourses } = require("./routes/deleteIndex");
const bodyParser = require('body-parser') 
const express = require('express');
const app = express();

const PORT = 8080;
app.use(bodyParser.json());
require("dotenv").config();


// const elasticClient = new Client({
//   cloud: {
//     id: process.env.ELASTIC_CLOUD_ID, // Use the correct environment variable name
//   },
//   auth: {
//     username: process.env.ELASTIC_USERNAME,
//     password: process.env.ELASTIC_PASSWORD,
//   },
// });
const client = new Client({ node: 'http://localhost:9200' })

app.post("/createpost", async (req, res) => {
  const result = await client.index({
    index: "courses",
    document: {
      title: req.body.title,
      description: req.body.description,
      cost: req.body.cost,
      validity: req.body.validity,
    },
  });

  res.send(result);
});


app.get("/search", async (req, res) => {
  const result = await client.search({
    index: "courses",
    body: {
      query: {
        match_all: {},
      },
    },
  });
  res.json(result);
});


app.delete("/removepost", async (req, res) => {
  const result = await client.delete({
    index: "courses",
    id: req.query.id,
  });
  res.json(result);
});


app.listen(PORT,()=>{
  console.log("sever is running at port 8080")
});
module.exports = client;





// routes
app.use('/api/courses',courseRoutes)


//connected to db
mongoose.connect(process.env.MONGO_URI)
        .then(()=>{

            console.log('connected to database') 

         
        })
        .catch((error)=>{
          console.log(error)
        })