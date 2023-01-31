import { useState } from "react";

export const useTabs = (idx, Tabs) => {
    const [currentIdx, setCurrentIdx] = useState(idx);
   
    return {
        currentItem: Tabs[currentIdx],
        changeItem: setCurrentIdx,
    };
};
