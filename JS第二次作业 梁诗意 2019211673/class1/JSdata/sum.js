/*
 * @Author: your name
 * @Date: 2021-11-14 02:24:53
 * @LastEditTime: 2021-11-14 02:28:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JS\JSdata\sum.js
 */
var arr1=[1,3,5,7,9];
var arr2=[2,4,6,8,10];

function merge(arr1,arr2){
  //code
  var sum=arr1.concat(arr2);
  var x;
  for(i=0;i<sum.length;i++)
      {
          for(j=i+1;j<sum.length;j++)
          {
              if(sum[i]>sum[j])
              {
                 x=sum[i];
                 sum[i]=sum[j];
                 sum[j]=x;
              }
          }
      }
      return sum;
}

console.log(merge(arr1,arr2));//[1,2,3,4,5,6,7,8,9,10]