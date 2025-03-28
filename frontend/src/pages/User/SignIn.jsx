import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { apiRequest } from "../../utils/api";

const DEVMODE = true;

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("Pass@123")

    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        

        if (!email || !password) return;

        await apiRequest({
            url: "http://127.0.0.1:8000/api/auth/login/",
            method: "POST",
            body: {
                email: email,
                password: password,
            },
            onSuccess: (data) => {
                console.log(data)
                navigate("/") },
            onError: (error) => console.log(error.message),
        })
    }


    return (<main className="auth-main" >

        <section className="main-sec complete-profile-sec">

            <header>
                <h1>Sign In to FindMate</h1>
                <p className="text-muted">
                    New to FindMate? <span> </span>
                    <Link to="/create-account" className="text text-emphasis">Create Account</Link>.
                </p>
            </header>

            <form onSubmit={(e) => { handleFormSubmit(e) }}
                id="signin_form"
                name="signin_form"
            >

                <Input
                    type="email"
                    label="Email"
                    id={"signin_email"}
                    name={"signin_email"}
                    value={email || ""}
                    autoFocus={true}
                    onChange={(e) => setEmail(s => e.target.value)}
                />

                <Input
                    type="password"
                    label="Password"
                    id={"signin_password"}
                    name={"signin_password"}
                    value={password || ""}
                    onChange={(e) => setPassword(s => e.target.value)}
                />

                <Button
                    className="primary"
                    type="submit"
                    label="Sign In"
                />
            </form>

        </section>

    </main >)

}

export default SignIn;