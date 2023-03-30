import React from "react";
import NoMatch from "../pages/NoMatch";
import Loader from "./Loader";

interface ContainerProps {
    children: React.ReactChildren;
    loading: boolean;
    failure: boolean;
}
const PageContainer = ({ children, loading, failure }: ContainerProps) => {
    console.log(children);
    if (loading) return <Loader />;
    return failure ? (
        <NoMatch text={"존재하지 않는 게시글입니다."} />
    ) : (
        <div>{children}</div>
    );
};

export default PageContainer;
