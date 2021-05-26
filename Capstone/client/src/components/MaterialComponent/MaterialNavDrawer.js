import React, { Component } from 'react';
import { ListItemIcon, ListItemText, List, ListItem, Drawer } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { routes } from './Routes'
export class MaterialNavDrawer extends Component {
  constructor(props) {
    super(props);
    this.activeRoute = this.activeRoute.bind(this);
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  render() {
    return (
      <div>
        <Drawer
          variant="permanent"
        >
          <List>
            {routes !== null || routes !== undefined ? (
              routes.map((prop, key) => {
                return (
                  <Link to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                    <ListItem selected={this.activeRoute(prop.path)}>
                      <ListItemIcon>
                        <prop.icon/>
                      </ListItemIcon>
                      <ListItemText primary={prop.sidebarName} />
                    </ListItem>
                  </Link>
                );
              })
            ) : null}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(MaterialNavDrawer);