import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import firebaseConfig from './apiKeys';
import { createUserNode, getSingleUser } from './data/userData';
import home from './views/home';
import startApp from './views/startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      getSingleUser(user.uid).then((response) => {
        if (Object.values(response.data).length === 0) {
          createUserNode(user);
        }
      });
      startApp(user);
    } else {
      // person is NOT logged in
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
