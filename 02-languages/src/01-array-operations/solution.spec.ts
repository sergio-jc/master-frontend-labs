import { heap, tail, init, last } from "./solution";

const setup = () => {
  const numsArray = [1, 2, 3, 4, 5];
  const stringsArray = ["a", "b", "c", "d"];
  const booleansArray = [true, false, true];

  return { numsArray, stringsArray, booleansArray };
};

describe("Heap", () => {
  it("Should return the first element", () => {
    const { numsArray, stringsArray, booleansArray } = setup();
    
    expect(heap(numsArray)).toBe(numsArray[0]);
    expect(heap(stringsArray)).toBe(stringsArray[0]);
    expect(heap(booleansArray)).toBe(booleansArray[0]);
  });

  it("Should not mutate the argument", () => {
    const { numsArray } = setup();

    const numsArrayCopy = [...numsArray];
    heap(numsArrayCopy);
    expect(numsArray).toEqual(numsArrayCopy);
  });

  it("Should return undefined for empty arrays", () => {
    expect(heap([])).toBeUndefined();
  });

  it("Should return undefined when no argument is provided", () => {
    expect(heap()).toBeUndefined();
  });
});

describe("Tail", () => {
  it("Should return all elements except the first one", () => {
    const { numsArray, stringsArray, booleansArray } = setup();

    expect(tail(numsArray)).toEqual(numsArray.slice(1));
    expect(tail(stringsArray)).toEqual(stringsArray.slice(1));
    expect(tail(booleansArray)).toEqual(booleansArray.slice(1));
  });

  it("Should not mutate the argument", () => {
    const { stringsArray } = setup();

    const stringsArrayCopy = [...stringsArray];
    tail(stringsArrayCopy);
    expect(stringsArray).toEqual(stringsArrayCopy);
  });

  it("Should return an empty array when the argument has only one element", () => {
    expect(tail([1])).toEqual([]);
  });

  it("Should return an empty array when the argument is an empty array", () => {
    expect(tail([])).toEqual([]);
  });

  it("Should return undefined when no argument is provided", () => {
    expect(tail()).toEqual([]);
  });
});

describe("Init", () => {
  it("Should return all elements except the last one", () => {
    const { numsArray, stringsArray, booleansArray } = setup();

    expect(init(numsArray)).toEqual(numsArray.slice(0, numsArray.length - 1));
    expect(init(stringsArray)).toEqual(
      stringsArray.slice(0, stringsArray.length - 1),
    );
    expect(init(booleansArray)).toEqual(
      booleansArray.slice(0, booleansArray.length - 1),
    );
  });

  it("Should not mutate the argument", () => {
    const { stringsArray } = setup();

    const stringsArrayCopy = [...stringsArray];
    init(stringsArrayCopy);
    expect(stringsArray).toEqual(stringsArrayCopy);
  });

  it("Should return an empty array when the argument has only one element", () => {
    expect(init([1])).toEqual([]);
  });

  it("Should return an empty array when the argument is an empty array", () => {
    expect(init([])).toEqual([]);
  });

  it("Should return an empty array when no argument is provided", () => {
    expect(init()).toEqual([]);
  });
});

describe("Last", () => {
  it("Should return the last element", () => {
    const { numsArray, stringsArray, booleansArray } = setup();

    expect(last(numsArray)).toBe(numsArray[numsArray.length - 1]);
    expect(last(stringsArray)).toBe(stringsArray[stringsArray.length - 1]);
    expect(last(booleansArray)).toBe(booleansArray[booleansArray.length - 1]);
  });

  it("Should not mutate the argument", () => {
    const { numsArray } = setup();

    const numsArrayCopy = [...numsArray];
    last(numsArrayCopy);
    expect(numsArray).toEqual(numsArrayCopy);
  });

  it("Should return undefined for empty arrays", () => {
    expect(last([])).toBeUndefined();
  });

  it("Should return undefined when no argument is provided", () => {
    expect(last()).toBeUndefined();
  });
});
