const filterReducer = (store = '', action) => {
  if (action.type==='FILTER') {
    return action.filter
  }
  return store
}

export const filter = (content) => {
  return {
    type: 'FILTER',
    filter: content
  }
}

export default filterReducer