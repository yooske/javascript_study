let hello = 'Hello World';
let int1 = 1;
let int2 = -10;
let float1 = 3.14;
let str1 = 'Hello';
let str2 = 'World!!';

let orange = 120;
let apple = 120;
/*if (orange < apple){
  alert('みかんの値段がりんごより安い');
} else if (orange == apple){
  alert('みかんとりんごが同じ値段');
} else {
  alert('みかんの値段がりんごより高い');
}*/

/*let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');*/

let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');