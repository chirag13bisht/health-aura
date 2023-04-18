import React, { useEffect, useState } from 'react'
import { UserContext } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Navigation = () => {
  const [userData, setuserData] = useState()
  const navigate = useNavigate();
  const callAbout = async () => {
    try{
      const res = await fetch('/user',{
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }, credentials: "include"
      });

      const data = await res.json();
      console.log(data)
      setuserData(data)
     

      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch(error){
      console.log(error);
    
    }
  }
  useEffect(()=>{
    callAbout();
  },[])
  const logoutUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/logout', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }, credentials: "include"
    })

    if (res.status === 200) {
      dispatch({ type: "USER", payload: false })
      window.alert("logout");
      navigate("/");
    }
    else {
      window.alert("error");
      console.log("error");
    }
  }
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
      if (state) {
          return (
              <>
                  <li ><Link to="/profile">Profile</Link></li>
                  <li onClick={logoutUser}>Log Out</li>
                  <li>{`Hi ${userData.firstname}`}</li>
              </>
          )
      }
  }
  return (
    <nav>
        <div className="navbar">
      <h3 className="logo">The Health.Aura</h3>
      <div className="home-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Support</li>
          <RenderMenu />
        </ul>
      </div>
      
     
    </div>
    </nav>
  )
}

export default Navigation