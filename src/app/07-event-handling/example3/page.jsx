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

function ConfirmButton({ label, onClick }) {
  return <button onClick={onClick} className="button">{label}</button>
}

export default function DangerZone() {
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="title">Danger Zone</h2>
        <div className="buttonGroup">
          {/* <button className="button">Delete Account</button>
          <button className="button">Reset Settings</button>
          <button className="button">Log Out</button> */}

        <ConfirmButton label="Delete Account" onClick={() => window.alert("Are you sure you want to delete your account?")}></ConfirmButton>
        <ConfirmButton label="Reset Settings" onClick={() => window.alert("This will reset all your settings. Continue?")}></ConfirmButton>
        <ConfirmButton label="Log Out" onClick={() => window.alert("Are you sure you want to log out?")}></ConfirmButton>
      </div>
    </div>

    </React.Fragment >

  );

}
