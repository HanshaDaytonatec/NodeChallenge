const express = require('express');
const getAllMovies = require('./public/get_all_movies');
const getMovie = require('./public/get_movie')
const app=express();


app.get('/getAllMovies', (req, res, callback) => {

    getAllMovies(function (error, results) {
        if (error) return callback(error, null);

        return res.send(results);
    });
});

app.get('/getMovie/:id', (req, res, callback) => {
    var id = req.params.id;

    getMovie(id, function (error, results) {
        if (error) return callback(error, null);

        return res.send(results);
    });
});


app.listen(3000, () => console.log('App listening on port 3000!'));