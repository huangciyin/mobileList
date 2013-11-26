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
});
````

## 获取所有品牌
<pre id="box1"></pre>

## 获取小米品牌机型
<pre id="box2"></pre>

## 获取`X`开头的品牌
<pre id="box3"></pre>