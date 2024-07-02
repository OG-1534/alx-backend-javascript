export default function groceriesList() {
  const endMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
    // all keys in the object into an array
  const list = Array.from(Object.keys(obj));

  // map through the array. For each item, set the value to the key in the endMap
  list.map((item) => endMap.set(item, obj[item]));
  return endMap;
}
