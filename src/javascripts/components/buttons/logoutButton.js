import firebase from 'firebase/app';
import 'firebase/auth';
import domEvents from '../../helpers/domEvents';
import home from '../../helpers/views/home';

const signMeOut = () => {
  document.querySelector('body').removeEventListener('click', domEvents);
  firebase.auth().signOut();
  home();
  window.location.reload();
};

const logoutButton = () => {
  const domString = '<a class="dropdown-item" href="#" id="google-auth">Signout</a>';
  document.querySelector('#profile-dropdown').innerHTML += (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
