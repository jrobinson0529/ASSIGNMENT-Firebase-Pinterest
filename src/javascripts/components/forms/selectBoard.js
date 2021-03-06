import firebase from 'firebase/app';
import 'firebase/auth';
import { getBoards } from '../../helpers/data/boardsData';

const selectBoard = (pinObject = {}) => {
  let domString = `<label for="board">Select a board</label>
  <select class="form-control" id="board" required>
  <option value="">Select a board</option>`;

  getBoards(firebase.auth().currentUser.uid).then((boardsArray) => {
    boardsArray.forEach((board) => {
      if (board.firebaseKey === pinObject.board_ID) {
        domString += `<option selected value="${board.firebaseKey}>${board.title}</option>"`;
      } else {
        domString += `<option value="${board.firebaseKey}>${board.title}</option>"`;
      }
    });
    domString += '</select>';
    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
