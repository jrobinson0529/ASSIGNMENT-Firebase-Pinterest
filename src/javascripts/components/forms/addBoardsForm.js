const addBoardForm = () => {
  document.querySelector('#home-title').innerHTML = 'Create a Board!';
  document.querySelector('#boards-container').innerHTML = `
  <form>
    <div class="form-group">
      <label for="boardTitle">Board's Title</label>
      <input type="text" class="form-control" id="boardTitle" aria-describedby="boardTitle">
    </div>
    <div class="form-group">
      <label for="boardUrl">Enter Image URL</label>
      <input type="url" class="form-control" id="boardUrl">
    </div>
    <button type="submit" class="btn btn-primary" id="submit-board">Submit</button>
  </form>`;
};

export default addBoardForm;
