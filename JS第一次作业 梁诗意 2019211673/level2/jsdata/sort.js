/*
 * @Author: your name
 * @Date: 2021-11-14 03:28:55
 * @LastEditTime: 2021-11-14 04:05:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \class2\jsdata\sort.js
 */
var arr=[{name:'xiaoming',age:18},{name:'zhangsan',age:34},
         {name:'lisi',age:29},{name:'wangwu',age:24}];

function sortby(key , way = true){//way为true表示默认按照升序排列
  //code
  if(way==undefined){way=1}
  else {way=(way)?1:-1}
  return function(a,b)
  {
      a=a[key];
      b=b[key];
      if(a<b)
      {
          return -1*way;
      }else if(a>b)
      {
          return 1*way;
      }
      else {return 0;}
  }
  
}

console.log(arr.sort(sortby('age'))) //[{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29},{name: "zhangsan", age: 34}]
//console.log(arr.sort(sortby('name',false))) //[{name: "zhangsan", age: 34},{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29}]

//因为浏览器console.log输出引用的原因，测试的时候可以将另一句不用的console语句注释起来，避免对测试结果产生影响