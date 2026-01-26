// *************************************
// ****       CLONE & MERGE         ****
// *************************************

// export function clone<T>(source: T = {} as T): T {
//   return {... source}
// }

export function clone<T>(source: T = {} as T): T {
  const cloned = {} as T;
  for (const key in source) {
    if (typeof source[key] === "object" && source[key] !== null) {
      cloned[key] = clone(source[key]);
    } else {
      cloned[key] = source[key];
    }
  }
  return cloned;
}

export function merge<T, E>(source: T = {} as T, target: E = {} as E): T & E {
  return { ...clone(target), ...clone(source) };
}
