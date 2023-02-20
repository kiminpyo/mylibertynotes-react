import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { SIGNUP } from "../reducers/user";
import { useNavigate } from "react-router-dom";
import Auth from "../HOC/auth";
const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const theme = createTheme();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch({
            type: SIGNUP,
            data: { email: data.get("email"), password: data.get("password") },
        });
        alert("회원가입이 완료 되었습니다.");
        navigate("/login");
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={onChangeEmail}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={onChangePassword}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"back to login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Auth(Signup, false);
