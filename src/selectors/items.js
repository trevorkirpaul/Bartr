// items slector function

// TODO: add more filter options

export default (items, { text }) => {
  return items.filter((item) => {
    const textMatch = text === '' || (item.title.toLowerCase()).includes(text.toLowerCase()) || (item.description.toLowerCase()).includes(text.toLowerCase())
    return textMatch;
  })
}