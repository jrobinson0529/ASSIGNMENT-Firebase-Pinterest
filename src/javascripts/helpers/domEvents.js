// import showPins from '../components/showPins';
// import showBoards from '../components/showBoards';
import printBoardTitle from '../components/printBoardTitle';
import showBoards from '../components/showBoards';
import showPins from '../components/showPins';
import { getBoards, getSingleBoard } from './data/boardsData';
import getPins from './data/pinsData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('board-card')) {
      const boardId = e.target.id.split('--')[1];
      getSingleBoard(boardId).then((boardObject) => printBoardTitle(boardObject));
      getPins(boardId).then((arr) => showPins(arr));
    }
    if (e.target.id.includes('board-view')) {
      document.querySelector('#home-title').innerHTML = 'Boards';
      getBoards().then((array) => showBoards(array));
    }
  });
};

export default domEvents;
