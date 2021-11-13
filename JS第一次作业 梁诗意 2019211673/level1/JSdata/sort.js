/*
 * @Author: your name
 * @Date: 2021-11-14 02:19:32
 * @LastEditTime: 2021-11-14 02:19:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JS\JSdata\sort.js
 */
var arr=[1,5,4,8,2,6,3,9,7];

function mySort(arr){
  	//code
      var x;
      for(i=0;i<arr.length;i++)
      {
          for(j=i+1;j<arr.length;j++)
          {
              if(arr[i]>arr[j])
              {
                 x=arr[i];
                 arr[i]=arr[j];
                 arr[j]=x;
              }
          }
      }
      return arr;
}

console.log(mySort(arr)); //[1,2,3,4,5,6,7,8,9]