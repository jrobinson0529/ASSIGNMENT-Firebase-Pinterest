const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="add-pin-form" class="d-flex justify-content-center"></div>
                                                <div id="boards-container" class="boards-container"></div>
  `;
};

export default domBuilder;
