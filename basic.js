// javascript中的真值和假值
console.log("javascript中的真值和假值")
const testType = [undefined,null,true,false,+0,-0,NaN,'',{}]

testType.map((item,index)=>{
    if(item){
        console.log(`${item}`+" equal to true")
    }else{
        console.log(`${item}`+" equal to false")
    }
})

// == 与 === 
console.log("== 与 === ")

let num = new Number(3)
console.log("3===num?",3===num)//类型不同，===为false
console.log("3==num?",3==num)

console.log('packt' ? true : false);
console.log('packt'==true)//布尔值true会被toNumber数字转换成1，toNumber转换字符串，因为有字母，值变为NaN，所以等式变成了NaN==1,为false

//object的 == 判断
console.log("object的 == 判断 ")
let object1 = {test:"1"};
let object2 = {test:"1"}
let object3 = object2

console.log(object1==object2)//false 两个不同的对象（内存中是两块空间）
console.log(object2==object3)//true object2和object3都引用了同一个对象（两个指针指向同一块空间）
console.log(object1==object3)//false

//数组解构 ES6语法
console.log("数组解构 ES6语法")
var [x,y] = ['a','b'];//equals to var x = 'a',var y = 'b'
//进行值交换
[x,y] = [y,x]

var testChangeObj = {a:'a'};
var {a:b} = testChangeObj;//把a的值赋给b（并声明了b这个变量）
console.log("x:",x,"y:",y)



