import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/logoutButton';
import showBoards from '../../components/showBoards';
import { getBoards } from '../data/boardsData';
import domEvents from '../domEvents';
import boards from './boards';

const startApp = () => {
  domBuilder();
  domEvents();
  boards();
  getBoards().then((arr) => showBoards(arr));
  logoutButton();
};

export default startApp;
