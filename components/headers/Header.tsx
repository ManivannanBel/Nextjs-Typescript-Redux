import React, { useState, useEffect } from 'react'
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAppTheme } from '../../redux/actions/uiActions';

const Header = (props) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log(props.darkTheme)
    }, [])

    const changeTheme = () => {
        props.setAppTheme(!checked);
        setChecked(!checked);
    }

    return (
        <div>
           <AppBar style={(props.darkTheme)?{backgroundColor : "black"} : {backgroundColor : "white"}}>
            <Toolbar>
                <Typography variant="h6" noWrap style={(props.darkTheme)?{color : "white"} : {color : "black"}}>
                   Nextjs test
                </Typography>  
                <section style={{marginLeft: "auto", marginRight: -12, display: "inline-flex"}}>
                <Typography component="div" style={{color : (props.darkTheme)?"white":"black", padding: "0px 10px 0px 10px"}}>
                    <Grid  component="label" container alignItems="center" spacing={0}>
                        <Grid item>
                            <Typography>
                            {(props.darkTheme) ? `Light theme` : `Dark theme`}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Switch checked={checked} onChange={() => changeTheme() }/>
                        </Grid>
                    </Grid>
                </Typography>
                <Button>
                    <Typography variant="h6" style={(props.darkTheme)?{color : "white"} : {color : "black"}}>
                        Log in
                    </Typography>
                </Button>
                </section>
            </Toolbar>    
           </AppBar> 
        </div>
    )
}

PropTypes.Header = {
    darkTheme : PropTypes.bool.isRequired
}

const mapStateProps = (state : any) => ({
    darkTheme : state.ui.darkTheme
});

export default connect(mapStateProps, {setAppTheme}) (Header);
