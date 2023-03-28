import { createContext, useContext } from "react";

export const ConfirmContext = createContext();

export const ConfirmProvider = ({ children, props }) => {
    const onSave = ({ message, type }) => {
        window.confirm(`${message}`);
    };
    return (
        <>
            <ConfirmContext.Provider value={onSave}>
                {children}
            </ConfirmContext.Provider>
        </>
    );
};
