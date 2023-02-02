import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Hashtag from "./Hashtag";
import SmokingRooms from "@mui/icons-material/SmokingRooms";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import CoffeeIcon from "@mui/icons-material/Coffee";

export const LinearProgressWithLabel = (props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ minWidth: 35 }} color={props.color}>
                {props.component}
            </Box>
            <Box sx={{ width: "80%" }}>
                <BorderLinearProgress
                    variant="determinate"
                    {...props}
                    color={props.barcolor}
                />
            </Box>
        </Box>
    );
};
const LibertyItem = ({ item }) => {
    // const { email, id } = item?.User;

    const [ratingProgress, setRatingProgress] = React.useState(0);
    const [drinkProgress, setDrinkProgress] = React.useState(0);
    const [smokeProgress, setSmokeProgress] = React.useState(0);
    const LinearProgressBox = styled(Box)({
        width: "80%",
        margin: "auto",
    });
    useEffect(() => {
        setRatingProgress(() => item.rating * 20);
        setDrinkProgress(() => item.drink * 20);
        setSmokeProgress(() => item.smoke * 20);
    }, []);
    const navigate = useNavigate();
    const onLibertyDetail = () => {
        navigate(`/liberty/${item.id}`);
    };

    return (
        <LibertyItemWrapper>
            <LibertyItemTagWrap>
                {item.Hashtags?.map((tag, i) => (
                    <Hashtag key={i} {...tag} />
                ))}
            </LibertyItemTagWrap>
            <LibertyItemContentWrapper
                className="liberty-item-content-wrap"
                onClick={onLibertyDetail}>
                {/* <LibertyItemRating>
                    <StyledRating
                        name="rating"
                        precision={0.5}
                        value={parseInt(item.rating)}
                        icon={<FavoriteIcon />}
                        emptyIcon={<FavoriteBorderIcon />}
                        readOnly
                    />
                </LibertyItemRating> */}

                {/* <LibertyItemRating>
                    <StyledRating
                        name="rating"
                        precision={0.5}
                        value={parseInt(item.drink)}
                        icon={<SportsBarIcon />}
                        emptyIcon={<SportsBarIcon />}
                        readOnly
                    />
                </LibertyItemRating> */}
                {/* <LibertyItemRating>
                    <StyledRating
                        name="rating"
                        precision={0.5}
                        value={parseInt(item.smoke)}
                        icon={<SmokingRooms />}
                        emptyIcon={<SmokingRooms />}
                        readOnly
                    />
                </LibertyItemRating> */}

                <LibertyItemContent>{item.content}</LibertyItemContent>

                <LinearProgressBox>
                    <LinearProgressWithLabel
                        component={<FavoriteIcon fontSize="small" />}
                        color="#ff4336"
                        barcolor="secondary"
                        variant="determinate"
                        value={ratingProgress}
                    />
                </LinearProgressBox>
                <LinearProgressBox>
                    <LinearProgressWithLabel
                        component={<CoffeeIcon fontSize="small" />}
                        variant="determinate"
                        value={drinkProgress}
                        barcolor="secondary"
                        color="#ff9900"
                    />
                </LinearProgressBox>
                <LinearProgressBox>
                    <LinearProgressWithLabel
                        component={<SmokingRooms fontSize="small" />}
                        variant="determinate"
                        value={smokeProgress}
                        barcolor="secondary"
                        color="#ceb1b1"
                    />
                </LinearProgressBox>
                <div
                    style={{
                        fontWeight: "bold",
                        marginTop: "1.5vh",
                        width: "90%",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    {/* {email ? (
                        <div style={{ fontSize: "0.6rem" }}>{email}</div>
                    ) : null} */}
                    <LibertyItemDate>
                        {item.createdAt?.slice(0, 10)}
                    </LibertyItemDate>
                </div>
            </LibertyItemContentWrapper>
        </LibertyItemWrapper>
    );
};

export default LibertyItem;

const LibertyItemWrapper = styled.div`
    width: 20rem;
    flex: 1 1 0%;
    @media screen and (max-width: 420px) {
        width: 16rem;
    }
`;
const LibertyItemTagWrap = styled.div`
    height: 30px;
    width: 16rem;
    margin: auto;
`;

const LibertyItemContentWrapper = styled.div`
    margin: auto;
    margin-bottom: 2rem;
    width: 16rem;
    height: 250px;
    border-radius: 5px;
    background-color: rgba(63, 9, 63, 0.795);
    @media screen and (max-width: 420px) {
        height: 180px;
        margin-bottom: 1rem;
        width: 90%;
    }
`;
const LibertyItemRating = styled.div`
    padding: 10px;
    text-align: center;
`;
const LibertyItemContent = styled.div`
    padding: 10px;
    width: 80%;
    height: 100px;
    margin: auto;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 420px) {
        height: 60px;
    }
`;

const LibertyItemDate = styled.div`
    font-size: 0.6rem;
`;
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,

}));
