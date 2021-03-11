import firebase from 'firebase/app';
import 'firebase/auth';

const boards = () => {
  const domString = `
      <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">&#9776</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav w-100">
        <div class="nav-link-container d-flex w-100 justify-content-start">
          <a class="navbar-brand" href="#" id="public-pins-view">Pinterest</a>
          <a class="nav-link" href="#" id="toggle-pin-form">Create Pin</a>
          <a class="nav-link" href="#" id="toggle-board-form">Create Board</a>
          <a class="nav-link" href="#" id="board-view">My Boards</a>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" id="board-search" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>
        <div id="logoutButton" class="ml-auto"></div>
        <div class="profile-image" style="background-image: url(${firebase.auth().currentUser.photoURL})" id="profile-page--${firebase.auth().currentUser.uid}"></div>
        <p class="signed-in-as">Signed in as ${firebase.auth().currentUser.displayName}</p>
        </div>
    </div>
    </nav>
    <h1 class="home-title" id="home-title">Public pins</h1>`;
  document.querySelector('#login-form-container').innerHTML = domString;
};

export default boards;
