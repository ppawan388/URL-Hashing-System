const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

const PORT = 5000;
app.use(cors());
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin",
              "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ,"*");
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
    return res.status(200).json({});
  }

  next();
});
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
