import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "../reducers/user";
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
import styled from "@emotion/styled";
import Auth from "../HOC/auth";
import { makeStyles } from "@mui/styles";
import Modal from "../components/Modal/Modal";

const Login = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showInfo, setShowInfo] = useState(false);
    const { loginFailure, loginSuccess, loginLoading } = useSelector(
        (state: any) => state.user
    );

    useEffect(() => {
        if (loginSuccess) return navigate("/");
    }, [loginFailure, loginSuccess, navigate, loginLoading]);
    const onInfoHandler = () => {
        setShowInfo(() => true);
    };
    /**
     * 로그인
     */

    const handleSubmit = useCallback(
        (event: any) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            dispatch({
                type: LOGIN,
                data: {
                    email: data.get("email"),
                    password: data.get("password"),
                },
            });
        },
        [dispatch]
    );

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
                    <Avatar sx={{ m: 1, bgcolor: "purple" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color={"white"}>
                        Log In
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
                            size="small"
                            variant="filled"
                            color="secondary"
                        />
                        <TextField
                            className={classes.root}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="password"
                            type="password"
                            id="password"
                            variant="filled"
                            size="small"
                            color="secondary"
                        />
                        {loginFailure ? (
                            <FailMessage>실패</FailMessage>
                        ) : undefined}
                        <Button
                            color="secondary"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}>
                            Log In
                        </Button>
                        <Grid container padding={"0 5px 0 5px"}>
                            <Grid item xs>
                                <AuthInfo
                                    onClick={onInfoHandler}
                                    data-testid="question"
                                />
                            </Grid>
                            <Grid item>
                                <Link to="/signup" style={{ color: "white " }}>
                                    {"sign up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Grid
                    container
                    display={"flex"}
                    justifyContent={"space-evenly"}
                    mt={"15px"}>
                    <Grid item>
                        <a
                            id="kakao"
                            href="https://mylibertynotes.site/oauth/kakao"
                            className="btn">
                            <SocialButton className="kakao">
                                {" "}
                                <svg
                                    width="18px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -4 18 17">
                                    <g
                                        transform="translate(0.000000,17.000000) scale(0.100000,-0.100000)"
                                        stroke="none">
                                        <path
                                            fill="#212529"
                                            d="M38 154 c-15 -8 -30 -25 -34 -38 -6 -26 10 -66 27 -66 7 0 9 -10 5 -26 -7 -25 -6 -25 16 -10 12 9 31 16 41 16 29 0 75 28 82 50 10 31 -3 59 -35 75 -36 19 -67 18 -102 -1z"></path>
                                    </g>
                                </svg>
                            </SocialButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a
                            id="google"
                            href="https://api.mylibertynotes.site/oauth/google"
                            className="btn">
                            <SocialButton className="google">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="27"
                                    fill="none"
                                    viewBox="0 -4 18 18">
                                    <path
                                        fill="#4285F4"
                                        d="M17.785 9.169c0-.738-.06-1.276-.189-1.834h-8.42v3.328h4.942c-.1.828-.638 2.073-1.834 2.91l-.016.112 2.662 2.063.185.018c1.694-1.565 2.67-3.867 2.67-6.597z"></path>
                                    <path
                                        fill="#34A853"
                                        d="M9.175 17.938c2.422 0 4.455-.797 5.94-2.172l-2.83-2.193c-.758.528-1.774.897-3.11.897-2.372 0-4.385-1.564-5.102-3.727l-.105.01-2.769 2.142-.036.1c1.475 2.93 4.504 4.943 8.012 4.943z"></path>
                                    <path
                                        fill="#FBBC05"
                                        d="M4.073 10.743c-.19-.558-.3-1.156-.3-1.774 0-.618.11-1.216.29-1.774l-.005-.119L1.254 4.9l-.091.044C.555 6.159.206 7.524.206 8.969c0 1.445.349 2.81.957 4.026l2.91-2.252z"></path>
                                    <path
                                        fill="#EB4335"
                                        d="M9.175 3.468c1.684 0 2.82.728 3.468 1.335l2.531-2.471C13.62.887 11.598 0 9.175 0 5.667 0 2.638 2.013 1.163 4.943l2.9 2.252c.727-2.162 2.74-3.727 5.112-3.727z"></path>
                                </svg>
                            </SocialButton>
                        </a>
                    </Grid>
                </Grid>
            </Container>
            {showInfo ? <Modal setShowInfo={setShowInfo} /> : undefined}
        </div>
    );
};

export default Auth(Login, false);

export const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFilledInput-root": {
            backgroundColor: "rgb(255, 255, 255)",
        },
        "& .MuiFilledInput-root:hover": {
            backgroundColor: "rgb(250, 232, 241)",
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: "rgb(255, 255, 255)",
            },
        },
        "& .MuiFilledInput-root.Mui-focused": {
            backgroundColor: "rgb(255, 255, 255)",
        },
    },
}));
const SocialButton = styled.button`
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    cursor: pointer;
`;
const FailMessage = styled.div`
    text-align: center;
    color: red;
`;
const AuthInfo = styled.div`
    border-radius: 50%;
    font-size: 0.9rem;
    padding: 3px 10px 0px 10px;

    display: inline-block;
    color: white;
    background-color: #ffffff4e;
    cursor: pointer;
    ::after {
        content: "?";
    }
    :active {
        background-color: #52435beb;
    }
`;
