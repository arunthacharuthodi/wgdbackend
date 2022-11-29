const express = require('express');
const { default: analytics } = require('./api/analytics');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('aniuvind kk!');
});
// app.get('/analytics', (req, res)=>{
//     res.json({
//         "voltage":19,
//         "current":17,
//         "reporting_time":"17 7 2022 IST"
//     });
    
// })

analytics()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})