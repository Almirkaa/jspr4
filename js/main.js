'use strict';
// 1
function showNumber(a , b){
    for(; a<b; a+=2){
    alert(a)}

}
let a =+prompt('Введите число а', '');
let b =+prompt('Введите число b', '');
if (a%2 == 0){
    showNumber(a,b);
} else{
    showNumber(a+1,b);
}

// 2
let i = 0;
while (i<3){
    alert(`number ${i}!` );
    i++;
}

// 3
while(true){
    let a = +prompt('Введите число');
    if(a>10){
        alert('Вы справились')
        break;
    }
}

// 4
let a = +prompt('Выедите число а');
let b = +prompt('Выедите число b');;
let min = (a<b)?()=>alert(a):()=>alert(b);
min();


// // 5

let ask = (confirm('Вы согласны?')) ?()=>alert('Вы согласились'):()=>alert('Вы отменили выполнение.');
ask();
// 6

let age = +prompt('Введите возраст');
let checkAge = (age>18)?()=>{ return true} : ()=>{ return confirm('Родители разрешили?')};
checkAge();
  

