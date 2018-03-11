import React from 'react'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { notifyCreation } from '../reducers/notifyReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content= e.target.anecdote.value
    e.target.anecdote.value = ''
    this.props.anecdoteCreation(content)
    const text = 'Lisätty anekdootti '  + content
    this.props.notifyCreation(text, 5)
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
    notify: state.notify,
    filter: state.filter
  }
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  { anecdoteCreation,  notifyCreation }
)(AnecdoteForm)

export default ConnectedAnecdoteForm