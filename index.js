import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:4000${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");

const handleProfile = (req, res) => res.send("You are on my profile"); //arrow function

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);
