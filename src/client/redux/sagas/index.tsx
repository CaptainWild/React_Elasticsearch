import { put, takeLatest, all } from 'redux-saga/effects';
import * as constants from '../actions/constants';
import axios from 'axios';
import * as actions from '../actions/index';

function* get_roles(action) {
  try {
    var res = yield axios.get(`${constants.SEARCH_ROLE_URL}`);
    if (res) {
      yield put(actions.getRolesSuccess(res.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchGet_Roles() {
  yield takeLatest(constants.ROLE_GET, get_roles);
}

export default function* rootsaga() {
  yield all([watchGet_Roles()]);
}
