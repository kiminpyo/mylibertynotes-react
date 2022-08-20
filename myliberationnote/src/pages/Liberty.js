import React from "react";
import LibertyEdit from "../components/LibertyEdit";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
const Liberty = () => {
    const {userInfo} = useSelector((state)=> state.user)
    return (
        <>
        {userInfo 
        ?   <Grid container>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                    <LibertyEdit />
                </Grid>
                <Grid item xs={1} md={3}></Grid>
            </Grid>
        :
       null
             }
          
        </>
    );
};

export default Liberty;
