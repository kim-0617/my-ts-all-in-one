interface Profile {
    name : string,
    age : number,
    married ?: boolean,
}

const zerocho : Profile= {
    name : 'zerocho',
    age : 29,
    married : false,
}

const zerocho2 : Profile= {
    name : 'zerocho',
    age : 29,
}

// 프로필을 다 쓰고싶지 않고 일부만 쓸 때
const newZerocho : Partial<Profile> = {
    name : 'zerocho',
    age : 29,
}

// Partial 타입 만들기
type P<T> = {
    [key in keyof T] : T[key];
}

// pick? omit?
const pickZerocho : Pick<Profile, 'name' | 'age'> = {
    name : 'zerocho',
    age : 29,
}

const omitZerocho : Omit<Profile, 'married'> = {
    name : 'zerocho',
    age : 29,
}

// pick 타입 만들기
type Pi<T, S extends keyof T> = {
    [key in S] : T[key];
}

const pickZerocho2 : Pi<Profile, 'name' | 'age'> = {
    name : 'zerocho',
    age : 29,
}