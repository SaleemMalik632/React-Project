const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: " Hello from server!   You need to enable JavaScript to run this app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod, inventore placeat odit excepturi officiis reprehenderit a praesentium dolores expedita ullam neque nam iure ipsam quos repellat exercitationem corrupti quaerat!   this requesr is commpi for the serve r " });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});   