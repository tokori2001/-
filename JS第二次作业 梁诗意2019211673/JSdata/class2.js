/*
 * @Author: your name
 * @Date: 2021-11-21 01:27:46
 * @LastEditTime: 2021-11-21 03:21:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shujukuwenjian\html\JSdata\class2.js
 */
function course1()
{
  this.coursename="CSA前端培训";
  this.semester=2;
}
function student(name,age,gender)
    {
      course1.apply(this,arguments);
      this.name=name;
      this.age=age;
      this.gender=gender;
      this.moreinfo=function()
      {
        var	detail=function()
        {
          console.log(gender);
        }
        
        detail();
      }
    }
    var student1 = new student("小明",18,"男");
    console.log(student1.coursename,student1.semester); //课程名字和第几期
    student1.moreinfo();//你的性别
