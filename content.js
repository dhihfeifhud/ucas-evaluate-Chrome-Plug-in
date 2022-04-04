// 获取选择题的dom
var arrObj = document.getElementsByTagName('input') ;
// 获取radio数量
console.log(arrObj.length);
for(var i = 0; i < arrObj.length; i++) {
    // 选中某个value的选项
    if(arrObj[i].value == "5" || arrObj[i].value == "") {
        if (arrObj[i].id < "619" && arrObj[i].id > "614") continue;
        arrObj[i].click();
    }
}

// 获取主观题dom
var arrObj2 = document.getElementsByTagName('textarea') ;
// 获取radio数量
console.log(arrObj2.length);
for(var i = 0; i < arrObj2.length; i++) {
    // 填写主观题
    arrObj2[i].value = "课程特色鲜明，内容取舍合理，组织严密，逻辑性强，讲授思路清晰，概念清楚。";
}
