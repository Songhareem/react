const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT || 3001;
const route = require('./routes/index');

app.use(cors());

//app.use('/api', (req, res)=> res.json({username:'bryan'}));
app.use('/api', route);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})