define(function(require, exports, module) {
    // filter support
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(fun /*, thisp*/ ) {
            var len = this.length;
            if (typeof fun != "function")
                throw new TypeError();
            var res = new Array();
            var thisp = arguments[1];
            for (var i = 0; i < len; i++) {
                if (i in this) {
                    var val = this[i]; // in case fun mutates this
                    if (fun.call(thisp, val, i, this))
                        res.push(val);
                }
            }
            return res;
        };
    }

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
    list.getSeries = function(name, filter) {
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].name === name) {
                var series = datas[i].series;
                var filteredSeries = series.filter(function(one) {
                    return one.concept === false;
                });

                if (filter) {
                    return filteredSeries.filter(filter);
                } else {
                    return filteredSeries;
                }
            }
        }
    };

    //get simple series data by brand

    list.getSimpleSeries = function(name, filter) {
        var series = this.getSeries(name, filter);
        var rs = [];
        for (var i = 0; i < series.length; i++) {
            rs.push(series[i].name);
        }
        return rs;
    };
    module.exports = list;
});