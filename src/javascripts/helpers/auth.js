import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import firebaseConfig from './apiKeys';
import home from './views/home';
import startApp from './views/startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
