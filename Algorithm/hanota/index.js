//漢諾塔問題,将n个盘子（呈金字塔型）从a移到c，借助于b,盘子从小到大编号为1-n

const basicCupNumber = 3;
const originPillar = 'A',assistPillar='B',targetPillar='C';

function HandleHanorta (number,a,b,c) {
         if(number===1){
             console.log(number+'    from   '+a+'   to   '+c)//只剩一个就直接移
             return;
         }else{
            HandleHanorta(number-1,a,c,b);//  1、将n-1个盘子从a移到b，借助c
            console.log(number+'    from   '+a+'   to   '+c)
            HandleHanorta(number-1,b,a,c);// 2、把b的盘子移到c，借助a
         }
        
}


HandleHanorta(basicCupNumber,originPillar,assistPillar,targetPillar);