import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (email.match(regex)) {
            alert("Please enter a valid Email");
        }
        else {
            navigate("/dashboard");
        }
    }

    return (
        <div>
            <form onClick={handleLogin}>
                <input placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login