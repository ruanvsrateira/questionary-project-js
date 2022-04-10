import { createContext, useState } from "react";

export const SendsUserContext = createContext();

function SendsUserProvider({ children }) {
    const [sendsUser, setSendsUser] = useState([]);

    return(
        <SendsUserContext.Provider value={{ sendsUser, setSendsUser }}>
            { children }
        </SendsUserContext.Provider>
    );
}

export default SendsUserProvider;