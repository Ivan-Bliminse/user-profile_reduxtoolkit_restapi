const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json()); // incoming data in parse
app.use("/api/user/:id/update", (req, res) => {
  setTimeout(() => {
    res.send(req.body);
  }, 2000);
});

app.listen(8800, () => {
  console.log("Blim Server is Running ");
});
