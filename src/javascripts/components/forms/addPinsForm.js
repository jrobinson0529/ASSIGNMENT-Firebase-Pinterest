import firebase from 'firebase/app';
import 'firebase/auth';
import selectBoard from './selectBoard';

const addPinsForm = () => {
  document.querySelector('#add-pin-form').innerHTML = '';
  document.querySelector('#home-title').innerHTML = '<h1 class="home-title">Create a Pin!</h1>';
  document.querySelector('#boards-container').innerHTML = `
  <form>
    <div class="form-group">
      <label for="pinTitle">Pin's Title</label>
      <input type="text" class="form-control" id="pinTitle" aria-describedby="title">
    </div>
    <div class="form-group">
      <label for="pinContent">Pin content</label>
      <textarea type="text" class="form-control" id="pinContent"></textarea>
    </div>
    <div class="form-group">
      <label for="imageUrl">Enter Image URL</label>
      <input type="url" class="form-control" id="pinUrl">
    </div>
    <div class="form-group">
      <label for="article">Add an article</label>
      <input type="url" class="form-control" id="article">
    </div>
    <div id="select-board" class="form-group"></div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="public">
      <label class="form-check-label" for="public">Public?</label>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-pin">Submit</button>
  </form>`;
  selectBoard('select-board', firebase.auth().currentUser.uid);
  document.querySelector('#select-board').innerHTML += 'RANDOM';
};

export default addPinsForm;
