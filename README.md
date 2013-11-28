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
```javascript
getBrands();
```
```json
["100+","139易","21克","奥克斯","阿尔卡特","Acer宏碁","ATET","爱国者","altek","艾美讯","阿尔法","AGM","AFTI","博沃","北斗","BFB","波导","邦华","百度","百度卡美欧","博迪","笔电锋","贝尔丰","长虹","CECT","CHER","创维","大可乐","朵唯","deovo","鼎瑄","戴尔","东信","多普达","多美达","迪士尼","电意","东芝","迪奥","大唐电信","DigiTalk","大显","飞利浦","泛泰","凡尔纳","斐讯通信","富士通","锋达通","烽火","果壳电子","国虹","谷歌","高新奇","港利通","国信通","高斯贝尔","Getac","HTC","黑莓","华为","海信","HIKe","海尔","华硕","华世基","恒基伟业","惠普","弘谷电","豪特","华录","华蜀","华银","衡天越","和信","华信","innos","iwoo","ITG","Intel","i-mate","INQ","金立","经纬","基伍","佳域","京瓷","技嘉","金鹏","佳通","酷比","酷派","康佳","垦鑫达","卡西欧","联想","LG","lephone","里奥","蓝天信","乐派","雷萨","乐目","摩托罗拉","魅族","明泰","MANN","美莱仕","美图秀秀","摩奇","美晨","铭仁","美奇","明基","摩西","MOPS","美迪欧","诺基亚","努比亚","Newsmy纽曼","尼凯恩","尼彩","NO.1","诺亚信","OPPO","欧盛","欧新","欧比","欧恩","欧奇","欧达","欧博信","O2","欧谷","苹果","POMP","Palm","普莱达","青橙","QUEST","七喜","齐乐","Runbo","RIM","锐合","三星","SUGAR","索尼移动","首派","sonim","seals","首信","神舟","萨米","山水","尚合","世纪鼎利","盛泰","山寨手机","盛隆","首亿","盛大","天语","ThL","TCL","天迈","同洲","泰丰","泰克飞石","天丽","天勤","UT斯达康","vivo","VEB","VINUS","VOTO","VEVA","微软","闻尚","WEE","网易","唯科","伟恩","万利达","网尔","小米","现代手机","小辣椒","小宇宙","夏新","先锋","小采","小蜜蜂","小酷","小霸王","迅雷","夏朗","西铂","夏普","云台","优米","优思","云狐","英特奇","影驰","优美","Yahoo","优派","亚马逊","易丰","优珀","宇达电通MIO","英华达","亿通","友派","中兴","中恒","卓普","中国移动","臻爱","知己迅联","中天","卓拉"]
```

```javascript
getBrands('x');
```

```json
[
    "小米",
    "现代手机",
    "小辣椒",
    "小宇宙",
    "夏新",
    "先锋",
    "小采",
    "小蜜蜂",
    "小酷",
    "小霸王",
    "迅雷",
    "夏朗",
    "西铂",
    "夏普"
]
```

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

```json
[
    {
        "name": "小米M2",
        "pic": "http://i2.prosmall.fd.zol-img.com.cn/t_s120x90/g4/M09/00/0D/Cg-4WVCY3_WIITwUAAAUq39Dm1wAABDHgPDbjMAABTD432.jpg",
        "stop": false,
        "concept": false
    },
    {
        "name": "小米2A",
        "pic": "http://2b.zol-img.com.cn/product_small/4_120x90/167/ce62xAAImfLA.jpg",
        "stop": false,
        "concept": false
    },
    {
        "name": "小米M3（Mi3/电信版）",
        "pic": "http://2b.zol-img.com.cn/product_small/4_120x90/821/ceyaj3IUZYGeY.jpg",
        "stop": false,
        "concept": false
    },
    {
        "name": "小米Mione 1S",
        "pic": "http://i1.prosmall.fd.zol-img.com.cn/t_s120x90/g3/M0B/02/0B/Cg-4V1CaLAaIVGg2AAAcUk2xAO4AABKoAFhee0AABxq181.jpg",
        "stop": false,
        "concept": false
    },
    {
        "name": "小米M1（MIUI）",
        "pic": "http://i5.prosmall.fd.zol-img.com.cn/t_s120x90/g4/M08/0E/04/Cg-4WVCkrCuIZ7i3AAAW2WJzq9kAAB44QJCGn8AABbx745.jpg",
        "stop": false,
        "concept": false
    },
    {
        "name": "小米红米手机",
        "pic": "http://2d.zol-img.com.cn/product_small/4_120x90/393/cecYIeBVkXpWk.jpg",
        "stop": false,
        "concept": false
    },
    {
        "name": "小米M3（Mi3/移动版）",
        "pic": "http://2a.zol-img.com.cn/product_small/4_120x90/820/ceUHZZFvWGdZI.jpg",
        "stop": false,
        "concept": false
    },
    {
        "name": "小米2S",
        "pic": "http://2d.zol-img.com.cn/product_small/4_120x90/163/ceKj8QqkbPisE.jpg",
        "stop": false,
        "concept": false
    },
    {
        "name": "小米M3（Mi3/联通版）",
        "pic": "http://2f.zol-img.com.cn/product_small/4_120x90/819/ce2zuhqhoNFzE.jpg",
        "stop": false,
        "concept": false
    }
]
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