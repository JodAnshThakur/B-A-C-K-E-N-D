//-> Jab bhi server request accept karta to us request ko server aur route ke  bick me rok ke app kuck functionalities perform karte ho to use middleware kahte hai <-//

const express = require("express");
const app = express();

//<- app.use(function(req,res,next) is used to put the middleware in which a fun is given, if we dont write the next after the middlework working then the middleware will do its work but it should no pass the request to the server(app.get wali)) --> Sabse pahle middleware hi chalta  hai
app.use(function (req, res, next) {
  console.log("MiddleWare is running broo..");
  next();
});

app.get("/dd", function (req, res, next) {
  res.send("Done");
  return next(new err("Something went wrong")); // man liya error aagya hia to likha
});
app.use((err, req, res, next) => {
  // handlig error
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
