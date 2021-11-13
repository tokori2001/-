/*
 * @Author: your name
 * @Date: 2021-11-14 03:05:24
 * @LastEditTime: 2021-11-14 03:27:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \class2\jsdata\flatten.js
 */
var arr = [1, [2, 3], 4, [5, [6, [7, 8]]],[9, 10]];
res = []; //用来存储返回的数据

function fun1(arr) {
  //code
   while(arr.some(item => Array.isArray(item)))
   {
       arr=[].concat.apply([],arr);
   }
   for(i=0;i<arr.length;i++)
   {
       res[i]=arr[i];
   }
   return res;

}

fun1(arr);
console.log(res); //[1,2,3,4,5,6,7,8,9,10];