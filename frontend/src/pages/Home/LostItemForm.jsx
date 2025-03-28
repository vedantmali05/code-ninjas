import RootHeader from "../../components/RootHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const LostItemForm = () => {

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
                            <form onSubmit={(e) => { }}>

                                <Input
                                    label="Name of the Item"
                                    id="lost_item_name"
                                    name="lost_item_name"
                                />

                                <Input
                                    label="Type of Item (e.g., Electronics, Clothes, etc.)"
                                    id="lost_item_type"
                                    name="lost_item_type"
                                />

                                <Input
                                    type="date"
                                    label="Date of Loss"
                                    id="lost_item_date"
                                    name="lost_item_date"
                                />

                                <Input
                                    type="time"
                                    label="Time of Loss"
                                    id="lost_item_time"
                                    name="lost_item_time"
                                />

                                <Input
                                    type="text"
                                    label="Location"
                                    id="lost_item_location"
                                    name="lost_item_location"
                                />

                                <Input
                                    label="Image of Lost Item"
                                    type="file"
                                    required={false}
                                    id={"lost_item_img"}
                                    name={"lost_item_img"}
                                />

                                <Input
                                    type="text"
                                    label="Location"
                                    id="lost_item_location"
                                    name="lost_item_location"
                                />

                                <Input
                                    type="text"
                                    label="Any additional information"
                                    id="lost_item_info"
                                    name="lost_item_info"
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