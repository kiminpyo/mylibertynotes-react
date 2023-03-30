import React, { useEffect } from "react";

const useOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (e) => {
            if (ref.current.contains(e.target)) {
                return;
            }
            handler(() => false);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [handler, ref]);
    return <div></div>;
};

export default useOutside;
