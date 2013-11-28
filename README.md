# mobileList

---

[![Build Status](https://secure.travis-ci.org/airyland/mobileList.png)](https://travis-ci.org/airyland/mobileList)
[![Coverage Status](https://coveralls.io/repos/airyland/mobileList/badge.png?branch=master)](https://coveralls.io/r/airyland/mobileList)


手机品牌、型号列表

---

数据采集于：ZOL产品报价手机频道 http://detail.zol.com.cn/cell_phone_index/subcate57_list_1.html

默认排名采集于：ZOL手机品牌排行榜 http://top.zol.com.cn/compositor/57/manu_attention.html

## 使用说明


## API


### getBrands 

获取所有品牌,带字母参数时为获取指定首字母开头的品牌

### getSeries(name,opt filter)

获取品牌的型号，参数1为品牌名,参数2为过滤器，可以对属性进行过滤。

一个型号的数据是这样的，可以自定义过滤器过滤不需要的型号。

```json
    {
        "name": "小米M2", // 名字
        "pic": "http://i2.prosmall.fd.zol-img.com.cn/t_s120x90/g4/M09/00/0D/Cg-4WVCY3_WIITwUAAAUq39Dm1wAABDHgPDbjMAABTD432.jpg", // 缩略图
        "stop": false, // 已经停产
        "concept": false // 概念版 
    }
```

```javascript
getSeries('小米',function(series){
    return series.concept===false && series.stop ===true
});
```

### getSimpleSeries

同上，不过只返回所有型号字符串列表 

```json
[
    "小米M2",
    "小米2A",
    "小米M3（Mi3/电信版）",
    "小米Mione 1S",
    "小米M1（MIUI）",
    "小米红米手机",
    "小米M3（Mi3/移动版）",
    "小米2S",
    "小米M3（Mi3/联通版）"
]
```