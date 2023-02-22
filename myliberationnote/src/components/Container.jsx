import React from "react";
import NoMatch from "../pages/NoMatch";
import Loader from "./Loader";

const Container = ({ children, loading, failure }) => {
    if (loading) return <Loader />;
    return failure ? (
        <NoMatch text={"존재하지 않는 게시글입니다."} />
    ) : (
        <div>{children}</div>
    );
};

export default Container;
