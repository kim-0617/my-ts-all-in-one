interface Profile {
    name: string,
    age: number,
    married?: boolean,
}

const zerocho: Profile = {
    name: 'zerocho',
    age: 29,
    married: false,
}

const zerocho2: Profile = {
    name: 'zerocho',
    age: 29,
}

// 프로필을 다 쓰고싶지 않고 일부만 쓸 때
const newZerocho: Partial<Profile> = {
    name: 'zerocho',
    age: 29,
}

// Partial 타입 만들기
type P<T> = {
    [key in keyof T]: T[key];
}

// pick? omit?
const pickZerocho: Pick<Profile, 'name' | 'age'> = {
    name: 'zerocho',
    age: 29,
}

const omitZerocho: Omit<Profile, 'married'> = {
    name: 'zerocho',
    age: 29,
}

// pick 타입 만들기
type Pi<T, S extends keyof T> = {
    [key in S]: T[key];
}

const pickZerocho2: Pi<Profile, 'name' | 'age'> = {
    name: 'zerocho',
    age: 29,
}

// required
// const RzeroCho : Required<Profile> = {
//     name : 'zerocho',
//     age : 29,
//     married : false,
// } 

type R<T> = {
    [key in keyof T]-?: T[key];
};

// - : 옵셔널 모두제거
const RzeroCho: R<Profile> = {
    name: 'zerocho',
    age: 29,
    married: false,
}

type RO<T> = {
    -readonly [key in keyof Profile]: T[key];
}

const ROzeroCho: RO<Profile> = {
    name: 'zerocho',
    age: 29,
    married: false,
}
ROzeroCho.name = 'zerocho2';

// record
interface Obj {
    [key: string]: number;
}
const test: Obj = {
    a: 1,
    b: 2,
}

// 아래와 같음
const test2: Record<string, number> = {
    a: 1,
    b: 2,
}

// 레코드 타입
type Rec<T extends keyof any, S> = {
    [key in T]: S;
}

const test3: Rec<string, number> = {
    a: 1,
    b: 2,
}

// 함수 제한두는법
function zip(x: number, y: string, z: boolean): { x: number, y: string, z: boolean } {
    return { x, y, z };
}

// infer은 extendes에서만 사용, 추론조건 ? 추론성공 : 추론실패
type Z<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;
type params = Z<typeof zip>
type first = params[2];

// class
class Cls {
    a: string;
    b: number;
    c: boolean;

    constructor(a: string, b: number, c: boolean) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

const c2 = new Cls('123', 123, true);
type C3 = ConstructorParameters<typeof Cls>;
type C4 = InstanceType<typeof Cls>