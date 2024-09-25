import React, { useState, useEffect } from 'react';
import log from "../../../assets/log.jpg";
import { useFormik } from 'formik';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Signin = () => {
    const [message, setMessage] = useState(''); // State for messages

    const url = "https://hostel-connect-4-bkc9.onrender.com/user/signin"

    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: "",
        },

        onSubmit: (values) => {
            console.log(values);
            axios.post(url, values)
                .then((res) => {
                    console.log(res);
                    Swal.fire("Login Successful");
                    localStorage.setItem('token', res.data.token); 
                })
                .catch((err) => {
                    console.log(err.response);
                    setMessage(err.response?.data.message || 'An error occurred'); 
                });
        },

        validationSchema: yup.object({
            Email: yup.string().required("Email is required"),
            Password: yup
                .string()
                .required("Password is required")
                .matches(
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/,
                    "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character"
                ),
        }),
    });

    useEffect(() => {
        if (message) {
            setTimeout(() => {
            setMessage('');
            }, 3000); 
        }
    }, [message]);

    return (
        <>
            <div className="wrapper login-3 ">
                <div className="container d-flex " style={{ marginTop: "160px" }}>
                    <div className="col-left">
                        <div className="login-text">
                            <h2><img src={log} alt="Logo" /></h2>
                            <p>
                                Experience a range of beautifully designed rooms and suites that cater to all your needs. Each room is equipped with:
                            </p>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>
            
                <div class="col-right">
                    <div class="login-form">
                        <h2>Login</h2>
                        {message && <p className="error-message fw-bolder text-danger fs-3">{message}!!!!!!!!</p>} 
                        <form onSubmit={formik.handleSubmit}>
                            <p>
                                <input type="email" placeholder="Email" name='Email' onChange={formik.handleChange}/>
                                <small>{formik.errors.Email}</small>
                                
                            </p>
                            <p>
                                <input type="password" placeholder="Password" name='Password' onChange={formik.handleChange}/>
                                <small>{formik.errors.Password}</small>
                                
                            </p>
                            <p>
                            <button className='btn w-100 btn-primary' type='submit'>Sign in</button>
                            </p>
                            <p>
                                <a href="">Forget password?</a>
                               <small>Don't have an account?</small> <a href="">
                                <Link to="/user/Signup">
                                Create an account.
                                </Link>
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
