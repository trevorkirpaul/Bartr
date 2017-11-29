// SET_TEXT_FILTER

export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setTagFilter = (text ='') => ({
  type: 'SET_TAG_FILTER',
  text
});

export const setLocationFilter = (text = '') => ({
  type: 'SET_LOCATION_FILTER',
  text
});