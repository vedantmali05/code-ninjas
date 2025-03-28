import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { apiRequest } from "../../utils/api"

const CreateAccount = () => {

    const navigate = useNavigate();

    const [createAccountInfo, setCreateAccountInfo] = useState({})

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        if (
            !createAccountInfo.email ||
            !createAccountInfo.full_name ||
            !createAccountInfo.phone_num ||
            !createAccountInfo.create_password ||
            !createAccountInfo.confirm_password
        ) return;

        await apiRequest({
            url: "http://127.0.0.1:8000/api/auth/register/",
            method: "POST",
            body: {
                username:createAccountInfo.email,
                email: createAccountInfo.email,
                name: createAccountInfo.full_name,
                phone_number: createAccountInfo.phone_num,
                password: createAccountInfo.create_password,
                password2: createAccountInfo.confirm_password,
            },
            onSuccess: (data) => { navigate("/") },
            onError: (error) => console.log(error.message),
        })
    }

    return (<main className="auth-main" >

        <section className="main-sec complete-profile-sec">

            <header>
                <h1>Create Your FindMate Account</h1>
                <p className="text-muted">
                    Already have an account? <span> </span>
                    <Link to="/signin" className="text text-emphasis">Sign In</Link>.
                </p>
            </header>

            <form onSubmit={(e) => { handleFormSubmit(e) }}
                id="create_account_form"
                name="create_account_form"
            >

                <Input
                    type="email"
                    label="Email"
                    id={"create_account_email"}
                    name={"create_account_email"}
                    value={createAccountInfo.email || ""}
                    autoFocus={true}
                    onChange={(e) => setCreateAccountInfo((data) =>
                        ({ ...data, email: e.target.value })
                    )}
                />

                <Input
                    type="text"
                    label="Full Name"
                    id={"create_account_full_name"}
                    name={"create_account_full_name"}
                    autoComplete="name"
                    value={createAccountInfo.full_name || ""}
                    onChange={(e) => setCreateAccountInfo((data) =>
                        ({ ...data, full_name: e.target.value })
                    )}
                    helpText={"Please enter your First, Middle & then Lastname"}
                />

                <Input
                    type="tel"
                    label="Phone Number"
                    id={"create_account_phone_number"}
                    name={"create_account_phone_number"}
                    autoComplete="tel-national"
                    value={createAccountInfo.phone_num || ""}
                    onChange={(e) => setCreateAccountInfo((data) =>
                        ({ ...data, phone_num: e.target.value })
                    )}
                />

                <Input
                    type="password"
                    label="Create Password"
                    id={"create_account_create_password"}
                    name={"create_account_create_password"}
                    value={createAccountInfo.create_password || ""}
                    onChange={(e) => setCreateAccountInfo((data) =>
                        ({ ...data, create_password: e.target.value })
                    )}
                />

                <Input
                    type="password"
                    label="Confirm Password"
                    id={"create_account_confirm_password"}
                    name={"create_account_confirm_password"}
                    value={createAccountInfo.confirm_password || ""}
                    onChange={(e) => setCreateAccountInfo((data) =>
                        ({ ...data, confirm_password: e.target.value })
                    )}
                />

                <Button
                    className="primary"
                    type="submit"
                    label="Next"
                    rightIcon={true}
                    iconName="arrow-right"
                />
            </form>

        </section>

    </main >)

}

export default CreateAccount;