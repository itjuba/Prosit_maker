import React  from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField,  InputAdornment , Button } from "@material-ui/core";
import { School ,
        AssignmentInd, 
        Contacts, 
        Link, 
        LocalLibrary, 
        PeopleAlt, 
        RecordVoiceOver, 
        ShortText, 
        Subject, 
        Title 
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth : "50rem",
      marginLeft : "auto",
      marginRight : "auto",
        marginTop : "50px"
    },
    title: {
      margin: theme.spacing(3)
    },
    form : {
        display :"flex" , 
        flexDirection : "column",
        margin:theme.spacing(3)
    },
    text_field: {
      alignItems: "center",
    },
    button_submit : {
       margin : theme.spacing(3),
       paddingLeft : theme.spacing(5),
       paddingRight : theme.spacing(5),
       marginLeft: "auto",
       marginRight: "auto"
    }
}));

 
const HandleChange = ((e)=>{
    console.log(e.target.value)
    console.log(e.target.name)

});

function Step1(props) {

    const classes = useStyles();
    return (
        <div   className={classes.container}>
            <Typography
                component={'span'}
                className={classes.title}
                variant="h4"
                align="center"
                color="primary"
                gutterBottom
            >
                Informations du prosit
            </Typography>
           {/*  <form onSubmit={handleSubmit} className={classes.form}> */}
                <Grid  style={{"marginTop" : "10px"}}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField 
                            onChange={(e)=>{HandleChange(e)}}
                            name="title"
                            component={'span'}
                            id="title"
                            label="titre du prosit"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <Title />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField 
                            onChange={props.handleChange}
                            name = "link"
                            component={'span'}
                            id="link"
                            label="lien moodle"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <Link />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField 
                            onChange={props.handleChange}
                            name = "general"
                            component={'span'}
                            id="general"
                            label="generalisation"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <ShortText />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField 
                            onChange={props.handleChange}
                            name = "context"
                            component={'span'}
                            id="context"
                            label="context"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <Subject />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField 
                            onChange={props.handleChange}
                            name = "animateur"
                            component={'span'}
                            id="animateur"
                            label="animateur"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <RecordVoiceOver />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField 
                            onChange={props.handleChange}
                            name = "gestionnaire"
                            component={'span'}
                            id="gestionnaire"
                            label="gestionnaire"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <Contacts />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField 
                            onChange={props.handleChange}
                            name = "scribe"
                            component={'span'}
                            id="scribe"
                            label="scribe"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <LocalLibrary />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField 
                            onChange={HandleChange}
                            name = "secretaire"
                            component={'span'}
                            id="secretaire"
                            label="secretaire"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <AssignmentInd />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField 
                            onChange={props.handleChange}
                            name = "groupe"
                            component={'span'}
                            id="group"
                            label="groupe de prosit"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <PeopleAlt />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField 
                            onChange={props.handleChange}
                            name = "grad"
                            component={'span'}
                            id="year"
                            label="année scolaire"
                            required
                            fullWidth
                            variant="outlined"
                            className={classes.text_field}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <School />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Button 
                                disabled={props.isFirst()}
                                onClick={props.prev}
                            >Previous</Button>
                            <Button
                                disabled={props.isLast()}
                                onClick={props.next}
                            >Next</Button>
                    </Grid>
                </Grid>
           {/*  </form> */}
        </div>
    )
}

export default Step1
