import React from "react";
import { TextLabel } from "../../pages/LibertyDetail";
import Hashtag from "../Hashtag";
import { useSelector } from "react-redux";
const LibertyInformation = ({ post }: any) => {
    const writer = useSelector((state: any) => state.post?.user);
    return (
        <div>
            <div style={{ display: "flex" }}>
                <TextLabel>글쓴이:</TextLabel>
                <TextLabel>{writer?.email}</TextLabel>
            </div>
            <div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <TextLabel>
                        {post.Hashtags?.length !== 0 ? "태그:" : undefined}
                    </TextLabel>
                    {post.Hashtags?.map((tag: any, i: number) => (
                        <Hashtag key={i} {...tag} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LibertyInformation;
