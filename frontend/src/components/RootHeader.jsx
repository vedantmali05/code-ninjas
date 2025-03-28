import { UserContext } from "../context/UserContext";
import Button from "./Button";
import { useContext } from "react";


const RootHeader = ({ heading, children, childrenLeft }) => {

    const { userInfo, setUserInfo } = useContext(UserContext);

    return (
        <header id="main_header">

            <div>
                <div className="options">{childrenLeft}</div>
                <h1 className="fs-700">{heading || "FindMate"}</h1>
                <div className="options">{children}</div>
                <div className="options">
                    <Button label={userInfo.username} iconName="person-circle" className="ghost" />
                </div>
            </div>

        </header>
    );

}

export default RootHeader;