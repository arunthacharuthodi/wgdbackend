const express = require('express');
const app = express()
const port = 3000
var current_duty = 0;
app.use(express.json());

app.get('/', (req, res) => {
  res.send("this is server root bitch")
});
app.get('/analytics', (req, res)=>{
     res.json({
         "voltage":19,
         "current":17,
         "reporting_time":"17 7 2022 IST"
  });
    
});



app.get('/get_duty', (req, res)=>{
  res.send(current_duty.toString());
 
});

app.post('/update_duty',function (req, res){
  current_duty = req.body.duty;
  console.log(current_duty);
});

 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
