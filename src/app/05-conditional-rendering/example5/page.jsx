import React from "react";
import "./styles.css";

/*
Expected Output:
<div class="container">
  <h1 class="heading">Upcoming Courses</h1>
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