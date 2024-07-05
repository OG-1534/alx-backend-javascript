/*
 * function getListStudentIds that returns
 * an array of ids from a list of object.
 */


export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id);
  }
  return [];
}
