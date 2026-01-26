import { clone, merge } from "./solution";

const setup = () => {
  const user1 = {
    name: "Maria",
    surname: "Ibañez",
    country: "SPA",
    address: { country: "SPA", city: "Madrid" },
  };
  const user2 = { name: "Luisa", age: 31, married: true };

  return { user1, user2 };
};

describe("Clone", () => {
  it("should clone an object", () => {
    const { user1 } = setup();
    const cloned = clone(user1);
    expect(cloned).toEqual(user1);
  });

  it("should not be the same reference", () => {
    const { user1 } = setup();
    const cloned = clone(user1);
    expect(cloned).not.toBe(user1);
  });

  it("should perform a deep clone", () => {
    const user = {
      name: "Maria",
      address: { country: "SPA", city: "Madrid" },
    };
    const cloned = clone(user);
    expect(cloned).toEqual(user);
    expect(cloned.address).not.toBe(user.address);
  });

  it("should clone empty object to empty object", () => {
    const cloned = clone({});
    expect(cloned).toEqual({});
  });

  it("should throw when cloning null or undefined", () => {
    expect(clone(null)).toEqual({});
    expect(clone(undefined)).toEqual({});
  });

  it("should clone an object when no argument is passed", () => {
    expect(clone()).toEqual({});
  });
});

describe("Merge", () => {
  it("should merge two objects", () => {
    const { user1, user2 } = setup();
    const merged = merge(user1, user2);
    expect(merged).toEqual({ ...user2, ...user1 });
  });

  it("should not be the same reference", () => {
    const { user1, user2 } = setup();
    const merged = merge(user1, user2);
    expect(merged).not.toBe(user1);
    expect(merged).not.toBe(user2);
  });

  it("should first argument have preference over second", () => {
    const { user1, user2 } = setup();
    const merged = merge(user1, user2);
    expect(merged.name).toBe(user1.name);
  });

  it("should return an empty object when merging two empty objects", () => {
    const merged = merge({}, {});
    expect(merged).toEqual({});
  });

  it("should merge with empty object when one argument is empty", () => {
    const { user1 } = setup();
    const merged1 = merge(user1, {});
    expect(merged1).toEqual(user1);
    const merged2 = merge({}, user1);
    expect(merged2).toEqual(user1);
  });

  it("should merge with empty object when no arguments are passed", () => {
    const merged = merge();
    expect(merged).toEqual({});
  });
});
