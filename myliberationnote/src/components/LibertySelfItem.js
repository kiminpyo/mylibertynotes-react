import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate, useParams } from "react-router-dom";

const LibertySelfItem = (item) => {
    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "red",
        },
    });

    const a = item.item.User;
    // const writer= Object.values(a)[0];
    // console.log(writer)
    const navigate = useNavigate();
    const onLibertyDetail = () => {
        navigate(`/libertyself/${item.item.id}`);
    };
    return (
        <div className='liberty-item-wrapper'>
            <div
                className='liberty-item-content-wrap'
                onClick={onLibertyDetail}>
                <div className='liberty-item-rating'>
                    <StyledRating
                        disabled
                        style={{ marginLeft: "10px", opacity: "1" }}
                        name='rating'
                        precision={0.5}
                        value={item.item.rating}
                        icon={<FavoriteIcon />}
                        emptyIcon={<FavoriteBorderIcon />}
                    />
                </div>
                {/* <div className="liberty-item-writer">{writer? writer : null}</div> */}
                <div className='liberty-item-content'>{item.item.content}</div>
                <div className='liberty-item-date'>{item.item.createdAt}</div>
            </div>
            <div className='liberty-item-tail'></div>
        </div>
    );
};

export default LibertySelfItem;
