import * as constants from './constants';

export const getRoles = allShow => ({
  type: constants.ROLE_GET,
  allShow
});

export const getRolesSuccess = data => ({
  type: constants.ROLE_GET_SUCCESS,
  data
});
