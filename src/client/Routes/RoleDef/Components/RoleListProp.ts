import { IRoleDef } from '../../../Types/Domain/Role';

export interface RoleListProp {
  roleDefs: IRoleDef[];
  theme?: any;
  getRoles: any;
}

export interface RoleMainProp {
  roles: IRoleDef[];
  getRoles: any;
}
