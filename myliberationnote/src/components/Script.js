import React from "react";
import { Grid } from "@mui/material";
import mainImg from "../img/mainImg.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Script = ({ data }) => {
    return (
        <Grid
            item
            sx={{ maxWidth: "450px" }}
            sm={6}
            lg={3}
            md={4}
            style={{
                textAlign: "center",
                justifyContent: "space-around",
                padding: "20px",
            }}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='140px'
                        image={mainImg}
                        alt=''
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Lizard
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {data && data.length >= 60
                                ? data.slice(0, 60)
                                : data}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Script;
