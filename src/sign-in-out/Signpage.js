import {React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Config';
import { useFormik } from 'formik'
import * as Yup from 'yup';
// import './Signpage.css';


export default function Signpage() {
    const navigate = useNavigate();

    // const [email, setEmail] = useState('');
    // const [pword, setPword] = useState('');


    const [value, setValue] = useState(false);
    const togglePassword = () => {
        setValue(!value)
    }


    // const [email, setEmail] = useState('');

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        // validate,

        validationSchema: Yup.object({
            username: Yup.string().max(6, 'Must be 6 characters or more').required('Required'),

            password: Yup.string().max(8, 'Must be 6 characters').required('Required')
        }),

        onSubmit: (values) => {
            alert('submmission successfully')
        }
    })

    const onLogin = (e) => {
        e.preventDefault();
        if (formik.values.username !== '' || formik.values.password !== '') {
            signInWithEmailAndPassword(auth, formik.values.username, formik.values.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate("/Camplogin")
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                });
        } else {
            alert('fields are empty');
        }


    }

    //     const handlenavigate = () => {
    //         if(formik.values.username !== '' || formik.values.password !== ''){
    //            navigate('/Camplogin')
    //         } else {
    //             alert('fields are empty')
    //         }
    //    }


    return (
        <div>
            <div className='container1'>
                <div className='contA'>
                    <div className='jar'>
                        <div className='navcont'>
                            <Link to='/'><img src='Assets/Logo.svg' alt='site logo' className='sitelogs' /></Link>

                            <div className='nav'>
                                <Link to="/"><span className='bck'>&#8592; &nbsp; Back to campgrounds</span></Link>
                            </div>
                        </div>
                        <div className='hand'>
                            <h2>Start exploring camps from all around the world</h2>
                            <form onSubmit={onLogin}>

                                <label name='username'>
                                    <span>Email:</span>
                                    <input
                                        type="text"
                                        name='username'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                        placeholder="johndoe_91@xxxxxx.com"
                                        required
                                    />
                                </label>
                                {formik.touched.username && formik.errors.username ? <p className='error'>{formik.errors.username}</p> : ''}

                                <label name='password'><span>Password:</span></label>
                                <div className='pword'>
                                <input
                                        type={value ? "text" : "password"}
                                        name='password'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        placeholder="Enter Your Password"
                                        required
                                        
                                    />
                                <i className={value ? "fas fa-eye shown" : 'fas fa-eye-slash shown'}
                                    onClick={togglePassword}/>
                                </div>
                                    
                                
                                {formik.touched.password && formik.errors.password ?
                                    <p className='error'>{formik.errors.password}</p> : ''}
                                <button>Login</button>
                                <p>Not a user yet? <Link to={'/Signup'}>Create an account</Link></p>
                            </form>
                        </div>

                    </div>



                </div>
                <div className='contB'>
                    <div className='textyb'>
                        <h2>"YelpCamp has honestly saved me hours of research
                            time and the camps on here are definitely well picked
                            and added"
                        </h2>
                        <div className='userT'>
                            <img src='./Assets/User Testimonial.svg' alt='testim' />
                            <div className='userTn'>
                                <h5>May Andrews</h5>
                                <p>Proffesional Hiker</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
