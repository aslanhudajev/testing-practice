import { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } from "./index.js";

it("Capitalize: sundown", () => {
    expect(capitalize("sundown")).toBe("Sundown")
});

it("Capitalize: redfalL", () => {
    expect(capitalize("redfalL")).toBe("RedfalL")
});

it("Capitalize: Twins", () => {
    expect(capitalize("Twins")).toBe("Twins")
});

it("Reverse string: sundown", () => {
    expect(reverseString("sundown")).toBe("nwodnus")
});

it("Reverse string: redfalL", () => {
    expect(reverseString("redfalL")).toBe("Llafder")
});

it("Reverse string: Twins", () => {
    expect(reverseString("Twins")).toBe("sniwT")
});

//Calculator
it("Add: 2 + 2", () => {
    expect(Calculator.add(2, 2)).toBe(4)
});

it("Add: 1123 + 10", () => {
    expect(Calculator.add(1123, 10)).toBe(1133)
});

it("Subtract 5 - 3", () => {
    expect(Calculator.subtract(5, 3)).toBe(2)
});

it("Subtract 2 - 5", () => {
    expect(Calculator.subtract(2, 5)).toBe(-3)
});

it("Multiply: 5 * 3", () => {
    expect(Calculator.multiply(5, 3)).toBe(15)
});

it("Multiply: -2 * 5", () => {
    expect(Calculator.multiply(-2, 5)).toBe(-10)
});

it("Divide: 10 / 2", () => {
    expect(Calculator.divide(10, 2)).toBe(5)
});

it("Divide: -2 / 2", () => {
    expect(Calculator.divide(-2, 2)).toBe(-1)
});

it("Caesar cipher: str: workaround shift-factor: 2", () => {
    expect(caesarCipher("workaround", 2)).toBe("YQTMCTQWPF")
});

it("Caesar cipher: str: working hard shift-factor: 10", () => {
    expect(caesarCipher("working hard", 10)).toBe("GYBUSXQ RKBN")
});

it("Caesar cipher: str: superman in boxing shorts shift-factor: 32", () => {
    expect(caesarCipher("superman in boxing shorts", 32)).toBe("YAVKXSGT OT HUDOTM YNUXZY")
});

it("Caesar cipher: str: ZZZZ shift-factor: 10", () => {
    expect(caesarCipher("ZZZZ", 10)).toBe("JJJJ")
});

it("Caesar cipher: str: ZZZZ shift-factor: -10", () => {
    expect(caesarCipher("ZZZZ", -10)).toBe("PPPP")
});

it("Analyze array: [1,8,3,4,2,6]", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
});

it("Analyze array: [52,18,3,4,2,6]", () => {
    expect(analyzeArray([52,18,3,4,2,6])).toStrictEqual({
        average: 14,
        min: 2,
        max: 52,
        length: 6
    })
});

it("Analyze array: [100,1000,10000,10,100,1000,10000,10]", () => {
    expect(analyzeArray([100,1000,10000,10,100,1000,10000,10])).toStrictEqual({
        average: 2777,
        min: 10,
        max: 10000,
        length: 8
    })
});