import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const [createAccountUserInfo, setCreateAccountUserInfo] = useState({});
    const [activeItemInfo, setActiveItemInfo] = useState({});

    return (
        <UserContext.Provider value={{
            userInfo, setUserInfo,
            createAccountUserInfo, setCreateAccountUserInfo,
            activeItemInfo, setActiveItemInfo
        }}>
            {children}
        </UserContext.Provider>
    )
}