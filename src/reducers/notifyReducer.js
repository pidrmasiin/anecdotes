

const notifyReducer = (store = '', action) => {
  if (action.type==='SHOW') {
    return action.notify
  }
  return store
}

export const notify = (content) => {
  return {
    type: 'SHOW',
    notify: content
  }
}

export default notifyReducer