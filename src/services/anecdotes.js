import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const dote = {
    content: content,
    votes: 0
  }
  const response = await axios.post(url, dote)
  return response.data
}

const vote = async (newObject) => {
  console.log('new', newObject)
  const response = await axios.put(`${url}/${newObject.id}`, newObject)
  return response.data
}

export default { getAll, createNew, vote }