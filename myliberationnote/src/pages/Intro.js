import React from "react";
import Introduce from "../components/Introduce";
import Grid from "@mui/material/Grid";
import zIndex from "@mui/material/styles/zIndex";

const Intro = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                    <Introduce />
                </Grid>
                <Grid item xs={1} md={3}></Grid>
            </Grid>
        </>
    );
};  

export default Intro;
