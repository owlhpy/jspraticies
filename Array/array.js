//Javascript声明、初始化数组
var arrCreated = new Array();
var arrCreated1 = new Array(7);//指定数组长度
var arrCreated2 = new Array('one','two','three');//创建并初始化数组

var arrCreated3 = [];//字面量创建

//数组的访问和迭代
for(let i = 0;i<arrCreated2.length;i++){
    console.log("item:",arrCreated2[i]);
}

//数组添加元素
var numbers = [1,2,4,5,6]
//1.push() 将元素添加到数组末尾,并返回数组新长度
let newLength = numbers.push(7);
//2.unshift() 将元素添加到数组首位,并返回数组新长度，修改原数组
let newLength2 = numbers.unshift(0);
//3. splice(start,0,value)在数组任意位置添加元素,以数组的形式返回被删除的内容，没有则返回[]，修改原数组
let newAdded = numbers.splice(3,0,3);
console.log("numbers after add options",numbers,newAdded)

//数组删除元素
//目前 numbers = [0,1,2,3,4,5,6,7]
//1. pop()删除数组最后一个元素，并返回该元素的值
numbers.pop();//[0,1,2,3,4,5,6]
//2. shift()删除数组第一个元素，并返回被删除元素的值
numbers.shift();//[1,2,3,4,5,6]
//3. splice(start,count,item1,item2...)任意位置删除元素
numbers.splice(2,1);

//连接数组
//1. concat(arr1,arr2,...),不影响原数组，返回新数组
let nums = numbers.concat(newAdded);

//数组迭代
//1.every(fun),迭代元素，返回布尔值，直到返回false
let resultEvery = numbers.every((item)=>{
    return item<5
})
//2.some(fun),迭代元素，返回布尔值，直到返回true;
let resultSome = numbers.some((item)=>{
    return item<5
})
//3.forEach(fun),已删除或未初始化的项将被忽略，不改变原数组，在第一次callback被调用时，被调用的数组已确定，callback新增的不会被访问
numbers.forEach((item,index,arr)=>{
    console.log(item)
})
//4. map(fun),返回函数所返回的数组内容
let numsAddOne = numbers.map(function(item){
    return item+1
})
//5. filter(fun),返回新数组，由函数返回true的元素组成
let numsFilter = numbers.filter(item=>{
    return item<3
})
//6.reduce(fun),返回函数汇总的单值,常用于数组元素求和
let countNums = numbers.reduce((preV,curV,curIndex,arr)=>{
    return preV+curV;
})



// console.log("numbers after delete options",numbers);


/*递归判断数组是否升序  1有序，0无序*/


function isOrderArray (arr,index){
         if(arr.length===1) return 1;
         if(index===0) return 1;
         return (arr[index-1]<=arr[index-2])?0:isOrderArray(arr,index-1);
}

const testArr = [5,6,7,8];

console.log("isOrderArray-----",isOrderArray(testArr,5));

/*递归判断数组是否有序*/
