var orm = require('../config/orm.js')

var patty =
{
    selectAll: function(callback)
    {
        orm.selectAll(function(res)
        {
            callback(res);
        });
    },
    insertOne: function(patty_name, callback)
    {
        orm.insertOne(patty_name, function (res)
        {
            callback(res);
        });
    },
    updateOne: function(patty_id, callback)
    {
        orm.updateOne(patty_id, function (res)
        {
            callback(res);
        });
    }
};

module.exports = patty;
