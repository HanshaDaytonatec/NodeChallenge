const express = require('express');
const getMovies=require('./public/get_all_movies');
const app=express();

const yargs=require('yargs');


const argv=yargs.options({
    id:{
        demand:true,
        describe:'movies id'
    }
})
    .help()
    .alias('help','h')
    .argv;

app.get('/getMovies',(req,res,callback)=>{
    var results=getMovies(argv.id,function(error, results) {
        if (error) return next(error);
        return res.send(results);
    });
});

var callback=function(data){
    return data;
};
app.listen(3000,() => console.log('Example app listening on port 3000!'));