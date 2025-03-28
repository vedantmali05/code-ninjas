import RootHeader from "../../components/RootHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../../utils/api";

const LostItemForm = () => {

    const [itemInfo, setItemInfo] = useState({});
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        navigate("/")
        return;

        if (
            !itemInfo.title ||
            !itemInfo.type ||
            !itemInfo.date ||
            !itemInfo.time ||
            !itemInfo.location ||
            !itemInfo.img ||
            !itemInfo.info
        ) return;

        await apiRequest({
            url: "http://127.0.0.1:8000/api/auth/register/",
            method: "POST",
            body: {
                name: itemInfo.title,
                type: itemInfo.type,
                date: itemInfo.date,
                time: itemInfo.time,
                location: itemInfo.location,
                img: itemInfo.img,
                info: itemInfo.info,
            },
            onSuccess: (data) => { navigate("/") },
            onError: (error) => console.log(error.message),
        })
    }

    return (
        <>
            <main>
                <RootHeader childrenLeft={
                    <Link to={"/"} ><Button label="back" iconName="arrow-left" className="ghost" /></Link>
                } />
                <div className="main-body">

                    {/* Reports */}
                    <section className="main-sec lost-item-form-sec">
                        <h2>Register a new Lost Item</h2>

                        <section className="sec-content">
                            <form onSubmit={(e) => { handleFormSubmit(e) }}>

                                <Input
                                    label="Name of the Item"
                                    id="lost_item_name"
                                    name="lost_item_name"
                                    value={itemInfo.title || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, title: e.target.value })
                                    )}
                                />

                                <Input
                                    label="Type of Item (e.g., Electronics, Clothes, etc.)"
                                    id="lost_item_type"
                                    name="lost_item_type"
                                    value={itemInfo.type || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, type: e.target.value })
                                    )}
                                />

                                <Input
                                    type="date"
                                    label="Date of Loss"
                                    id="lost_item_date"
                                    name="lost_item_date"
                                    value={itemInfo.date || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, date: e.target.value })
                                    )}
                                />

                                <Input
                                    type="time"
                                    label="Time of Loss"
                                    id="lost_item_time"
                                    name="lost_item_time"
                                    value={itemInfo.time || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, time: e.target.value })
                                    )}
                                />

                                <Input
                                    type="text"
                                    label="Location"
                                    id="lost_item_location"
                                    name="lost_item_location"
                                    value={itemInfo.location || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, location: e.target.value })
                                    )}
                                />

                                <Input
                                    label="Image of Lost Item"
                                    type="file"
                                    required={false}
                                    id={"lost_item_img"}
                                    name={"lost_item_img"}
                                    value={itemInfo.img || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, img: e.target.value })
                                    )}
                                />

                                <Input
                                    type="text"
                                    label="Any additional information"
                                    id="lost_item_info"
                                    name="lost_item_info"
                                    value={itemInfo.info || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, info: e.target.value })
                                    )}
                                />

                                <Button label="post" className="primary" />

                            </form>
                        </section>
                    </section>
                </div>

            </main>

        </>
    );

}

export default LostItemForm;