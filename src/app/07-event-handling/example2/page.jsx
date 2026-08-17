"use client";
import React from "react";
import "./styles.css";

/*
Expected HTML:
<div class="container">
  <h2 class="title">Danger Zone</h2>
  <div class="buttonGroup">
    <button class="button">Delete Account</button>
    <button class="button">Reset Settings</button>
    <button class="button">Log Out</button>
  </div>
</div>

Instructions:
Each button must first ask the user to confirm the action with window.confirm,
then only run the action (and show its alert) if the user clicks "OK".

- Delete Account
  confirm message: "Are you sure you want to delete your account?"
  if confirmed, alert: "Account deleted!"

- Reset Settings
  confirm message: "This will reset all your settings. Continue?"
  if confirmed, alert: "Settings reset!"

- Log Out
  confirm message: "Are you sure you want to log out?"
  if confirmed, alert: "Logged out!"

If the user clicks "Cancel" on the confirm dialog, nothing should happen (no alert).
*/

export default function DangerZone() {
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="title">Danger Zone</h2>
        <div className="buttonGroup">
          <button className="button" 
          onClick={()=>{
            const userConfirmed = window.confirm(
              "Are you sure you want to delete your account?");
            if (userConfirmed) {
              alert("Account deleted");
              
            }  
          }}>Delete Account</button>
          <button className="button"
          onClick={()=> {
            const userConfirmed = window.confirm("This will reset all your settings. Continue?");
            if (userConfirmed) {
              alert("Settings reset!")
            }
          }}>Reset Settings</button>
          <button className="button"
          onClick={()=>{
            const userConfirmed = window.confirm("Are you sure you want to log out?");
            if (userConfirmed) {
              alert("Logged out!")
              
            }
          }}
          >Log Out</button>
        </div>
      </div>

    </React.Fragment>
    
  );
 
}
