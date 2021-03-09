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
// CREATE A BOARD
const createBoard = (boardObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, boardObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => getBoards(uid).then((boardResponse) => resolve(boardResponse)))
        .catch((error) => reject(error));
    });
});
// SEARCH BOARDS
const searchBoard = (uid, searchValue) => new Promise((resolve, reject) => {
  getBoards(uid).then((response) => {
    resolve(response.filter((element) => element.title.toLowerCase().includes(searchValue)));
  })
    .catch((error) => reject(error));
});

export {
  getBoards, getSingleBoard, deleteBoard, createBoard, searchBoard
};
