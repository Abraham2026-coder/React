"use client";
import "./styles.css";
import React from "react";


//
// Build it so that:
//  - each job shows "Remote" when it's remote, otherwise its
//    on-site location
//  - urgent jobs get an extra "Urgent" tag next to the title
//  - clicking "Apply" alerts which job and company was applied to
//

const JOBS = [
  { id: 'j1', title: 'Frontend Engineer', company: 'Nimbus', location: 'Remote', remote: true, urgent: true },
  { id: 'j2', title: 'Backend Engineer', company: 'Cobalt Labs', location: 'Austin, TX', remote: false, urgent: false },
  { id: 'j3', title: 'Product Designer', company: 'Nimbus', location: 'Remote', remote: true, urgent: false },
  { id: 'j4', title: 'QA Engineer', company: 'Harbor Systems', location: 'Chicago, IL', remote: false, urgent: true },
];
/**function applyButton(jobTitle,company){
    return (
      window.alert(`You have applied for the job as ${jobTitle} at ${company}`)
   )
}*/

function Job({ jobTitle, company, location, remote, urgent, Apply }) {
  return (
    <li className="job-card">
      <div className="job-info">
        <p className="job-title">
          {jobTitle}{urgent === true && <span className="urgent-tag">"Urgent"</span>}
        </p>
        <p className="job-company">{company}</p>
        <span className="location-badge">{location}</span>
        <span className="location-badge remote">{remote}</span>
      </div>
      <button onClick={() => window.alert(`You have applied for the job as ${jobTitle} at ${company}`)} className="apply-btn">{Apply}</button>
    </li>
  );
}

export default function JobBoardDemo() {
  return (
    <div className="container">
      <h1 className="title">Job Board</h1>
      <div className="board">
        <h2 className="board-title">Open Positions</h2>
        <ul className="job-list">
          {
            JOBS.map((item, index) => <Job key={index}
              jobTitle={item.title}
              company={item.company}
              location={item.location}
              remote={item.remote}
              urgent={item.urgent}
              Apply={"Apply"}
            />)
          }
        </ul>
      </div>
    </div>
  );
}



