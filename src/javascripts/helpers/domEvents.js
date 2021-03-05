// import showPins from '../components/showPins';
// import showBoards from '../components/showBoards';
import printBoardTitle from '../components/printBoardTitle';
import showBoards from '../components/showBoards';
import showPins from '../components/showPins';
import { deleteBoard, getBoards, getSingleBoard } from './data/boardsData';
import { deleteAllPins, deletePins, getPins } from './data/pinsData';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('board-card')) {
      const boardId = e.target.id.split('--')[1];
      getSingleBoard(boardId).then((boardObject) => printBoardTitle(boardObject));
      getPins(boardId).then((arr) => showPins(arr));
    }
    if (e.target.id.includes('board-view')) {
      document.querySelector('#home-title').innerHTML = 'Boards';
      getBoards(uid).then((array) => showBoards(array));
    }
    if (e.target.id.includes('delete-pin')) {
      const pinId = e.target.id.split('--')[1];
      const boardId = e.target.id.split('--')[2];
      deletePins(pinId, boardId).then((arr) => showPins(arr));
    }
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const boardId = e.target.id.split('--')[1];
        getPins(boardId).then((arr) => arr.forEach((element) => deleteAllPins(element.firebaseKey, boardId)));
        deleteBoard(boardId, uid).then((array) => showBoards(array));
        // getBoards(uid).then((array) => showBoards(array));
      }
    }
  });
};

export default domEvents;
