import bodyParser from "body-parser";
import express from "express";
import usersRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Homepage!");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
