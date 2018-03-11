import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import anecdoteReducer from './reducers/anecdoteReducer'
import notifyReducer from './reducers/notifyReducer'
import filterReducer from './reducers/filterReducer'


const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notify: notifyReducer,
  filter: filterReducer
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store