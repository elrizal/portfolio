import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div>
       <TextField
        id="Name"
        label="Name"
        placeholder="Name"
        fullWidth
        margin="normal"
        InputLabelProps={{
        shrink: true
      }}
        variant="outlined"/>
       <TextField
        id="email"
        label="Email"
        placeholder="Email"
        fullWidth
        margin="normal"
        InputLabelProps={{
        shrink: true
      }}
        variant="outlined"/>
       <TextField
        id="last"
        label="Company"
        placeholder="Company"
        fullWidth
        margin="normal"
        InputLabelProps={{
        shrink: true
      }}
        variant="outlined"/>
        <TextField
        id="last"
        label="Message"
        multiline rows="4"
        placeholder="Message"
        fullWidth
        margin="normal"
        InputLabelProps={{
        shrink: true
      }}
        variant="outlined"/>

      <div className="center">
        <Button variant="contained" color="secondary">
          Submit
        </Button>
      </div>

    </div>

  )
}
