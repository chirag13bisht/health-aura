import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register section'>
        <div className='register-container container'>

            <div className='title'>
                <h1>So what are you waiting for?</h1>
                <h3>Register now</h3>
            </div>

            <div className='register-data'>
                <Link to="/login">
                <div className='box1 box'>
                    register <br/> as a User
                </div>
                </Link>
                <Link to="/login">
                <div className='box1 box'>
                    Register <br/> as a Doctor
                </div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Register