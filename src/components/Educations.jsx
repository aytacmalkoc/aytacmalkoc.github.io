import React from 'react';
import { openFile } from '../helpers';
import transcript from '../assets/files/transcript.pdf';

export default function Educations() {
  return (
    <div className="vea-experiences vea-experiences-4 sec-spacer">
      <div className="container">
        <div className="sec-heading-4 text-left mb-60">
          <h2 className="sec-title">Educations</h2>
        </div>
        <div className="experience-list">
          <div className="single-experience">
            <div className="row">
              <div className="col-lg-4 col-xl-3 wow fadeInLeft">
                <div className="experience-duration mb-3">
                  <h5>2019 - 2021</h5>
                  <h4 className="text-black-50">University</h4>
                </div>
              </div>
              <div className="col-lg-8 col-xl-9 wow fadeInUp">
                <div className="experience-details">
                  <h4>Isparta University of Applied Sciences</h4>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>Computer Programming Pr. - Cumulative GPA: 2.95</p>
                    <button className="btn btn-outline-dark" onClick={() => openFile(transcript)}>
                      Download Transcript
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-experience">
            <div className="row">
              <div className="col-lg-4 col-xl-3 wow fadeInLeft">
                <div className="experience-duration mb-3">
                  <h5>2014 - 2019</h5>
                  <h4 className="text-black-50">High School</h4>
                </div>
              </div>
              <div className="col-lg-8 col-xl-9 wow fadeInUp">
                <div className="experience-details">
                  <h4>Mersinli Vocational and Technical Anatolian High School</h4>
                  <p>Information Technologies/Web Programming Pr. - GS: 69.73</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
