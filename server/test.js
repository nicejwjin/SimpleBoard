myFunc1();
function myFunc1( ) {
  console.log("명시적 함수 정의");
}
var myFunc2 = function ( ) {
  console.log("익명 함수(함수 리터럴) 정의");
}
myFunc1();
myFunc2();