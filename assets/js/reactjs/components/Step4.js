import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton, InputAdornment, List, ListItem, ListItemText, TextField, Typography  , Grid} from '@material-ui/core';
import { DeleteForever, Edit, FitnessCenter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth : "50rem",
      marginLeft : "auto",
      marginRight : "auto",
    },
    title: {
        margin: theme.spacing(4)
    },
    text_field: {
        alignItems: "center",
        marginBottom : theme.spacing(3)

    },
    constraint_list:{
        marginTop : theme.spacing(3),
        marginBottom : theme.spacing(3)
    }
}));

function Step4(props) {

    const classes = useStyles()
 /*    const [input, setInput] = React.useState('')
    const [constraint, setConstraint] = React.useState('')

    const addConstraint = (e) => {
        e.preventDefault()
        if (input) {
            setConstraint(input)
            setInput('')
        }else{
            alert("input field should not be empty")
        }
    } */

    return (
        <div className={classes.container}>
            <Typography
            component={'span'}
                className={classes.title}
                variant="h4"
                align="center"
                color="primary"
                gutterBottom
            >
                Contraintes
            </Typography>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={3}
            >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField 
                        name="constraint"
                        component={'span'}
                        id="contraints"
                        label="ajoutez des contraintes"
                        fullWidth
                        variant="outlined"
                        className={classes.text_field}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FitnessCenter />
                                </InputAdornment>
                            ),
                        }}
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button 
                        disabled={props.isFirst()}
                        onClick={props.prev}
                    >Previous
                    </Button>
                    <Button
                        disabled={props.isLast()}
                        onClick={props.next}
                    >Next
                    </Button>
                </Grid>
            </Grid>

            

            {/* {
                constraint?
                <List className={classes.constraint_list}>
                    <ListItem>
                        <ListItemText 
                            secondary={constraint}
                        />
                        <IconButton
                            color="secondary"
                            size="medium"
                        >
                            <DeleteForever />
                        </IconButton>
                        <IconButton
                            color="primary"
                            size="medium"
                        
                        >
                            <Edit/>
                        </IconButton>
                    </ListItem>
                </List> : ''
            } */}
        </div>
    )
}

export default Step4
