import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  recieveConditions(conditions) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_CONDITIONS',
      payload: { conditions }
    })
  },

  recieveForcast(forecast) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_FORECAST',
      payload: { forecast }
    })
  }
}

export default ServerActions;
