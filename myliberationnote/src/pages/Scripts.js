import React, { useEffect, useState } from "react";
import axios from "axios";
import Script from "../components/Script";
import { Grid } from "@mui/material";

const Scripts = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const a = axios.get("http://localhost:80/dummy");
        a.then((res) => setData(res.data));
    }, []);
    const arr = data.split("-");
    const arrEven = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arrEven.push(arr[i]);
        }
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    marginTop: "100px",
                }}>
                {arrEven != [] &&
                    arrEven.map((v, i) => <Script key={i} data={v}></Script>)}
            </div>
        </>
    );
};

export default Scripts;
