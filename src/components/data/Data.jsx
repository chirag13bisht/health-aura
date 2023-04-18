import React from "react";
import "./data.css";
import { Link } from "react-router-dom";
import { Component } from "react";

class Data extends Component{
   state = {
    text:{
      recipient:'7838651655',
      textmessage:'Hello I met with an accident please call ambulance'
    }
  }
  sendText = _ =>{
    const {text} = this.state
    fetch(`http://127.0.0.1:5001/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(error => console.error(error))
  }
  render(){
    const {text} = this.state
  return (
    <div className="matter section">
      <div className="matter-container container">
        <div className="title">
          <h1>Let's get started</h1>

          <div className="emergency">
            <Link to="/emergency">
              <button className="btn1" onClick={this.sendText}>
                Call for emergency
              </button>
            </Link>
          </div>
        </div>

        <div className="data-matter">
          <div className="data-items">
            <h2>Upload your health Records</h2>
            <Link to="/records">
              <button className="btn">Upload</button>
            </Link>
          </div>
          <div className="data-items">
            <h2>Book Doctor's Appointment</h2>
            <Link to="/appointment">
              <button className="btn">Book</button>
            </Link>
          </div>
          <div className="data-items">
            <h2>Book an Ambulance</h2>
            <Link to="/Ambulance">
              <button className="btn">Book</button>
            </Link>
          </div>
          <div className="data-items">
            <h2>Set medical reminders</h2>
            <Link to="/reminder">
              <button className="btn">Set</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
}

export default Data;
