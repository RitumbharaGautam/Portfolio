import React from "react";
import education from '../assets/img/education.png';
export const Education = () => {
  return (
    <section className="Ed-container" id="Education">
      <h2 className="Ed-title">Education</h2>
      <div className="Ed-content">
        <ul className="Ed-aboutItems">
          <li className="Ed-aboutItem">
            <img src={education} alt="Master degree" />
            <div className="Ed-aboutItemText">
              <h3>Master of Computer Applications ( 2022-2024 )</h3>
              <p>
              Completed my MCA with an 9.5 CGPA from Integral University.
              </p>
            </div>
          </li>
          <li className="Ed-aboutItem">
          <img src={education} alt="Bachelor degree" />
            <div className="Ed-aboutItemText">
              <h3> Bachelor of Computer Applications ( 2019-2022 )</h3>
              <p>
              Completed my BCA with an 9.12 CGPA from Integral University.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};