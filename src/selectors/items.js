// items slector function

// TODO: add more filter options

export default (items, { text, tag, location }) => {
  return items.filter((item) => {
    const textMatch = text === '' || (item.title.toLowerCase()).includes(text.toLowerCase()) || (item.description.toLowerCase()).includes(text.toLowerCase());
    const tagMatch = tag === '' || item.tags.includes(tag);
    const locationMatch = location === '' || item.location.toLowerCase().includes(location.toLowerCase()); 

    return textMatch && tagMatch && locationMatch;
  })
}