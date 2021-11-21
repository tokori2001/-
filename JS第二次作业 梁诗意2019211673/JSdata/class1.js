/*
 * @Author: your name
 * @Date: 2021-11-21 01:09:42
 * @LastEditTime: 2021-11-21 01:26:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \html\JSdata\class1.js
 */
const course = {
    name: "CSA",
    semester: 2
  };
const {name:name,semester:year,isStudent=true}=course;
console.log(name);
console.log(year);
console.log(isStudent);