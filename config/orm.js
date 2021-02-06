var connection = require('../config/connection.js')

var orm =
{
    selectAll: function(callback)
    {
        connection.query('SELECT*FROM patty',function(err,result)
        {
            if(err)throw err;
            callback(result);
        });
    },

    insertOne: function(patty_name, callback)
    {
        connection.query('INSERT INTO patty SET ?',
        {
            patty_name: patty_name,
            devoured: false,
        }, function(err, result)
        {
            if(err) throw err;
            callback(result);
        });
    },

    updateOne: function(pattyID, callback)
    {
        connection.query('UPDATE patty SET ? WHERE ?',[{devoured: true},{id:pattieID}],
        function(err,result)
        {
            if(err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;
