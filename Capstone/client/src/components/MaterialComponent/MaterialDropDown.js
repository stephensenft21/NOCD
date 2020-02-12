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
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
   const [compulsionId, setCount] = React.useState("");

   const handleChange = (event,name) => {

     console.log(name)
     setCount(event.target.value);

     
   };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
        <Select
        name={props.compulsion}
          
          labelId="compulsionId"
          id="compulsionId"
          value={compulsionId}
          onChange={(e) => {
           handleChange(e,"compulsionId")
            props.handleNumberfieldChange(e);
          }}
        >
          {props.compulsions.map((compulsion, i) => (
            <MenuItem key={i} value={compulsion.compulsionId}>
              {compulsion.description}
            </MenuItem>
            
          ))}
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    </div>
  );
}
