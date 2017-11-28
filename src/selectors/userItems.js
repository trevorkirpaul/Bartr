export default (items, userName) => {
  return items.filter((item) => item.createdBy === userName);
}