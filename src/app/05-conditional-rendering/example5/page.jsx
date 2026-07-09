import React from "react";
import "./styles.css";

/*
Expected Output:
<div class="container"> not repeating

  <h1 class="heading">Upcoming Courses</h1> not repeating

  <div class="card">
    <h2>React Basics</h2>
    <p class="seats">
      12 seats left
    </p>
    <p class="status">Open for Enrollment</p>

    <button class="enroll-btn">Enroll Now</button> <!-- Only shows when seatsLeft is greater than 0 -->
  </div>

  <div class="card">
    <h2>Advanced CSS</h2>
    <p class="seats">
      4 seats left
    </p>
    <p class="status">Open for Enrollment</p>

    <p class="warning">Almost Full</p> <!-- Only shows when seatsLeft is between 1 and 5 -->
    <button class="enroll-btn">Enroll Now</button> <!-- Only shows when seatsLeft is greater than 0 -->
  </div>

  <div class="card">
    <h2>JavaScript Mastery</h2>
    <p class="seats">
      0 seats left
    </p>
    <p class="status">Sold Out</p>
  </div>

</div>
*/
 function Tickets({ title, seatsLeft, status }) {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p className="seats">{seatsLeft} seats left</p>
        <p className="status">{status}</p>
  
        {seatsLeft > 0 && <button className="enroll-btn">Enroll Now</button>}
        {seatsLeft > 0 && seatsLeft <= 5 && (
          <p className="warning">Almost Full</p>
        )}
      </div>
    );
  }

export default function BuyTickets(){
    return(

<div className="container"> 

  <h1 className="heading">Upcoming Courses</h1> 

  <Tickets title="React Basics" seatsLeft={12} status ="Open for Enrollment"/>
  <Tickets title="Advanced CSS" seatsLeft={4} status ="Open for Enrollment"/>
  <Tickets title="JavaScript Mastery" seatsLeft={0} status ="Sold Out"/>

</div>


    );
}