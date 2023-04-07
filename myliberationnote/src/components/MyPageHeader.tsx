import React from "react";
import { useSelector } from "react-redux";

const MyPageHeader = () => {
    const email = useSelector((state: any) => state.user.userInfo?.email);

    return (
        <div>
            {email && (
                <h1 style={{ fontSize: "0.7rem", textAlign: "center" }}>
                    {email}님의 기록
                </h1>
            )}
        </div>
    );
};

export default MyPageHeader;
