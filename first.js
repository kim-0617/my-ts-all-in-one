"use strict";
const a = 5;
const b = '5';
const c = true;
const d = undefined;
const e = null;
const f = Symbol.for('abc');
const g = 1000000n;
const h = 123; // 아무 타입이나 들어옴
const i = true; // 값 고정, 다른값은 못옴
const j = 5;
// 함수
// function add(x: number, y: number): number { // return값 자리 
//     return x + y 
// }
const arrowFunc = (x, y) => x + y;
const add = (x, y) => x + y;
// 객체
const obj = { lat: 37.5, lon: 127.5 };
// 배열
const arr = ['abc', 'efg'];
const arr2 = [123, 456];
// 튜플 : 길이가 고정된 배열
const arr3 = [123, 456, 'abc',];
function Sep(x, y) {
    return x + y;
}
// 타입 변환
let trans = 'hello';
trans = 123;
// never? : 빈배열을 조심하라
try {
    const array = [];
}
catch (error) {
    error;
}
// Element, ! => null or undifined 가 아님을 보장한다.
const head = document.querySelector('#head');
const w = 'world';
// | (or) 사용시 밑에 둘다 가능
const greeting = 'Hello world';
const greeting2 = 'Hello yo';
// tuple 원소 추가 시...
const tuple = ['123', 456];
// tuple[2] = 1; // 이건 막아줌
tuple.push(1); // 이건 못막아줌
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
// 위와 같은 코드
const ODirection2 = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
const up = 0 /* EDirection.Up */;
const down = ODirection.Down;
// key of, type of
const obj2 = {
    a: '123',
    b: 'hello',
    c: 'world',
};
// union |
function plus(x, y) {
    return x + y;
} // 애초부터 잘못된 설계
plus(1, 2);
plus('1', '2');
plus('1', 2);
const obj3 = { hello: 'world', zero: 'cho' };
const zeroCho = { breath: true, breed: true, think: true };
const zeroCho2 = { breath: true, breed: true };
// return 값이 아닌 콜백의 return 값의 void의 의미는 리턴값이 뭐든 상관하지 않겠다는 의미
let target = [];
ForEach(target, el => target.push(el));
