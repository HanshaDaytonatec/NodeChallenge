/**
 * Created by hansha on 6/5/18.
 */
const connection = require('../connection');

let movies = (callback) => {

    return connection.query(`Select * from movies order by sortOrder ASC`)
        .then(function (results) {
            return callback(null, results)
        });
};

module.exports=movies;


