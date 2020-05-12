import { IRoleDef } from '../../../Types/Domain/Role';

export interface RoleListProp {
  roleDefs: IRoleDef[];
  theme?: any;
}

export interface RoleMainProp {
  roles: IRoleDef[];
  loading: any;
}
