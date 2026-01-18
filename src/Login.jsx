import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./components/LR.css";

const Login = ({ setUsername }) => {
    const [inputUsername, setInputUsername] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (inputUsername.trim() === "") {
            setError(
                "Oops! You cannot leave this empty 😜. You can skip and still use the app."
            );
            return;
        }

        setError("");
        setUsername(inputUsername);
        localStorage.setItem("username", inputUsername); // optional
        navigate("/weather");
    };

    return (
        <div className="LR">
            <h2>What should we call you?</h2>

            <input
                type="text"
                placeholder="Your Name"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <button onClick={handleLogin}>Let's Go</button>

            <p>
                I just want to use the app.
                <Link
                    to="/weather"
                    className="lk"
                    style={{ marginLeft: "10px" }}
                >
                    Skip
                </Link>
            </p>
        </div>
    );
};

export default Login;
