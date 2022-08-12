import React from 'react';
import { experiences } from '../constants';

export default function Experiences() {
  return (
    <div className="vea-experiences vea-experiences-4 sec-spacer">
      <div className="container">
        <div className="sec-heading-4 text-left mb-60">
          <h2 className="sec-title">Experiences</h2>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <div className="single-experience" key={experience.id}>
              <div className="row">
                <div className="col-lg-4 col-xl-3 wow fadeInLeft">
                  <div className="experience-duration mb-3">
                    <h5>{experience.duration}</h5>
                    <h4 className="text-black-50">{experience.company}</h4>
                  </div>
                </div>
                <div className="col-lg-8 col-xl-9 wow fadeInUp">
                  <div className="experience-details">
                    <h4>{experience.title}</h4>
                    <p>{experience.description}</p>
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
