import selectBoard from './selectBoard';

const editPinModal = (pinObject) => {
  document.querySelector('#editPinModalBody').innerHTML = `
          <form id="edit-pin-form-modal" class="edit-pin-form">
            <div class="form-group">
              <label for="title">Pin's Title</label>
              <input type="text" class="form-control" id="title" value="${pinObject.title}" required>
            </div>
            <div class="form-group">
              <label for="pinContent">Pin content</label>
              <textarea type="text" class="form-control" id="content" value="${pinObject.content}" required>${pinObject.content}</textarea>
            </div>
            <div class="form-group">
              <label for="imageUrl">Enter Image URL</label>
              <input type="url" class="form-control" id="image" value="${pinObject.image}" required>
            </div>
            <div class="form-group">
              <label for="article">Add an article</label>
              <input type="url" class="form-control" id="article" value="${pinObject.article}">
            </div>
            <div id="select-board-edit" class="form-group"></div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="public">
              <label class="form-check-label" for="public">Public?</label>
             </div>
             <button type="submit" class="btn btn-primary" id="update-pin--${pinObject.firebaseKey}">Save changes</button>
          </form>
`;
  selectBoard('select-board-edit', pinObject);
};

export default editPinModal;
