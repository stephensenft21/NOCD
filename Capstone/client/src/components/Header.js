import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  return (
    <nav className="header">
      <ul className="nav-items">
        {props.user ? (
          <>
            <li className="nav-item">Hello {props.user.username}</li>
            <li
              className="nav-item"
              onClick={() => {
                props.logout();
                props.history.push("/login");
              }}
            >
              Log out
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default withRouter(Header);
