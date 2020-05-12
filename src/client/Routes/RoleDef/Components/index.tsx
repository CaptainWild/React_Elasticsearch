import * as React from 'react';
import { ThemedComponentClass } from '@friendsofreactjs/react-css-themr';

import { ThemeContext } from '../../../Context';
import RoleListComponent from './RoleList';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import { RoleMainProp } from './RoleListProp';
const mapStateToProps = state => {
  return { roles: state.data };
};

function mapDispatchToProps(dispatch) {
  return {
    loading: () => dispatch(actions.getRoles())
  };
}

/**
 * Root component which calls the list component to show the existing role list
 * Then list component calls different other components like create, members, etc
 * @extends React.Component
 */
class ConnectedRoleDefComponent extends React.Component<RoleMainProp, null> {
  componentDidMount() {
    this.props.loading();
  }
  /**
   * Render the component to the DOM
   * @returns {}
   */
  render() {
    const { roles } = this.props;
    console.log('-----------roles:', roles);
    return (
      <div>
        <ThemeContext.Consumer>
          {theme => <RoleListComponent theme={theme} roleDefs={roles} />}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

let RoleDefComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedRoleDefComponent) as ThemedComponentClass<RoleMainProp, null>;

export default RoleDefComponent;