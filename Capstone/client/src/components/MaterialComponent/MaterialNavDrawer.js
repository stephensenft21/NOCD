import React, { Component } from 'react';
import { ListItemIcon, ListItemText, List, ListItem, Drawer } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import routes from '../PracticeRoutes/Routes';

export class MaterialNavDrawer extends Component {
  constructor(props) {
    super(props);

    this.activeRoute = this.activeRoute.bind(this);
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }

  render()
   {
     
    const { classes, theme } = this.props;
    return (
      <div>
        <Drawer
          variant="permanent"
        >
          <List>   
             
            {routes.map((prop, key) => {
              return (
                <Link to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <ListItem selected={this.activeRoute(prop.path)}>
                    <ListItemIcon>
                      <prop.icon />
                    </ListItemIcon>
                    <ListItemText primary={prop.sidebarName} />
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(MaterialNavDrawer);