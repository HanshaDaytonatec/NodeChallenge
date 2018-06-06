const connection = require('../connection');

let movie = (id, callback) => {

    return connection.query(`Select * from movies where id=${id}`)
        .then(function (results) {
            return callback(null, results[0])
        })
        .catch(function (error) {
            callback(error, null);
        });
};

module.exports = movie;