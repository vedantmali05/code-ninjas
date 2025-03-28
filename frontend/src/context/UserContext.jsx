import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const [createAccountUserInfo, setCreateAccountUserInfo] = useState({});

    return (
        <UserContext.Provider value={{
            userInfo, setUserInfo,
            createAccountUserInfo, setCreateAccountUserInfo
        }}>
            {children}
        </UserContext.Provider>
    )
}