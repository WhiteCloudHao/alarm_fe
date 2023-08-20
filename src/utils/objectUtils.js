export function isDuplicateObjectField(obj1, obj2, field) {
  return obj1[field] === obj2[field];
}
