import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

export  function CompulsionsInStateInputField(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField onChange={props.handleFieldChange} id="description" label="Add another Compulsion" />
    </div>
  );
}
export function NoCompulsionsInStateInputField(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root} noValidate autoComplete="off">
        <TextField onChange={props.handleFieldChange} id="description" label=" Click to add compulsion" />
      </div>
    );
  }