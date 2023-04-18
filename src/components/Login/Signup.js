import React from 'react'
import { Link } from 'react-router-dom'
import "./signup.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
      firstname: "",lastname:" " ,email: "", password: "", cpassword: ""

  });
  let name, value;
  const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;

      setUser({ ...user, [name]: value });

  }

      const PostData = async (e) => {
          e.preventDefault();
          const { firstname, lastname, email, password, cpassword } = user;
          const res = await fetch('/signin', {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                 firstname, lastname, email, password, cpassword

              })
          })            

          const data = await res.json();
          if (res.status === 422 || !data) {
              window.alert("Invalid registeration");
              console.log("Invalid registeration");
          }
          else {
              window.alert("succesfull registeration");
              console.log("succesfull registeration");

              navigate("/login")


            }
      }
  return (
    <div className='signup section'>
      <div className='signup-container container'>
        <div className='signup-content'>
          <h1 className='title '>Sign Up</h1>

          <div className='signup-data'>

            <form  method='POST'>
              <div className='inputs'>
                <input type='text' placeholder='first name' className='input' id='firstname' name='firstname' onChange={handleInputs} value={user.firstname}/>
                <input type='text' placeholder='last name' className='input' id='lastname' name='lastname' onChange={handleInputs} value={user.lastname}/>
                <input type='email' placeholder='email' className='input'id='email' name='email' onChange={handleInputs} value={user.email}/>
                <input type='password' placeholder='password' className='input'id='password' name='password' onChange={handleInputs} value={user.password}/>
                <input type='password' placeholder='re-enter the password' className='input' id='cpassword' name='cpassword' onChange={handleInputs} value={user.cpassword}/>
              </div>
              <div className='cred'>
                <button className='signup-button' onClick={PostData}>Register</button><br/>
              </div>
              <div className='signup-with'>
                <p className='title'>or</p>
                <button><i class="uil uil-google"></i> Sign up with Google</button>
                <button><i class="uil uil-facebook"></i> Sign up with facebook</button>
                <p className='dont'>
                  Already have an acount ? 
                  <Link to="/login"><a href='/login'> Sign In</a></Link>
                </p>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup