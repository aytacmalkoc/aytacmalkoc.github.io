import React from 'react';
import { skills } from '../constants';

export default function Skills() {
  return (
    <div className="vea-experiences vea-experiences-4 sec-spacer">
      <div className="container">
        <div className="sec-heading-4 text-left mb-60">
          <h2 className="sec-title">Skills</h2>
        </div>
        <div className="experience-list">
          {Object.keys(skills).map((key, index) => (
            <div className="single-experience" key={index}>
              <div className="row align-items-center">
                <div className="col-lg-4 col-xl-3 wow fadeInLeft">
                  <div className="experience-duration mb-3">
                    <h5>{key}</h5>
                  </div>
                </div>
                <div className="col-lg-8 col-xl-9 wow fadeInUp">
                  <div className="experience-details">
                    <div className="row align-items-center">
                      {skills[key].map((skill) => (
                        <div className="col-6 col-md-4 col-lg-4" key={skill.id}>
                          <img src={skill.image} alt={skill.name} width={150} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
