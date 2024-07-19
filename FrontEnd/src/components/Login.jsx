import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8082/api/login", values, {
                withCredentials: true,
            })
            .then((res) => {
                let a = 6;
                console.log(res);
                // if (res.status == "200") {
                navigate("/");
                // }
            })
            .catch((err) => console.log(err));
    };
    return (
        <div
            className="container d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            <form
                className="p-5 border rounded shadow-sm bg-light w-50"
                method="post"
                onSubmit={handleSubmit}
            >
                <h1 className="h3 mb-3 fw-normal text-center">
                    Please sign in
                </h1>

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) =>
                            setValues({ ...values, email: e.target.value })
                        }
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        name="password"
                        placeholder="Password"
                        onChange={(e) =>
                            setValues({ ...values, password: e.target.value })
                        }
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="remember-me"
                        id="flexCheckDefault"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Remember me
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">
                    Sign in
                </button>
                <div className="mt-5 mb-3 text-body-secondary text-center ">
                    <Link
                        to={"/register"}
                        className="btn btn-secondary text-white"
                    >
                        Create Account
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
