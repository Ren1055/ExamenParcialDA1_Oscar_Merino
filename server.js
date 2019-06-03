const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/styles',express.static('styles'));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.listen(3000,()=>{
    console.log('Server is ready and runnin on port 3000');
});
app.get('/',(req,res)=>{
    res.render('tableroPrincipal.html');
});
app.get('/tablero',function(req,res){
    res.render('tableroPrincipal.html');
});