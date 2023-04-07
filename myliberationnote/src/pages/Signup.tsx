import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { SIGNUP } from "../reducers/user";
import Auth from "../HOC/auth";
import { useStyles } from "./Login";
const Signup = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (event: any): void => {
        if (!event) throw Error("error");
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch({
            type: SIGNUP,
            data: {
                email: data.get("email"),
                password: data.get("password"),
            },
        });
    };

    return (
        <div style={{ backgroundColor: "black", height: "100vh" }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        paddingTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="white">
                        Sign Up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}>
                        <TextField
                            className={classes.root}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="nickname"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            variant="filled"
                            size="small"
                            color="secondary"
                        />
                        <TextField
                            className={classes.root}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            variant="filled"
                            size="small"
                            color="secondary"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            sx={{ mt: 1, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs></Grid>
                            <Grid item>
                                <Link to="/login" style={{ color: "white " }}>
                                    {"back to login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Auth(Signup, false);
