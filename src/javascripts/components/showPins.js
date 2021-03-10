const showPins = (array) => {
  document.querySelector('#boards-container').innerHTML = '';
  array.forEach((pin) => {
    document.querySelector('#boards-container').innerHTML += `
  <div class="card mb-3 pin-card" style="width: 50rem; height: 30rem">
    <div class="row no-gutters h-100">
      <div class="col-md-4 h-100">
        <img src="${pin.image}" alt="" class="h-100">
      </div>
      <div class="col-md-8 h-100">
        <div class="card-body">
          <h5 class="card-title">${pin.title}</h5>
          <hr class="pin-text-divider">
          <p class="card-text">${pin.content}</p>
          <button type="button" class="btn btn-danger" id="delete-pin--${pin.firebaseKey}--${pin.board_ID}">Delete Pin</button>
          <button type="button" class="btn btn-primary" id="edit-pin--${pin.firebaseKey}" data-toggle="modal" data-target="#editPinModal">Edit</button>
        </div>
      </div>
    </div>
  </div>`;
  });
};

export default showPins;
