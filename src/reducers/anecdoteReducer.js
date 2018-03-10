
const anecdoteReducer = (store = [], action) => {

  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)
    return [ ...old, { ...voted, votes: voted.votes + 1 } ]
  }
  if (action.type === 'CREATE') {
    return [ ...store, action.content ]
  }
  if (action.type === 'INIT_NOTES'){
    return action.data
  }
  return store
}

export const anecdoteCreation = (content) => {
  return {
    type: 'CREATE',
    content
  }
}

export const anecdoteVote = (content) => {
  return {
    type: 'VOTE',
    id: content
  }
}

export const doteInitialization = (data) => {
  return {
    type: 'INIT_NOTES',
    data
  }
}


export default anecdoteReducer