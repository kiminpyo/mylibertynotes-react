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
    const image = [
        `https://w.namu.la/s/b3c523e979c2e9a87f33397e588e162e69107be97ba9d0faaaff058ddc7e03fc3b0d47cf56b26ab93d919d2c565324592572c10c43f89c64c49cfc4b5333188f58b96172783c46c95cb03111ad4f89e46ae149d171c987e85cbd709c816984b334e6b0d398288e09131492338bcce138`,
        `https://w.namu.la/s/1fbc33b5a424ae40d5687ad161ef6c1d9250becc143616c5a3e47ef556ebcaca743f2c3321e5972d3e31b60b97649fdfea3a65b4443c41518d6f6325692427ec7d5af4c00aebd466f27c8f304cb67cc4f7b7c22b509e9fb4a8fffa83b3589ef7bae0421f83a46828a178d66c7be57b45`,
        `https://w.namu.la/s/51866987e8e40a4597d9af3c0847e29c241dd773b70370b81f10369d3fb767c04ce22d97a4a78ed09b1d2dc24066eeccf3350d1159c03c56643b8c51431a1a31e0187867dd9d923c214935267c4d0b5ba733a1b981b21d148d01c5d2b6aa121e633ed6000de645e1c9b8dbb17ab90912`,
        `https://w.namu.la/s/3363343d205ed1c7d4987e967004777e7ea27ebfa136fff3b240c832410eb912c2a31c85de9f15c72f828bf913b4dd78a6d6ceae191bab42e695297463d41c0488312709876761e6d556cb173ec7d66595de904d393cf054c20381faa734dba7c49290991a0a4fdf5aac9c63f0b3663e`,
    ];
    console.log(arrEven.length);
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
