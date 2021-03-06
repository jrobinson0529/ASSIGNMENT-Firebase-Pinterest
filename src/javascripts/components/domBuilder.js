const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="boards-container" class="boards-container"></div>
                                              <div id="add-pin-form" class="d-flex justify-content-center"></div>
  `;
};

export default domBuilder;
