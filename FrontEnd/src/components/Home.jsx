import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    axios.defaults.withCredentials = true;
    useEffect(() => {
        console.log("request sent.....");
        axios
            .get("http://localhost:8082/api/")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        console.log("finished");
    });
    return (
        <div className="container ">
            {/* {auth ? (
                <div>
                    <h3>You are authorised {}</h3>
                    <button className="btn btn-danger">Logout</button>
                </div>
            ) : (
                <div>
                    <h3>Your are not logged in</h3>
                    <Link className="btn btn-primary text-white">Login</Link>
                </div>
            )} */}
        </div>
    );
};

export default Home;
