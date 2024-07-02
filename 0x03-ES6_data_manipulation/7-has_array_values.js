/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, array) {
  let result = true;
  array.map((x) => {
    if (!set.has(x)) {
      result = false;
    }
  });

  return result;
}
