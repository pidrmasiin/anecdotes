import React from 'react'
import { notifyCreation } from '../reducers/notifyReducer'
import Filter from './Filter'
import { connect } from 'react-redux'
import doteService from '../services/anecdotes'

class AnecdoteList extends React.Component {

  vote = async (anecdote) => {
    const one = this.props.anecdotesToShow.filter(a => a.id === anecdote.id)
    one[0].votes = one[0].votes + 1
    await doteService.vote(one[0])
    const text = 'Voted '  + anecdote.content
    this.props.notifyCreation(text, 4)
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter/>
        {this.props.anecdotesToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.vote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const anecdotesToShow = (anecdotes, filter) => {
  const bySearchTerm = (anecdote) => {
    if (filter === 0) {
      return true
    }
    return anecdote.toLowerCase().includes(filter.toLowerCase())
  }
  const anecdotesContent = anecdotes.filter(a => bySearchTerm(a.content) === true)
  const anecdotesToShow = anecdotesContent.sort((a, b) => b.votes - a.votes)
  return anecdotesToShow
}

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  { notifyCreation }
)(AnecdoteList)

export default ConnectedAnecdoteList
