import RootHeader from "../../components/RootHeader"
import Button from "../../components/Button";
import Tabs from "../../components/Tabs"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { getFromLocalStorage } from "../../utils/browserStorage";

const Home = () => {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        let userData = getFromLocalStorage("user");
        if (!userData) {
            navigate("/signin");
        } else {
            setUserInfo(userData);
        }
    }, [navigate, setUserInfo]);

    console.log(userInfo);

    


    let lostItemCards = [
        {
            img: "image-placeholder.png",
            name: "Laptop",
            timestamp: 1711545600000,
        },
        {
            img: "image-placeholder.png",
            name: "Headphones",
            timestamp: 1711632000000,
        },
        {
            img: "image-placeholder.png",
            name: "Smartwatch",
            timestamp: 1711718400000,
        },
        {
            img: "image-placeholder.png",
            name: "Tablet",
            timestamp: 1711804800000,
        },
        {
            img: "image-placeholder.png",
            name: "Camera",
            timestamp: 1711891200000,
        }
    ];
    let foundItemCards = [
        {
            img: "image-placeholder.png",
            name: "Wallet",
            timestamp: 1711977600000,
            location: "Library"
        },
        {
            img: "image-placeholder.png",
            name: "Keys",
            timestamp: 1712064000000,
            location: "Cafeteria"
        },
        {
            img: "image-placeholder.png",
            name: "Backpack",
            timestamp: 1712150400000,
            location: "Bus Stop"
        },
        {
            img: "image-placeholder.png",
            name: "Sunglasses",
            timestamp: 1712236800000,
            location: "Gym"
        },
        {
            img: "image-placeholder.png",
            name: "Water Bottle",
            timestamp: 1712323200000,
            location: "Lecture Hall"
        }
    ];


    const createItemCards = (itemData, isFound = false) => {
        return itemData.map((item, index) => (
            <div className="item-card" key={index}>
                <div className="preview">
                    <img src={`/src/assets/${item.img}`} alt={item.name} />
                </div>
                <div className="details">
                    <div>
                        <div className="name">{item.name}</div>
                        <div className="time">
                            {
                                isFound && `At ${item.location}, `
                            }
                            {new Date(item.timestamp).toLocaleDateString("en-US", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })},{" "}
                            {new Date(item.timestamp).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                            })}
                        </div>

                    </div>
                    <Button className="icon" iconName="chevron-right" />
                </div>
            </div >
        ));
    };


    const tabs = [
        {
            isActive: true,
            button: <Button label="Lost item reports" className="tab-btn" />,
            content:
                <section className="local-report-card-sec lost-items-sec">
                    {createItemCards(lostItemCards)}
                </section>
        },
        {
            button: <Button label="Found Item Reports" className="tab-btn" />,
            content:
                <section className="local-report-card-sec found-items-sec">
                    {createItemCards(foundItemCards, true)}
                </section>
        },
    ]

    return (
        <>
            <main>
                <RootHeader />
                <div className="main-body">

                    {/* Actions */}
                    <section className="main-sec home-sec">
                        <h2>Actions</h2>

                        <section className="sec-content large-ctas">
                            <Link to={"/lost-item-report"} >
                                <Button className="x-large primary" label="Lost an Item" iconName="search" />
                            </Link>
                            <Link to={"/found-item-report"} >
                                <Button className="x-large ghost" label="Found an Item" iconName="eye" />
                            </Link>

                        </section>
                    </section>

                    {/* Reports */}
                    <section className="main-sec home-sec">
                        <h2>Local Reports</h2>

                        <section className="sec-content">

                            <Tabs tabs={tabs} />

                        </section>
                    </section>
                </div>

            </main>

        </>
    )
}

export default Home;