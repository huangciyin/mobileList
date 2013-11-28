(function() {
    // 获取分页面数据
    var get = function(cat, page) {
        //获取页面
        $.get('http://detail.zol.com.cn/' + cat + page + '.html', function(data) {
            if (/对不起，暂时没有/.test(data)) {
                console.log(page + '没有了');
                console.log(rs);
                return;
            } else {
                console.log('当前第', page, '页')
                var current = $(data).find('.pagebar>.sel').text();
                var hasNext = !! $(data).find('.pagebar>.sel').next('a').length;
                console.log(current, hasNext);

                if (!hasNext) {
                    console.log('结束获取了')
                }


                var $list = $(data).find('.list-box>.list-item');
                var brand = $(data).find('h1').text().replace('手机大全报价', '').replace('手机报价', '');
                $list.each(function(index, one) {
                    var $one = $(one);
                    var title = $one.find('.pro-intro h3').text();
                    var img = $one.find('.pic-box a>img').attr('src');
                    var stop = $one.html().indexOf('停产') !== -1;
                    var concept = /概念产品/.test($one.html());

                    var pIndex;

                    console.log('brand is ', brand);


                    rs.forEach(function(one, index) {
                        if (one.name.indexOf(brand) !== -1) {
                            pIndex = index;
                            return;
                        }
                    });

                    if (!pIndex) {
                        rs.forEach(function(one, index) {
                            if (brand.indexOf(one.name) !== -1) {
                                pIndex = index;
                                return;
                            }
                        });
                    }

                    rs[pIndex].series = rs[pIndex].series || [];
                    var series = {
                        name: title,
                        pic: img,
                        stop: stop,
                        concept: concept
                    };

                    console.log(series)
                    rs[pIndex].series.push(series);
                });

                if (hasNext) {
                    get(cat, (current * 1 + 1));
                }
            }
        });
    }


    // 获取品牌列表

    window.rs = rs = [];
    var links = jQuery('.all-brand-list a')
    links.each(function(index, value) {
        rs.push({
            name: $(this).text(),
            href: $(this).attr('href').replace('1.html', ''),
            index: $(this).closest('div').prev('strong').text()
        });
    });


    //return;
    rs.forEach(function(one, index) {
        get(one.href, 1)
    });
})();
