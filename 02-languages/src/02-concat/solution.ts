// *************************************
// ****           CONCAT            ****
// *************************************

// export const concat = <A, B>(a: A[] = [], b: B[] = []): (A | B)[] => {
//   return [...a, ...b];
// };

export const concat = (...arrays : unknown[][]): unknown[] => {
  return arrays.reduce((acc, curr) => [...acc, ...curr], []);
};
