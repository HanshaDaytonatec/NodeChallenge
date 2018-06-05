/**
 * Created by hansha on 6/5/18.
 */
const connection = require('../connection');

let movie = (id, callback) => {

    return connection.query(`Select * from movies where id=${id}`)
        .then(function (results) {
            return callback(null, results)
        });
};

module.exports = movie;
