"use strict";
const zerocho = {
    name: 'zerocho',
    age: 29,
    married: false,
};
const zerocho2 = {
    name: 'zerocho',
    age: 29,
};
// 프로필을 다 쓰고싶지 않고 일부만 쓸 때
const newZerocho = {
    name: 'zerocho',
    age: 29,
};
// pick? omit?
const pickZerocho = {
    name: 'zerocho',
    age: 29,
};
const omitZerocho = {
    name: 'zerocho',
    age: 29,
};
const pickZerocho2 = {
    name: 'zerocho',
    age: 29,
};
// - : 옵셔널 모두제거
const RzeroCho = {
    name: 'zerocho',
    age: 29,
    married: false,
};
const ROzeroCho = {
    name: 'zerocho',
    age: 29,
    married: false,
};
ROzeroCho.name = 'zerocho2';
const test = {
    a: 1,
    b: 2,
};
// 아래와 같음
const test2 = {
    a: 1,
    b: 2,
};
const test3 = {
    a: 1,
    b: 2,
};
// 함수 제한두는법
function zip(x, y, z) {
    return { x, y, z };
}
// class
class Cls {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
const c2 = new Cls('123', 123, true);
