const showPins = (array) => {
  document.querySelector('#boards-container').innerHTML = '';
  array.forEach((pin) => {
    document.querySelector('#boards-container').innerHTML += `<div class="card board-card" style="width: 18rem;">
    <img class="card-img-top" src="${pin.image}" alt="Card image cap" id="board-card--${pin.firebaseKey}">
    <div class="card-body">
      <h5 class="card-title">${pin.title}</h5>
      <p class="card-text">${pin.firebaseKey}</p>
    </div>
  </div>`;
  });
};

export default showPins;
