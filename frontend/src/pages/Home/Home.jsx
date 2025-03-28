import RootHeader from "../../components/RootHeader"
import Button from "../../components/Button";
import Tabs from "../../components/Tabs"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { getFromLocalStorage } from "../../utils/browserStorage";

const Home = () => {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const { activeItemInfo, setActiveItemInfo } = useContext(UserContext)
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
            img: "laptop.webp",
            name: "Laptop",
            type: "Electronics",
            timestamp: 1711545600000,
            date: "27 March, 2024",
            time: "10:30 AM",
            location: "Library",
            info: "Black Dell laptop with a sticker on the back."
        },
        {
            img: "headphone.webp",
            name: "Headphones",
            type: "Electronics",
            timestamp: 1711632000000,
            date: "28 March, 2024",
            time: "02:00 PM",
            location: "Cafeteria",
            info: "Wireless Sony headphones, black color."
        },
        {
            img: "smartwatch.webp",
            name: "Smartwatch",
            type: "Electronics",
            timestamp: 1711718400000,
            date: "29 March, 2024",
            time: "08:45 AM",
            location: "Gym",
            info: "Apple Watch with a blue strap."
        },
        {
            img: "tablet.webp",
            name: "Tablet",
            type: "Electronics",
            timestamp: 1711804800000,
            date: "30 March, 2024",
            time: "04:15 PM",
            location: "Lecture Hall",
            info: "Samsung Tab with a gray case."
        },
        {
            img: "camera.webp",
            name: "Camera",
            type: "Electronics",
            timestamp: 1711891200000,
            date: "31 March, 2024",
            time: "06:50 PM",
            location: "Park",
            info: "Canon DSLR with a zoom lens."
        }
    ];

    let foundItemCards = [
        {
            img: "wallet.webp",
            name: "Wallet",
            type: "General",
            timestamp: 1711977600000,
            date: "1 April, 2024",
            time: "09:10 AM",
            location: "Library",
            info: "Brown leather wallet with ID card inside."
        },
        {

            img: "keys.webp",
            name: "Keys",
            type: "General",
            timestamp: 1712064000000,
            date: "2 April, 2024",
            time: "07:30 PM",
            location: "Cafeteria",
            info: "A set of three keys with a red keychain."
        },
        {
            img: "backpack.jpeg",
            name: "Backpack",
            type: "Clothes & Accessories",
            timestamp: 1712150400000,
            date: "3 April, 2024",
            time: "11:00 AM",
            location: "Bus Stop",
            info: "Blue Nike backpack with books inside."
        },
        {
            img: "subglasses.jpeg",
            name: "Sunglasses",
            type: "Clothes & Accessories",
            timestamp: 1712236800000,
            date: "4 April, 2024",
            time: "03:20 PM",
            location: "Gym",
            info: "Ray-Ban sunglasses with a black frame."
        },
        {
            img: "water-bottle.jpg",
            name: "Water Bottle",
            type: "General",
            timestamp: 1712323200000,
            date: "5 April, 2024",
            time: "12:40 PM",
            location: "Lecture Hall",
            info: "Steel bottle with a green cap."
        }
    ];


    const createItemCards = (itemData, isFound = false) => {
        return itemData.map((item, index) => (
            <div className="item-card" key={index}
                onClick={() => {
                    setActiveItemInfo(d => itemData[index])
                    navigate("/item-info")
                }}
            >
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