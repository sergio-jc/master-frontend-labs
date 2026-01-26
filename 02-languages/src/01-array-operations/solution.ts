// *************************************
// ****  ARRAY OPERATIONS SOLUTIONS ****
// *************************************

export function heap<T>(arr: T[] = []): T | undefined {
  return arr.at(0);
}

export function tail<T>(arr: T[] = []): T[] {
  const [_first, ...rest] = arr;
  return rest;
}

export function init<T>(arr: T[] = []): T[] {
  return arr.slice(0, arr.length - 1);
}

export function last<T>(arr: T[] = []): T | undefined {
  return arr.at(-1);
}
