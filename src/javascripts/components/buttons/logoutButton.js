import firebase from 'firebase/app';
import 'firebase/auth';
import home from '../../helpers/views/home';

const signMeOut = () => {
  firebase.auth().signOut();
  home();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logoutButton').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
