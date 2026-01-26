import { concat } from "./solution";

const setup = () => {
  const numsArray = [1, 2, 3, 4, 5];
  const stringsArray = ["a", "b", "c", "d"];
  const booleansArray = [true, false, true];

  return { numsArray, stringsArray, booleansArray };
};

describe("Concat", () => {
  it("should concatenate two or more arrays", () => {
    const { numsArray, stringsArray, booleansArray } = setup();

    expect(concat(numsArray, stringsArray)).toEqual([
      ...numsArray,
      ...stringsArray,
    ]);
    expect(concat(stringsArray, booleansArray)).toEqual([
      ...stringsArray,
      ...booleansArray,
    ]);
    expect(concat(booleansArray, booleansArray)).toEqual([
      ...booleansArray,
      ...booleansArray,
    ]);

    expect(concat(numsArray, stringsArray, booleansArray)).toEqual([
      ...numsArray,
      ...stringsArray,
      ...booleansArray,
    ]);
  });

  it("should not mutate the input arrays", () => {
    const { numsArray, stringsArray } = setup();

    const numsArrayCopy = [...numsArray];
    const stringsArrayCopy = [...stringsArray];

    concat(numsArray, stringsArray);

    expect(numsArray).toEqual(numsArrayCopy);
    expect(stringsArray).toEqual(stringsArrayCopy);
  });

  it("should return an empty array when both arrays are empty", () => {
    expect(concat([], [])).toEqual([]);
  });

  it("should return the first array when the second array is empty", () => {
    const { numsArray, stringsArray, booleansArray } = setup();

    expect(concat(numsArray, [])).toEqual(numsArray);
    expect(concat(stringsArray, [])).toEqual(stringsArray);
    expect(concat(booleansArray, [])).toEqual(booleansArray);
  });

  it("should return the second array when the first array is empty", () => {
    const { numsArray, stringsArray, booleansArray } = setup();

    expect(concat([], numsArray)).toEqual(numsArray);
    expect(concat([], stringsArray)).toEqual(stringsArray);
    expect(concat([], booleansArray)).toEqual(booleansArray);
  });
});
