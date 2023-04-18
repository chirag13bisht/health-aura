import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import { useContext , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'

const Login = () => {
  const {state,dispatch} = useContext(UserContext);
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async (e) => {
      e.preventDefault();

      const res= await fetch('/logup',{
          method:"POST",
          headers: {
              "Content-Type" : "application/json"
          }, 
          body: JSON.stringify({
              email, password
          })

      });
      const data = res.json();
    

      if(res.status === 400 || !data){
          window.alert("invalid creditanials")
      }
      else{
          dispatch({type:"USER",payload:true})
          window.alert("login success")
          navigate("/")
      }
  }
  return (
    <div className='login section'>
      <div className='login-container container'>
        <div className='login-content'>
          <h1 className='title '>Login</h1>

          <div className='login-data'>

            <form method='POST'>
              <div className='inputs'>
                <input type='email' placeholder='email or username' className='input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' placeholder='password' className='input' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className='cred'>
                <button className='sign-button' onClick={loginUser}>Sign In</button><br/>
                <a href='/forget'>Forget your password</a>
              </div>
              <div className='sign-with'>
                <button><i class="uil uil-google"></i> Sign in with Google</button>
                <button><i class="uil uil-facebook"></i> Sign in with facebook</button>
                <p className='dont'>
                  Don't have an acount ? 
                  <Link to="/signup"><a href='/signup'> Sign up</a></Link>
                </p>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login