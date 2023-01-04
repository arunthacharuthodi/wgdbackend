const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('2000000000');
});
app.get('/analytics', (req, res)=>{
     res.json({
         "voltage":19,
         "current":17,
         "reporting_time":"17 7 2022 IST"
  });
    
});
// app.post("/duty_cycle", function(req, res) { 
//   var num1 = Number(req.body.duty); 
//   res.send("duty cycle changed successfully"); 
// }); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
