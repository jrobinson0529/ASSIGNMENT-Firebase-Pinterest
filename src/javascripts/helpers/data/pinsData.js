import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_ID"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getPins;
