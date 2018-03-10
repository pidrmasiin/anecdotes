import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notifyReducer from './reducers/notifyReducer'
import filterReducer from './reducers/filterReducer'


const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notify: notifyReducer,
  filter: filterReducer
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)