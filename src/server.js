const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4040;

const mockRoutes = require("./routes/mock.routes");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/", mockRoutes);

// server
app.listen(port, () => console.log("its running at " + port));