(function($) {
    var links = jQuery('.all-brand-list a')
    var rs = [];
    links.each(function(index, value) {
        rs.push({
            name: $(this).text(),
            href: $(this).attr('href'),
            index: $(this).closest('div').prev('strong').text()
        });
    });

    console.log(rs);
    //取所有品牌的子分类
    var len = rs.length;
    var curr = 0;
    rs.forEach(function(one, index) {
        console.log('获取第', index, '个::', one.name);
        (function(one, pIndex) {
            $.get(one.href, function(data) {
                console.log('得到第', pIndex, '个::', one.name);
                delete rs[pIndex].href;
                var b = $(data).filter('script');
                b.each(function(index, value) {
                    var html = $(value).html()
                    if (/系列/.test(html)) {
                        var html = html.replace('<script>', '').replace('</script>', '').replace('document.write("', '').replace('")', '').replace(/\\"/g, '"').replace(/\\"/g, '"');
                        var $list = $(html).find('a');
                        var s = [];
                        $list.each(function(i, value) {
                            s.push($(value).text())
                        });
                        rs[pIndex].series = s;
                    }
                });
                curr++;
                if (curr === len) {
                    console.log('获取结束了');
                    console.log(JSON.stringify(rs, null, 4));
                }
            }, 'text');
        })(one, index);
    });
})(jQuery);