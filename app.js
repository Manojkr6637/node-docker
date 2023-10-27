const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => (
    res.json({
        message:`{Node started at ${PORT}`
  })
));

app.listen(PORT, () => { 
  console.log(` listening on ${PORT}`)
});