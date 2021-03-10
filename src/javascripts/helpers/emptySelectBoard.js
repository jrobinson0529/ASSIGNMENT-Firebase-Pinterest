const emptySelectBoard = (firebaseKey) => {
  document.querySelector(`#select-board--${firebaseKey}`).innerHTML = '';
};

export default emptySelectBoard;
