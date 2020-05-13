import * as constants from '../actions/constants';

const initialState = {
  data: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ROLE_GET_SUCCESS: {
      const data = action.data.hits.hits.map(item => item._source);
      return Object.assign({}, state, {
        data: data
      });
    }

    default:
      return state;
  }
}

export default rootReducer;
