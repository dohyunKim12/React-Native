// // STUDY FOR ES6

// // VARIABLE

// let hello = 'world';
// //let hello = 'pretty';

// for (i = 0; i < 10; i++) {
//   console.log('testing');
// }

// function test() {
//   let hello = 'korea';
//   console.log(hello);
// }

// test();

// console.log(hello);

// // OBJECT
// const drinks = {}; //객체
// drinks.caffe = 'latte';
// drinks.lemon = 'eda';

// console.log(drinks);

// // ARRAY
// const arr = [1, 2, 3, 4, 5];
// arr[0] = 100;
// arr[4] = 500;

// console.log(arr);

// const var1 = 'ex_var';
// //var1 = 'anyvar';   this occur error!

// console.log(var1);

// // STRING LITERAL
// const val01 = 'Hello';
// const val02 = 'World';
// const val03 = val01 + ' ' + val02 + '!!!!!';

// console.log(val03);

// // use `${variable}`

// const litVal = `${val01} ${val02}!!!!!`;

// console.log(litVal);

// // FOR ... OF ..
// let array = [10, 20, 30, 40];

// for (let val in array) {
//   console.log(val); // index값이 출력됨. value값에 접근을 위해서는 in => of로 변경.
// }
// //for... of 문법은 배열같은 iterate 변수에서만 가능. (해시는 불가)

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (let val in obj) {
//   console.log(val);
//   console.log(obj[val]);
// }

// // REST OPERATOR
// function f(a, b, ...c) {  // use like this ... (나머지 인자를 배열로 모두 불러옴)
//   //
// }
// function printNums(num1, ...num2) {
//   console.log(num1, num2); //num2 에는 [2,3,4,5] 배열이 전달이 됨.
// }

// printNums(1, 2, 3, 4, 5);

// // SPREAD OPERATOR
// function sum(x, y, z) {
//   return x + y + z;
// }
// console.log(sum(1, 2, 3));

// let arr = [10, 20, 30];

// //console.log(sum(arr)); //이렇게 쓰면 배열의 요소를 인자로 사용할 수 없다.
// console.log(sum.apply(null, arr)); // 이렇게 apply 메서드를 사용. (첫번째 인자로는 null 전달.)

// // 이 코드를 spread Operator로 구현하면 간단함.
// console.log(sum(...arr)); //It works!
// // 추가로, spread Operator는 Rest Operator와 달리 ...이 중간이 껴있어도 괜찮음.

// function sum2(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// let arr2 = [20, 30];

// console.log(sum2(10, ...arr2, 40, 50));

// //SPREAD OPERATOR2 (Deep Copy)
// let face = ['eyes', 'nose', 'mouth'];
// let head = ['hair', ...face, 'ears'];

// console.log(head);

// let arr = [1, 2, 3];
// let arrCpy = [...arr];
// arr[1] = 99;

// console.log(arrCpy); //복사된 배열과 오리지날 배열이 각각 존재하게됨. (깊은복사)

// // 객체 안에서 SPREAD OPERATOR의 사용.
// let drinks = {
//   caffe: 'latte',
//   coca: 'cola',
// };

// let newDrinks = {
//   lemon: 'tea',
//   orange: 'juice',
//   // drinks,
//   ...drinks,
// };

// console.log(newDrinks);

// // ***************ARROW FUNCTION*************
// // 사용법: 크게 2가지. 표현식의 결과값을 반환하는 표현식 본문. 상태블럭.

// //표현식의 결과를 return하는 본문 내에서 쓰임.
// let arr = [1, 2, 3, 4, 5];

// let twice = arr.map(x => x * 2);

// //origin
// let ttwice = arr.map(function (val) {
//   return val * 2;
// });

// console.log(twice);

// // 상태를 결정짓는 상태블럭 본문에서의 쓰임.
// let arr = [1, 2, 3, 4, 5];
// let tiwce = arr.map(v => {
//   if (v % 2 === 0) {
//     console.log('even number');
//   } else {
//     console.log('odd number');
//   }
// });

// let arr2 = [10, 20, 30, 40, 50];

// let ttwice = arr2.map((val, index) => {
//   console.log(`i: ${index}, v: ${val}`);
// });

// CLASS
//javascript 에서 class 는 함수처럼 쓰임.

class Person {
  constructor(region_, gender_) {
    this.region = region_;
    this.gender = gender_;
  }

  greetings(val = 'an-nyeong') {
    console.log(val);
  }
}

let korean = new Person('Korea', 'male');
console.log(korean);

korean.gender = 'female';
console.log(korean);

class American extends Person {
  constructor(region_, gender_, language_) {
    super(region_, gender_);
    this.language = language_;
  }

  greetings(val = 'hello') {
    //함수는 overriding됨.
    console.log(val);
  }
}

let american = new American('USA', 'female', 'English');
console.log(american);
american.greetings();
