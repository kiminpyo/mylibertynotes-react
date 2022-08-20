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
            sx={{ maxWidth: "450px", minWidth: "450px" }}
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
                        image={`https://w.namu.la/s/b3c523e979c2e9a87f33397e588e162e69107be97ba9d0faaaff058ddc7e03fc3b0d47cf56b26ab93d919d2c565324592572c10c43f89c64c49cfc4b5333188f58b96172783c46c95cb03111ad4f89e46ae149d171c987e85cbd709c816984b334e6b0d398288e09131492338bcce138`}
                        alt=''
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            나의 해방일지 中
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
