/*
 * @Author: your name
 * @Date: 2021-11-14 03:04:01
 * @LastEditTime: 2021-11-14 03:20:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \class2\jsdata\prompt.js
 */
        var message=prompt("请输入一个数字：")
        message=Number(message);
        while(isNaN(message)==true)
        {
            message=prompt("你未输入正确的数字，请重新输入：")
        }
        alert("你输入的数字平方后为："+message*message)