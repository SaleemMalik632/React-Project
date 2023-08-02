const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json('You need to enable JavaScript to run this app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod, inventore placeat odit excepturi officiis reprehenderit a praesentium dolores expedita ullam neque nam iure ipsam quos repellat exercitationem corrupti quaerat! This is the mesage form serrver  ');
});

app.post('/SavData', (req, res) =>{
   const Data  = req.body;
  //  const save = await dbfuction(data);  
   console.log(Data);
   res.json(Data); 

})


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});   