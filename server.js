const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

app.use(express.json());

const usersRoute = require("./routes/usersRoute");
const busesRoute = require("./routes/busesRoute");
const bookingsRoute = require("./routes/bookingsRoute");

app.use("/api/users", usersRoute);
app.use("/api/buses", busesRoute);
app.use("/api/bookings", bookingsRoute);

//Use the client app
app.use(express.static(`${__dirname}/client/build`));

//Render client for any path
app.get("*", (req, res) =>
  res.sendFile(`${__dirname}/client/build/index.html`)
);

app.listen(5000, () => console.log(`Node server listening on port ${5000}!`));

// const path = require("path");

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//   });
// }
