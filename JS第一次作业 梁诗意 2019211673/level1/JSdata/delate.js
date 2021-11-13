/*
 * @Author: your name
 * @Date: 2021-11-14 02:17:07
 * @LastEditTime: 2021-11-14 02:17:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JS\JSdata\delate.js
 */
var arr=[1,2,3,3,4,'a','a','b','c'];

function reduce(arr){
var res=[];
//code
for(i=0;i<arr.length;i++){  
 for(x=i+1;x<arr.length;x++){  
     if(arr[i]==arr[x]){  
          arr.splice(x,1)     
     }  
  }  
}
for(i=0;i<arr.length;i++)
{
    res[i]=arr[i];
}
return res;
}

console.log(reduce(arr));  //[1, 2, 3, 4, "a", "b", "c"]