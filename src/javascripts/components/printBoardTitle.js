const printBoardTitle = (object) => {
  document.querySelector('#home-title').innerHTML = `<h1 class="home-title">${object.title}</h1>`;
};

export default printBoardTitle;
