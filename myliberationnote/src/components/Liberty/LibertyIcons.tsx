import React from "react";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import styled from "@emotion/styled";

const LibertyIcons = ({ post }: any) => {
    const iconOptions = {
        precision: 1,
        disabled: true,
    };
    const today = new Date().toISOString().slice(0, 10);
    return (
        <>
            <section className="liberty-date">{today}</section>
            <StyledHeart
                {...iconOptions}
                value={parseInt(post.rating)}
                icon={<FavoriteIcon />}
                emptyIcon={<FavoriteBorderIcon />}
            />
            <StyledHeart
                {...iconOptions}
                value={parseInt(post.drink)}
                icon={<SportsBarIcon style={{ color: "yellow" }} />}
                emptyIcon={<SportsBarIcon />}
            />
            <StyledHeart
                {...iconOptions}
                value={parseInt(post.smoke)}
                icon={<SmokingRoomsIcon style={{ color: "#c46b91" }} />}
                emptyIcon={<SmokingRoomsIcon />}
            />
        </>
    );
};

export default LibertyIcons;
const StyledHeart = styled(Rating)({
    fontSize: "2rem",
    "& .MuiRating-iconFilled": {
        color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
        color: "#ff3d47",
    },
});
