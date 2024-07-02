export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map((object) => object.id);
  }
  return [];
}
