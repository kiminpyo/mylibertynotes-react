import React from "react";
import LibertyEdit from "../components/LibertyEdit";
import { Grid } from "@mui/material";
const Liberty = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                    <LibertyEdit />
                </Grid>
                <Grid item xs={1} md={3}></Grid>
            </Grid>
        </>
    );
};

export default Liberty;
