// import showPins from '../components/showPins';
// import showBoards from '../components/showBoards';
import addPinsForm from '../components/forms/addPinsForm';
import printBoardTitle from '../components/printBoardTitle';
import showBoards from '../components/showBoards';
import showPins from '../components/showPins';
import { boardPinInfo, createPin, deleteBoardPins } from './data/boardPinsData';
import { getBoards } from './data/boardsData';
import { deletePins } from './data/pinsData';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // SHOW ALL PINS FOR A BOARD
    if (e.target.id.includes('board-card')) {
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardObject) => {
        printBoardTitle(boardObject.board);
        showPins(boardObject.pins);
        addPinsForm();
      });
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
        deleteBoardPins(boardId, uid).then((boardsArray) => showBoards(boardsArray));
      }
    }
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const boardId = document.querySelector('#board').value;
      const pinObject = {
        title: document.querySelector('#pinTitle').value,
        content: document.querySelector('#pinContent').value,
        image: document.querySelector('#pinTitle').value,
        board_ID: document.querySelector('#board').value
      };
      createPin(pinObject, boardId).then((boardPinsObject) => {
        printBoardTitle(boardPinsObject.board);
        showPins(boardPinsObject.pins);
      });
    }
  });
};

export default domEvents;
