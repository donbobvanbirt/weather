import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _conditions = null;
let _forcast = null;

class WeatherStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_CONDITIONS':
          _conditions = action.payload.conditions;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_FORECAST':
          _forcast = action.payload.forecast;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getConditions() {
    return _conditions;
  }

  getForcast() {
    return _forcast;
  }
}

export default new WeatherStore;
