var orm = require('../.config/orm.js')

var pattie =
{
    selectAll: function(callback)
    {
        orm.selectAll(function(res)
        {
            callback(res);
        });
    },
    insertOne: function(pattie_name, callback)
    {
        orm.insertOne(pattie_name, function (res)
        {
            callback(res);
        });
    },
    updateOne: function(pattie_id, callback)
    {
        orm.updateOne(pattie_id, function (res)
        {
            callback(res);
        });
    }
};

module.exports = pattie;
