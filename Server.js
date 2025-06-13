const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
const userRoutes = require("./routes/userRoutes");
app.use("/users",userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send("Welcome to My Modular API");;
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`); 
});
