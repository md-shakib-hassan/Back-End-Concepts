const express = require("express");
const app = express();
const phones = require("./phones.json")
const port = 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! ');
});

app.get('/data', (req, res) => {
  res.send('Hello World form data!');
});

app.get("/phones",(req, res)=>{
  res.send(phones);
  // console.log()
})

app.get("/phones/:id",(req,res)=>{

  const id = parseInt(req.params.id); 
  const result = phones.find(phone => id === phone.id) 
  res.send(result)
  // console.log(result)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});