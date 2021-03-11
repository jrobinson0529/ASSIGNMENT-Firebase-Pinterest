// import showPins from '../components/showPins';
// import showBoards from '../components/showBoards';
import firebase from 'firebase/app';
import 'firebase/auth';
import addBoardForm from '../components/forms/addBoardsForm';
import addPinsForm from '../components/forms/addPinsForm';
import editPinModal from '../components/forms/editPinModal';
import formModal from '../components/forms/formModal';
import selectBoard from '../components/forms/selectBoard';
import { pinCardComponent } from '../components/pinCardComponent';
import printBoardTitle from '../components/printBoardTitle';
import showBoards from '../components/showBoards';
import showPins from '../components/showPins';
import showPublicPins from '../components/showPublicPins';
import {
  boardPinInfo, createPin, deleteBoardPins, updatePin
} from './data/boardPinsData';
import { createBoard, getBoards, searchBoard } from './data/boardsData';
import {
  copyPin,
  deletePins, getPublicPins, getSinglePin, searchPublicPins
} from './data/pinsData';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-pin')) {
      const pinId = e.target.id.split('--')[1];
      formModal();
      getSinglePin(pinId).then((pinObj) => editPinModal(pinObj));
    }
    if (e.target.id.includes('update-pin')) {
      const pinId = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#title').value,
        content: document.querySelector('#content').value,
        image: document.querySelector('#image').value,
        board_ID: document.querySelector('#board').value,
        public: document.querySelector('#public').checked
      };
      updatePin(pinId, pinObject).then((obj) => {
        printBoardTitle(obj.board);
        showPins(obj.pins);
      });
      $('#editPinModal').modal('toggle');
    }
    // SHOW ALL PINS FOR A BOARD
    if (e.target.id.includes('board-card')) {
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardObject) => {
        printBoardTitle(boardObject.board);
        showPins(boardObject.pins);
      });
    }
    if (e.target.id.includes('board-view')) {
      document.querySelector('#home-title').innerHTML = 'My Boards';
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
        image: document.querySelector('#pinUrl').value,
        board_ID: boardId,
        article: document.querySelector('#article').value,
        public: document.querySelector('#public').checked
      };
      createPin(pinObject, boardId).then((boardPinsObject) => {
        printBoardTitle(boardPinsObject.board);
        showPins(boardPinsObject.pins);
      });
    }
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObj = {
        title: document.querySelector('#boardTitle').value,
        image: document.querySelector('#boardUrl').value,
        uid: firebase.auth().currentUser.uid
      };
      createBoard(boardObj, uid).then((boardArray) => showBoards(boardArray));
    }
    if (e.target.id.includes('toggle-pin-form')) {
      addPinsForm();
    }
    if (e.target.id.includes('toggle-board-form')) {
      addBoardForm();
    }
    if (e.target.id.includes('public-pins-view')) {
      document.querySelector('#home-title').innerHTML = 'Public pins';
      getPublicPins().then((publicPinsArr) => showPublicPins(publicPinsArr));
    }
    if (e.target.id.includes('add-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      if (document.querySelector(`#select-board--${firebaseKey}`).innerHTML === '') {
        selectBoard(`select-board--${firebaseKey}`);
      } else {
        getSinglePin(firebaseKey).then((pinObj) => {
          copyPin(pinObj).then(() => {
            document.querySelector(`#pin-card--${firebaseKey}`).innerHTML = pinCardComponent(pinObj);
          });
        });
      }
    }
    document.querySelector('#board-search').addEventListener('keyup', (event) => {
      let searchValue = document.querySelector('#board-search').value;
      searchValue = searchValue.toLowerCase();
      if (event.keyCode === 13) {
        const view = document.querySelector('#home-title').innerHTML;
        if (view.toLowerCase().includes('my board')) {
          searchBoard(uid, searchValue).then((arr) => showBoards(arr));
        } else if (view.toLowerCase().includes('public pins')) {
          searchPublicPins(searchValue).then((pinArr) => showPublicPins(pinArr));
        }
      }
    });
  });
};

export default domEvents;
