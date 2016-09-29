import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getConditions(location) {
    axios.get(`http://api.wunderground.com/api/c5c357713279658e/conditions/q/${location}.json`)
    .then(response => {
      ServerActions.recieveConditions(response);
    })
    .catch(err => {
      console.log('err:', err);
    })
  },

  getForcast(location) {
    axios.get(`http://api.wunderground.com/api/c5c357713279658e/forecast/q/${location}.json`)
    .then(response => {
      ServerActions.recieveForcast(response);
    })
    .catch(err => {
      console.log('err:', err);
    })
  }
}

export default API;
