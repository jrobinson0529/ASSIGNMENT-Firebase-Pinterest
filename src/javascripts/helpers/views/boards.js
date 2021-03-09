import firebase from 'firebase/app';
import 'firebase/auth';

const boards = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon">&#9776</span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <div class="navbar-nav w-100">
  <a class="navbar-brand" href="#" id="board-view">Pinterest</a>
  <a class="nav-link" href="#" id="toggle-pin-form">Create Pin</a>
  <a class="nav-link" href="#" id="toggle-board-form">Create Board</a>
    <div id="logoutButton" class="ml-auto"></div>
    <div class="profile-image" style="background-image: url(${firebase.auth().currentUser.photoURL})"></div>
    </div>
</div>
</nav>
<h1 class="home-title" id="home-title">My Boards</h1>`;
  document.querySelector('#login-form-container').innerHTML = domString;
};

export default boards;
