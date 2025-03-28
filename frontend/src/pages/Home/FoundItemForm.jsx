import RootHeader from "../../components/RootHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../../utils/api";

const FoundItemForm = () => {

    const [itemInfo, setItemInfo] = useState({});
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        

        if (
            !itemInfo.name ||
            !itemInfo.type ||
            !itemInfo.date ||
            !itemInfo.time ||
            !itemInfo.location ||
            !itemInfo.img ||
            !itemInfo.info
        ) return;

        await apiRequest({
            url: "http://127.0.0.1:8000/api/items/found/post/",
            method: "POST",
            body: {
                title: itemInfo.name,
                type: itemInfo.type,
                date_found: itemInfo.date,
                time: itemInfo.time,
                location: itemInfo.location,
                img: itemInfo.img,
                description: itemInfo.info,
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
                        <h2>Share a found item</h2>

                        <section className="sec-content">
                            <form onSubmit={(e) => { handleFormSubmit(e) }}>

                                <Input
                                    label="Name of the Item"
                                    id="found_item_name"
                                    name="found_item_name"
                                    value={itemInfo.name || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, name: e.target.value })
                                    )}
                                />

                                <Input
                                    label="Type of Item (e.g., Electronics, Clothes, etc.)"
                                    id="found_item_type"
                                    name="found_item_type"
                                    value={itemInfo.type || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, type: e.target.value })
                                    )}
                                />

                                <Input
                                    type="date"
                                    label="Date Found"
                                    id="found_item_date"
                                    name="found_item_date"
                                    value={itemInfo.date || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, date: e.target.value })
                                    )}
                                />

                                <Input
                                    type="time"
                                    label="Time Found"
                                    id="found_item_time"
                                    name="found_item_time"
                                    value={itemInfo.time || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, time: e.target.value })
                                    )}
                                />

                                <Input
                                    type="text"
                                    label="Location Found"
                                    id="found_item_location"
                                    name="found_item_location"
                                    value={itemInfo.location || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, location: e.target.value })
                                    )}
                                />

                                <Input
                                    label="Image of Found Item"
                                    type="file"
                                    id={"found_item_img"}
                                    name={"found_item_img"}
                                    value={itemInfo.img || ""}
                                    required={false}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, img: e.target.value })
                                    )}
                                />

                                <Input
                                    type="text"
                                    label="Any additional information"
                                    id="found_item_info"
                                    name="found_item_info"
                                    value={itemInfo.info || ""}
                                    onChange={(e) => setItemInfo((data) =>
                                        ({ ...data, info: e.target.value })
                                    )}
                                />

                                <Button label="Share" className="primary" />

                            </form>
                        </section>
                    </section>
                </div>

            </main>

        </>
    );

}

export default FoundItemForm;