import API from '../API'

const WeatherActions = {
  getForcast(location) {
    API.getForcast(location);
    API.getConditions(location);
  }
}

export default WeatherActions;
