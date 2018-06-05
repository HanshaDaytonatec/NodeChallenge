const connection = require('../connection');

let movies = (callback) => {

    return connection.query(`Select * from movies order by sortOrder ASC`, {type: connection.QueryTypes.SELECT})
        .then(function (results) {
            return callback(null, results)
        });
};

module.exports=movies;


