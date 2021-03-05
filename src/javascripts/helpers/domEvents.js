const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('board-card')) {
      console.warn(e.target.id);
    }
  });
};

export default domEvents;
