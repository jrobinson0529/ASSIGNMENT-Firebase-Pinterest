import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { deleteBoard, getSingleBoard } from './boardsData';
import { deletePins, getBoardPins } from './pinsData';

const dbUrl = firebaseConfig.databaseURL;
const boardPinInfo = (boardId) => new Promise((resolve, reject) => {
  const boardPins = getBoardPins(boardId);
  const board = getSingleBoard(boardId);

  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve(
      { board: boardResponse, pins: boardPinsResponse }
    ))
    .catch((error) => reject(error));
});
const deleteBoardPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deleteAllPins = boardPinsArray.map((pin) => deletePins(pin.firebaseKey));
    Promise.all(deleteAllPins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});
// CREATE PIN THEN DISPLAY CHOSEN BOARD PINS TO DOM
const createPin = (pinObject, boardId) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          boardPinInfo(boardId).then((boardPinsObject) => resolve(boardPinsObject));
        });
    }).catch((error) => reject(error));
});
// UPDATE PIN
const updatePin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
    .then(() => resolve(boardPinInfo(pinObject.board_ID)))
    .catch((error) => reject(error));
});

export {
  deleteBoardPins, boardPinInfo, createPin, updatePin
};
