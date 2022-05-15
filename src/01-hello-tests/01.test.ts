import {mult, sum} from "./01";

test('sum should be correct', ()=>{
    //data
    const a = 3;
    const b = 6;

    //action
    const result = sum(a,b)

    //expect result
    expect(result).toBe(9);
})

test('mult should be correct', ()=>{
    //data
    const a = 3;
    const b = 6;

    //action
    const result = mult(a,b)

    //expect result
    expect(result).toBe(18);
})