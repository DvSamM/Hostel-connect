import React from 'react'
import log from "../../../assets/log.jpg"
import { useFormik } from 'formik'
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';

const Signup = () => {
  let url = "http://localhost:1000/user/signup"
  const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            Name: "",
            Email: "",
            Password: "",
        },

        onSubmit: (values) => {
            console.log(values);
            axios.post(url, values ) 
            .then((res) => {
              console.log(res);
              Swal.fire("SignUp Succssfully Login to proceed");
              navigate("/user/Signin")
            })
            .catch((err) => {
              console.log(err); 
            })
          },
          
          validationSchema: yup.object({
            Email: yup.string().required("Email is required"),
            Name: yup.string().required("Name is required"),
            Password: yup
            .string()
            .required("Password is required")
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/,
              "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character"
            ), 
            
          }),
        });

    





  return (
    <>
    
    <div class="wrapper login-3">
            <div class="container d-flex" style={{marginTop:"160px"}}>
                <div class="col-left">
                    <div class="login-text">
                        <h2><img src={log} alt="Logo"/></h2>
                        <p>
                        Experience a range of beautifully designed rooms and suites that cater to all your needs. Each room is equipped with:
                        </p>
                        <button className='btn'>Read More</button>
                    </div>
                </div>
                <div class="col-right">
                    <div class="login-form">
                        <h2>SIGNUP!</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <p>
                                <input type="text" placeholder="Name" name='Name' onChange={formik.handleChange}/>
                                <small>{formik.errors.Name}</small>
                                
                            </p>
                            <p>
                                <input type="email" placeholder="Email" name='Email' onChange={formik.handleChange}/>
                                <small>{formik.errors.Email}</small>
                                
                            </p>
                            <p>
                                <input type="password" placeholder="Password" name='Password' onChange={formik.handleChange}/>
                                <small>{formik.errors.Password}</small>
                                
                            </p>
                            <p>
                                 <button  className='btn w-100 btn-primary' type='submit'>Sign up</button>
                            </p>
                            <p>
                               <small>Have an account?</small> <a href="">
                                <Link to="/user/Signin">
                                Sign In.
                                </Link>
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Signup