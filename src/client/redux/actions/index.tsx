import * as constants from './constants';

export const getRoles = (allShow, filterBy) => ({
  type: constants.ROLE_GET,
  allShow,
  filterBy
});

export const getRolesSuccess = data => ({
  type: constants.ROLE_GET_SUCCESS,
  data
});
