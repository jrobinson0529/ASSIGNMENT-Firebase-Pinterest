import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const createUserNode = (user) => new Promise((resolve, reject) => {
  const userObject = {
    name: user.displayName,
    email: user.email,
    profileImage: user.photoURL,
    phoneNumber: user.phoneNumber,
    uid: user.uid,
    creationTime: user.metadata.creationTime,
    lastSignedIn: user.metadata.lastSignInTime,
  };
  axios.post(`${dbUrl}/users.json`, userObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/users/${response.data.name}.json`, body);
    }).then((response) => console.warn(response))
    .catch((error) => reject(error));
});
// GET SINGLE USER
const getSingleUser = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { getSingleUser, createUserNode };
