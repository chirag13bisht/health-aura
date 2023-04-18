import React from 'react'
import "./records.css"
import { useState } from 'react'
import { useEffect } from 'react'

const Records = () => {
  const [userData, setuserData] = useState({firstname:"",disease:"",symptoms:"",hospital:"",doctor:""})
  const userRecord = async () => {
    try{
      const res = await fetch('/record',{
        method: "GET",
        headers: {
          
          "Content-Type": "application/json"
        }, 
      });

      const data = await res.json();
      setuserData(data)
      console.log(userData)
     

      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch(error){
      console.log(error);
      setuserData({...userData,firstname:userData.firstname})
    
    }
  }
  useEffect(()=>{
    userRecord();
  },[])

  const handleInputs = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setuserData({...userData, [name]:value});
  }

  const sumbitForm =async (e)=>{
    e.preventDefault();
    const {firstname, disease, symptoms,hospital,doctor}= userData;
    const res = await fetch('/sendrecord',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname,disease,symptoms,hospital,doctor
      })
    });
    const data = await res.json();
    if(!data){
      console.log("message not send");

    }else {
      alert("Message Send");
      setuserData({ ...userData, message:" "});
    }
  }
  return (
    <div className="record section">
      <div className="record-container container">
        </div>
        <div className="title title1">
          <h1>Upload your important health records</h1>

          <form  className="record-data" method='POST'>
            <input type="text" className='input' name='firstname' value={userData.firstname} onChange={handleInputs}  placeholder='Full name of the patient' />
            <input type="text" className='input'name='disease' value={userData.disease} onChange={handleInputs}  placeholder='Disease name'/>
            <input type="text" className='input'name='symptoms' value={userData.symptoms}onChange={handleInputs}  placeholder='Symptoms'/>
            <input type="text" className='input'name='hospital' value={userData.hospital} onChange={handleInputs} placeholder='Enter the Hospital Name'/>
            <input type="text" className='input'name='doctor'value={userData.doctor} onChange={handleInputs} placeholder='Assigned Doctor name'/>
            <div className="issue-date">
              <label for="date">Certificate issued date : </label>
              <input type="date" className="input" name="birthday"/>
            </div>

            <div className="upload">
            <label for="file">Upload the document (pdf only) : </label>
            <input type="file" />
            </div>

          </form>

          <button onClick={sumbitForm}>Submit</button>

      </div>
    </div>
  )
}

export default Records