import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import "./Menu_section.css"
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '98%',
        height:"40vh"
        // border:"2px solid red"

      },
    },
  }));
const Insider=()=>{
    return(
        <>
     <h1>Carciofo alla Romana con Fonduta di Pecorino e Olive Taggiasche</h1>
     <h1>salman</h1>


        </>
    )
}
function Menu_materialui_component() {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
          
        
         <TextField
          id="outlined-read-only-input"
        //   label="Antipasti"
        //   defaultValue={Insider}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          className="menu_materialui_component"
        >
            
        </TextField>
         
            </form>
        </div>
    )
}

export default Menu_materialui_component
