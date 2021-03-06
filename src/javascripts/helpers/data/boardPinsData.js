import { deleteBoard, getSingleBoard } from './boardsData';
import { deletePins, getBoardPins } from './pinsData';

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

export { deleteBoardPins, boardPinInfo };
