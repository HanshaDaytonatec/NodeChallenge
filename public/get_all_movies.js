/**
 * Created by hansha on 6/5/18.
 */
const connection = require('../connection');

let movies=(id)=>{

    return connection.query(`Select * from movies where id=${id}`)
        .then(function(results){console.log('asdhsakjdkb')});
};

module.exports=movies;

var findUserByUsername = function (username, callback) {
    // Perform database query that calls callback when it's done
    // This is our fake database
    if (!users[username])
        return callback(new Error(
                'No user matching '
                + username
            )
        );
    return callback(null, users[username]);
};
