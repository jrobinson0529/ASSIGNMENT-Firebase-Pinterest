import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/buttons/logoutButton';
import domEvents from '../domEvents';
import boards from './boards';
import { getPublicPins } from '../data/pinsData';
import showPublicPins from '../../components/showPublicPins';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  boards();
  getPublicPins(user).then((arr) => showPublicPins(arr));
  logoutButton();
};

export default startApp;
