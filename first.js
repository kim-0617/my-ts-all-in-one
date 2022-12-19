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
// type guard
function numOrStr(a) {
    a.toFixed(1); // 웬만하면 as는 쓰지않는다
}
function numOrStr2(a) {
    if (typeof a === 'number') {
        a.toFixed(1);
    }
    if (typeof a === 'string') {
        a.charAt(3);
    }
}
// 클래스 타입
class C1 {
    ccc() { }
    ;
}
class C2 {
    ccc2() { }
    ;
}
function oneOrTwo(A) {
}
oneOrTwo(C1);
oneOrTwo(new C2());
function catOrDog(a) {
    if (a.meow) {
        return false;
    }
    return true;
}
function pet(a) {
    if (catOrDog(a)) {
        console.log(a.bow);
    }
    if ('meow' in a) {
        console.log(a.meow);
    }
}
const indexSig = { a: 123, b: "123" };
const MapedTypes = { Mammal: "abc", Human: "being", Animal: "you" };
// 옵셔널
function opt(a, b, c) { }
opt(1);
opt(1, 2);
opt(1, 2, 3);
opt(1, 2, 3, 4);
// 제네릭 : 함수의 타입을 사용할 때 결정하겠다
function generic(x, y) {
    return x + y;
}
generic(1, 2);
generic('1', 2);
generic('1', '2');
const filtered = ['1', 2, '3'].filter(x => typeof x === 'string');
const testArr = [1, 2, 3];
testArr.forEach((value) => {
    value.toFixed();
});
const testArr2 = ['1', '2', '3'];
testArr2.forEach((value) => {
    value.charAt(3);
});
const testArr3 = [true, false];
testArr3.forEach((value) => {
    console.log(value);
});
const testArr4 = ['1', 2, '3'];
testArr4.forEach((value) => {
    console.log(value);
});
// map 타입 만들기
const mapReturn = testArr.map((value) => {
    return value;
});
const mapReturn2 = testArr.map((value) => {
    return value.toString();
});
const mapReturn3 = testArr.map((value) => {
    return value % 2 === 0;
});
// filter 타입 만들기
const filterReturn = testArr.filter((value) => {
    return value === 1;
});
const filterReturn2 = testArr4.filter((value) => {
    return typeof value === 'string';
});
// 공변성, 반공변성
function big(x) {
    return +x;
}
const bigFunc = big; // return 값이 더 넓은 타입에 대입이 가능하다. 그 반대는 불가능
// 매개변수는 좁은 타입 상관없이 대입이 된다.
// 그러나 여기서 숫자를 매개변수로 설정하면 오류.. 무슨의미가있나?
function big2(x) {
    return +x;
}
const bigFunc2 = big2;
