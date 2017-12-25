const express = require('express');
const app = express();

app.get('/', (req,res) => {
   res.sendFile(__dirname + '/dist/index.html');
});

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080, () =>{
    console.log('Server is started');
});