import { createContext, useContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children, props }) => {
    const onSave = ({ message, type }) => {
        window.confirm(`${message}`);
    };
    return (
        <>
            <ModalContext.Provider value={onSave}>
                {children}
            </ModalContext.Provider>
        </>
    );
};
