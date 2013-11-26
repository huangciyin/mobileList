define(function(require, exports, module) {
    var list = {};
    var datas = require('./data.js');
    // get all brands
    list.getBrands = function(letter) {
        return (function() {
            var lists = [];
            for (var i = 0; i < datas.length; i++) {
                if (letter) {
                    if (datas[i]['index'].toLowerCase() === letter.toLowerCase()) {
                        lists.push(datas[i]['name']);
                    }
                } else {
                    lists.push(datas[i]['name']);
                }
            }
            return lists;
        })();
    };
    // get series by brand
    list.getSeries = function(name) {
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].name === name) {
                return datas[i].series;
            }
        }
    };

    module.exports = list;
});