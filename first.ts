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
function sep(x: number, y: number): number;
function sep(x, y) {
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