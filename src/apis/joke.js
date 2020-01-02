import axios from 'axios';

export const getAllJokes = () =>
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(res => {res})
    .catch(error => {error})
