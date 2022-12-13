import axios from "axios";
import React from "react";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const LibertyItem = (item) => {
    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "red",
        },
    });
    console.log(item.item);
    const navigate = useNavigate();
    const onLibertyDetail = () => {
        navigate(`/liberty/${item.item.id}`);
    };
    return (
        <div className="liberty-item-wrapper">
            <div
                className="liberty-item-content-wrap"
                onClick={onLibertyDetail}>
                <LibertyItemRating>
                    <StyledRating
                        disabled
                        style={{ marginLeft: "10px", opacity: "1" }}
                        name="rating"
                        precision={0.5}
                        value={item.item.rating}
                        icon={<FavoriteIcon />}
                        emptyIcon={<FavoriteBorderIcon />}
                    />
                </LibertyItemRating>

                <LibertyItemContent className="liberty-item-content">
                    {item.item.content}
                </LibertyItemContent>
                <LibertyItemDate>
                    {item.item.createdAt.slice(0, 10)}
                </LibertyItemDate>
            </div>
        </div>
    );
};

export default LibertyItem;

const LibertyItemRating = styled.div`
    padding: 10px;
    text-align: center;
`;
const LibertyItemContent = styled.div`
    padding: 10px;
    height: 150px;
    text-align: start;
`;
const LibertyItemDate = styled.div`
    padding: 10px;
    text-align: end;
`;
