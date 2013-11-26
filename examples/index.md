# 演示文档

---

````javascript
seajs.use('mobileList', function(mobileList){
    var brands = mobileList.getBrands();
    console.log(brands);
    var mis = mobileList.getSeries('小米');
    console.log(mis);

    var xBrands = mobileList.getBrands('X');
    console.log(xBrands);
});
````
