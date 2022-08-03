const express = require("express");
const cors = require("cors");

const listingRouter = require("./routers/listing");

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/listings", listingRouter);

app.listen(PORT, () =>
  console.log(`Server REAL ESTATE running on port :${PORT}`)
);
