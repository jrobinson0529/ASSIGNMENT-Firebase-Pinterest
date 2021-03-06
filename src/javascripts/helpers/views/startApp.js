import domBuilder from '../../components/domBuilder';
import addPinsForm from '../../components/forms/addPinsForm';
import logoutButton from '../../components/logoutButton';
import showBoards from '../../components/showBoards';
import { getBoards } from '../data/boardsData';
import domEvents from '../domEvents';
import boards from './boards';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  addPinsForm();
  boards();
  getBoards(user.uid).then((arr) => showBoards(arr));
  logoutButton();
};

export default startApp;
