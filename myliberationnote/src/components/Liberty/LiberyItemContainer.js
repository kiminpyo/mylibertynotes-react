import React from "react";
import { useSelector } from "react-redux";
import LibertyItem from "./LibertyItem";

const LibertyItemContainer = ({ posts }) => {
    const { userInfo } = useSelector((state) => state.user);

    
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {posts.map((post) => (
                <LibertyItem post={post} userInfo={userInfo} />
            ))}
        </div>
    );
};

export default LibertyItemContainer;
