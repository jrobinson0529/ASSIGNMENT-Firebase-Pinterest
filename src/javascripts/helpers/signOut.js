import firebase from 'firebase/app';
import 'firebase/auth';
import domEvents from './domEvents';

const signOut = () => {
  document.querySelector('body').removeEventListener('click', domEvents);
  firebase.auth().signOut();
};

export default signOut;
