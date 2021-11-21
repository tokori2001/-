/*
 * @Author: your name
 * @Date: 2021-11-21 03:45:40
 * @LastEditTime: 2021-11-21 04:06:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shujukuwenjian\html\JSdata\class3.js
 */
var data = {
    age: 18,
    name: "这是真的难",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    friends: [
          { name: "Amber",sex: "woman"},
          { name: "Barbara",sex: "woman"},
          { name: "Venti",sex: "man"}], 
    work: { 
            time: "2021", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
          }, 
    play: function() {    console.log("玩滑板");  }
}

var data1=copy(data)
function copy(data) {
    if (typeof data === 'object' && data) {
        let m = typeof data.length === 'number' ? [] : {}
        for(let i in data) {
            m[i] = copy(data[i])
        }
        return val
    } else {
        return data
    }
}
console.log(data,data1)