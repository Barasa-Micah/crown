import React from "react";


const LoginPage = () => {
    return(
        <div className="login-container">
            <div className="logo">
                <img src=""   alt=""/>
            </div>
            <h2>CROWN WAVE ADVERTS</h2>
            <form>
                <div>
                    <input 
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Your Username"
                    />
                </div>
                <div>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    />
                </div>
                <button type="submit">Login Now</button>
            </form>
            <a href="/forgot-password">Forgot Password</a>
            <a href="/create-account">Create Account</a>

            <footer>
                &copy; 2024 CROWN WAVE ADVERTS. All rights reserved.
            </footer>
        </div>
    );
};



export default LoginPage;