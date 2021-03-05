import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/logoutButton';
import showBoards from '../../components/showBoards';
import { getBoards } from '../data/boardsData';
import domEvents from '../domEvents';
import boards from './boards';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  console.warn(user.uid);
  boards();
  getBoards(user.uid).then((arr) => showBoards(arr));
  logoutButton();
};

export default startApp;
