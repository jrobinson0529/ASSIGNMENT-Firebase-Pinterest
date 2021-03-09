const showBoards = (array) => {
  document.querySelector('#boards-container').innerHTML = '';
  array.forEach((board) => {
    document.querySelector('#boards-container').innerHTML += `<div class="card board-card" style="width: 18rem;">
    <img class="card-img-top" src="${board.image}" alt="Card image cap" id="board-card--${board.firebaseKey}">
    <div class="card-body">
      <h5 class="card-title">${board.title}</h5>
      <button type="button" class="btn btn-danger" id="delete-board--${board.firebaseKey}">Delete</button>
    </div>
  </div>`;
  });
};

export default showBoards;
