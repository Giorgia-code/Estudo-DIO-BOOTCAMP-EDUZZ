import { INCREMENT, DECREMENT } from './actions'

const initialState = {
  // a nossa store precisa ter um estado inicial, que no caso definimos que comecara em zero
  count: 0
}

export function reducer(state = initialState, action) {
  // definimos um reducer que verifica qual action está sendo desparada
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}
