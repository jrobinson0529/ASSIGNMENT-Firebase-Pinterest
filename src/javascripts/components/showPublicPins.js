import { pinCardDiv } from './pinCardComponent';

const showPublicPins = (array) => {
  document.querySelector('#boards-container').innerHTML = '';
  array.forEach((pin) => {
    document.querySelector('#boards-container').innerHTML += pinCardDiv(pin);
  });
};

export default showPublicPins;
