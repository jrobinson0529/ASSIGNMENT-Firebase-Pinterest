import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
// GET PINS
const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_ID"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// DELETE PINS
const deletePins = (pinId, boardId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${pinId}.json`)
    .then(() => getPins(boardId).then((array) => resolve(array)))
    .catch((error) => reject(error));
});

export { deletePins, getPins };
