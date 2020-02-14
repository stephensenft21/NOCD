import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));

export function CompulsionsInStateInputField(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={props.handleFieldChange}
        id="description"
        label="Enter New"
        autoFocus
      />
    </div>
  );
}
export function NoCompulsionsInStateInputField(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={props.handleFieldChange}
        id="description"
        label="Identify Your Compulsion"
        autoFocus
      />
    </div>
  );
}
export function LoginEmailInput(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} noValidate autoComplete="on">
      <TextField
        id="email"
        name="email"
        type="email"
        placeholder="example@email.com"
        autoFocus
        onChange={props.handleInputChange}
      />
    </div>
  );
}
export function LoginPasswordInput(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        autoFocus
        onChange={props.handleInputChange}
      />
    </div>
  );
}
