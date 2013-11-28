# 演示文档

---

````javascript
seajs.use('mobileList', function(mobileList){
    var brands = mobileList.getBrands();
    jQuery('#box1').text(JSON.stringify(brands));
    var mis = mobileList.getSeries('小米');
    console.log(mis);
    jQuery('#box2').text(JSON.stringify(mis,null,4));
    var xBrands = mobileList.getBrands('X');
    console.log(xBrands);
    jQuery('#box3').text(JSON.stringify(xBrands,null,4));

    // 获取没有停产的非概念版手机型号
    var MiSeries2 = mobileList.getSeries('小米',function(one){
        return one.concept===false && one.stop === false;
    });
    jQuery('#box4').text(JSON.stringify(MiSeries2,null,4));  

    // 获取简单的列表
     var MiSeries3 = mobileList.getSimpleSeries('小米',function(one){
        return one.concept===false && one.stop === false;
    }); 
     jQuery('#box5').text(JSON.stringify(MiSeries3,null,4));  
});
````

## 获取所有品牌
<pre id="box1"></pre>

## 获取小米品牌机型
<pre id="box2"></pre>

## 获取`X`开头的品牌
<pre id="box3"></pre>

## 获取非概念版的生产中的小米品牌机型
<pre id="box4"></pre>


## 简单列表
<pre id="box5"></pre>