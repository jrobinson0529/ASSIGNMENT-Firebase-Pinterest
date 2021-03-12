import firebase from 'firebase/app';
import 'firebase/auth';
import home from '../../helpers/views/home';

const signMeOut = () => {
  firebase.auth().signOut();
  home();
};

const logoutButton = () => {
  const domString = '<a class="dropdown-item" href="#" id="google-auth">Signout</a>';
  document.querySelector('#profile-dropdown').innerHTML += (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
