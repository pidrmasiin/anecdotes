import React from 'react'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notifyReducer'
import { connect } from 'react-redux'
import doteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content= e.target.anecdote.value
    e.target.anecdote.value = ''
    const newDote = await doteService.createNew(content)
    console.log('new', newDote)
    this.props.dispatch(
      anecdoteCreation(newDote)
    )
    const text = 'Lisätty anekdootti '  + content
    this.props.dispatch(
      notify(text)
    )
    setTimeout(() => {
      this.props.dispatch(notify(''))
    }, 4000)
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    anecdotes: state.filter,
    notify: state.notify,
    filter: state.filter
  }
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm