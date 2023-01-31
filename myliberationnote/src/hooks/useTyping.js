import { useEffect, useState } from "react";

export const useTyping = (word, bannerText, delay) => {
    const [banner, setBanner] = useState(word);
    useEffect(() => {
        const $bannerText = document.querySelector(`${bannerText}`);
        function wait(ms) {
            return new Promise((res) => {
                setTimeout(res, ms);
            });
        }
        const typing = async () => {
            let i = 0;
            while (banner.length > i) {
                await wait(delay);
                $bannerText.innerHTML += banner.split("")[i];
                i++;
            }
        };
        typing();
    }, []);
};
