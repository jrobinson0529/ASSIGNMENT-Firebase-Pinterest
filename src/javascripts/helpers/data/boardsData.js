import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';
import showBoards from '../../components/showBoards';

const dbUrl = firebaseConfig.databaseURL;
// GET BOARDS
const getBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// GET SINGLE BOARD
const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
// DELETE BOARD
const deleteBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(uid).then((arr) => showBoards(arr)))
    .catch((error) => reject(error));
});

export { getBoards, getSingleBoard, deleteBoard };
