const express = require('express')
const app = express()

export const analytics = app.get('/analytics', (req, res)=>{
    res.json({
        "voltage":19,
        "current":17,
        "reporting_time":"17 7 2022 IST"
    });
    
})

