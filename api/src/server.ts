import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hellow World" });
});

const port = 3333;

app.listen(port, () => {
  console.log("Server Running 🏎  on ", port);
});
