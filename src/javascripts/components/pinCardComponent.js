const pinCardComponent = (pin) => `
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
          <button type="button" class="btn btn-primary" id="add-pin--${pin.firebaseKey}" data-toggle="modal" data-target="">Add</button><div id="select-board--${pin.firebaseKey}"></div>
        </div>
      </div>
    </div>
  </div>`;
const pinCardDiv = (pinObj) => `<div id="pin-card--${pinObj.firebaseKey}">${pinCardComponent(pinObj)}</div>`;

export { pinCardComponent, pinCardDiv };
