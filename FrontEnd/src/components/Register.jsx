import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8082/api/users", values)
            .then((res) => {
                console.log(res);
                if (res.status == "200") {
                    navigate("/login");
                } else {
                    alert(res.status);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-3 rounded bg-light border rounded shadow-sm w-50">
                <h2 className="mb-4 text-center">Sign Up</h2>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-3"
                            name="name"
                            placeholder="Enter your Name"
                            onChange={(e) =>
                                setValues({ ...values, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            className="form-control rounded-3"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(e) =>
                                setValues({ ...values, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            className="form-control rounded-3"
                            name="password"
                            placeholder="Enter your Password"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-sm btn-secondary"
                        >
                            Sign Up
                        </button>
                        <button
                            type="submit"
                            className="btn btn-sm btn-warning m-2"
                        >
                            <Link
                                to={"/login"}
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                {" "}
                                Sign In
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
