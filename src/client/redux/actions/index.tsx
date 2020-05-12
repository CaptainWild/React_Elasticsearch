import * as constants from './constants';

export const getRoles = () => ({
  type: constants.ROLE_GET
});

export const getRolesSuccess = data => ({
  type: constants.ROLE_GET_SUCCESS,
  data
});
