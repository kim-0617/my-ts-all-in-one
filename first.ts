const a: number = 5;
const b: string = '5';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for('abc');
const g: bigint = 1000000n;
const h: any = 123; // 아무 타입이나 들어옴
const i: true = true; // 값 고정, 다른값은 못옴
const j: {} = 5;

// 함수
// function add(x: number, y: number): number { // return값 자리 
//     return x + y 
// }

const arrowFunc : (x:number, y:number) => number = (x,y) => x + y;

// 타입 앨리어스
// type Add = (x: number, y: number) => number

// 인터페이스
interface Add {
    (x: number, y: number): number;
}
const add: Add = (x, y) => x + y;

// 객체
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

// 배열
const arr: string[] = ['abc', 'efg'];
const arr2: Array<number> = [123, 456];

// 튜플 : 길이가 고정된 배열
const arr3: [number, number, string] = [123, 456, 'abc',];

// 타입과 로직의 분리
function Sep(x: number, y: number): number;
function Sep(x, y) {
    return x + y;
}

// 타입 변환
let trans = 'hello';
trans = 123 as unknown as string;

// never? : 빈배열을 조심하라
try {
    const array = [];
}
catch (error) {
    error;
}

// Element, ! => null or undifined 가 아님을 보장한다.
const head = document.querySelector('#head')!;

// 타입 커스터마이징
type World = 'world' | 'yo';
const w: World = 'world';

// `` 사용 => 그냥 Hello world임
type Greeting = `Hello ${World}`;

// | (or) 사용시 밑에 둘다 가능
const greeting: Greeting = 'Hello world';
const greeting2: Greeting = 'Hello yo';

// tuple 원소 추가 시...
const tuple: [string, number] = ['123', 456];
// tuple[2] = 1; // 이건 막아줌
tuple.push(1); // 이건 못막아줌

// enum
const enum EDirection {
    Up,
    Down,
    Left,
    Right,
}

const ODirection: { Up: 0, Down: 1, Left: 2, Right: 3 } = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
}

// 위와 같은 코드
const ODirection2 = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const

const up = EDirection.Up;
const down = ODirection.Down;

// key of, type of
const obj2 = {
    a: '123',
    b: 'hello',
    c: 'world',
} as const;

type Key = keyof typeof obj2; // 키 값
type Value = typeof obj2[keyof typeof obj2]; // 밸류 값

// union |
function plus(x: number | string, y: number | string): string | number {
    return x + y;
} // 애초부터 잘못된 설계
plus(1, 2);
plus('1', '2');
plus('1', 2);

// &
type A = { hello: 'world' } & { zero: 'cho' };
const obj3: A = { hello: 'world', zero: 'cho' }

// &를 이용한 상속
type Animal = { breath: true };
type Poyuryu = Animal & { breed: true };
type Human = Poyuryu & { think: true };

const zeroCho: Human = { breath: true, breed: true, think: true };

// interface 상속 => 여기서 type도 상속 가능
interface Ani {
    breath: true;
}

interface B extends Ani {
    breed: true;
}

const zeroCho2: B = { breath: true, breed: true };

// declare
declare function ForEach(arr: number[], callback : (el:number) => void) : void;
// return 값이 아닌 콜백의 return 값의 void의 의미는 리턴값이 뭐든 상관하지 않겠다는 의미

let target:number[] = [];
ForEach(target, el => target.push(el));

// type guard
function numOrStr(a : number | string) {
    (a as number).toFixed(1); // 웬만하면 as는 쓰지않는다
}

function numOrStr2(a : number | string) {
    if(typeof a === 'number') {
        a.toFixed(1);
    }
    if(typeof a === 'string') {
        a.charAt(3);
    }
}

// 클래스 타입
class C1 {
    ccc() {};
}

class C2 {
    ccc2() {};
}

function oneOrTwo(A : C1 | C2) {

}

oneOrTwo(C1);
oneOrTwo(new C2());

// 커스텀 타입가드
interface Dog {bow : string}
interface Cat {meow : string}
function catOrDog(a : Dog | Cat) : a is Dog {
    if((a as Cat).meow) {
        return false;
    }

    return true;
}

function pet(a : Cat | Dog) {
    if(catOrDog(a)) {
        console.log(a.bow);
    }
    if('meow' in a) {
        console.log(a.meow);
    }
}

// 인덱스드 시그니쳐
type Sig = {[key:string] : string};
const indexSig : Sig = {a : 123, b : "123"};

// 맵드 타입스
type Maped = 'Human' | 'Mammal' | 'Animal';
type MapedType = {[key in Maped] : string};
const MapedTypes : MapedType = {Mammal : "abc", Human : "being", Animal : "you"};

// 옵셔널
function opt(a:number, b?:number, c?:number) {}
opt(1);
opt(1, 2);
opt(1, 2, 3);
opt(1, 2, 3, 4);

// 제네릭 : 함수의 타입을 사용할 때 결정하겠다
function generic<T extends number | string>(x : T, y : T) : T {
    return x + y;
}

generic(1,2);
generic('1', 2);
generic('1','2');

interface Array<T> {
    filter<S extends string | number>(predicate: (value: string | number, index: number, array: string | number[]) => value is S, thisArg?: any): S[];
}
const filtered = ['1',2,'3'].filter(x => typeof x === 'string');


// forEach 타입 만들기
interface Arr<T> {
    forEach(callback : (value : T) => void) : void;
    map<S>(callback : (value : T) => S) : S[];
    filter<B extends T>(callback : (value : T) => value is B) : B[];
}

const testArr: Arr<number> = [1,2,3];
testArr.forEach((value) => {
    value.toFixed();
});

const testArr2: Arr<string> = ['1','2','3'];
testArr2.forEach((value) => {
    value.charAt(3);
});

const testArr3: Arr<boolean> = [true, false];
testArr3.forEach((value) => {
    console.log(value);
});

const testArr4: Arr<string|number> = ['1',2,'3'];
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
const filterReturn = testArr.filter((value) : value is number => {
    return value === 1;
});

const filterReturn2 = testArr4.filter((value) : value is string => {
    return typeof value === 'string';
});