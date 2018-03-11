import anecdoteService from '../services/anecdotes'
import doteService from '../services/anecdotes'

const anecdoteReducer = (store = [], action) => {

  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)
    return [ ...old, { ...voted, votes: voted.votes + 1 } ]
  }
  if (action.type === 'CREATE') {
    return [ ...store, action.newDote ]
  }
  if (action.type === 'INIT_NOTES'){
    return action.data
  }
  return store
}

export const anecdoteCreation = (content) => {
  return async (dispatch) => {
    const newDote = await doteService.createNew(content)
    dispatch({
      type: 'CREATE',
      newDote
    })
  }
}

export const anecdoteVote = (content) => {
  return {
    type: 'VOTE',
    id: content
  }
}

export const doteInitialization = () => {
  return async (dispatch) => {
    const notes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}


export default anecdoteReducer