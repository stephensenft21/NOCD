import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [compulsionId, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Compulsion</InputLabel>
        <Select
          labelId="compulsionId"
          id="compulsionId"
          value={compulsionId}
          onChange={() => {
            handleChange();
            props.handleNumberfieldChange();
          }}
        >
          {props.compulsions.map(compulsion => (
            <MenuItem key={props.compulsionId} value={compulsion.compulsionId}>
              {compulsion.description}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    </div>
  );
}
