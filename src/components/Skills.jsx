import React from 'react'

// logos
import laravelLogo from '@/assets/images/laravel-logo.png'
import expressLogo from '@/assets/images/express-logo.png'
import strapiLogo from '@/assets/images/strapi-logo.png'
import reactLogo from '@/assets/images/react-logo.png'
import vueLogo from '@/assets/images/vue-logo.png'
import wordpressLogo from '@/assets/images/wordpress-logo.png'
import mysqlLogo from '@/assets/images/mysql-logo.png'
import mongodbLogo from '@/assets/images/mongodb-logo.png'

export default function Skills() {
    return (
        <div className="vea-experiences vea-experiences-4 sec-spacer">
            <div className="container">
                <div className="sec-heading-4 text-left mb-60">
                    <h2 className="sec-title">Skills</h2>
                </div>
                <div className="experience-list">
                    <div className="single-experience">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-xl-3 wow fadeInLeft">
                                <div className="experience-duration mb-3">
                                    <h5>Frontend</h5>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xl-9 wow fadeInUp">
                                <div className="experience-details">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4">
                                            <img src={reactLogo} alt="Laravel" width={150} />
                                        </div>
                                        <div className="col-lg-4">
                                            <img src={vueLogo} alt="Laravel" width={150} />
                                        </div>
                                        <div className="col-lg-4">
                                            <img src={wordpressLogo} alt="Laravel" width={150} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-experience">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-xl-3 wow fadeInLeft">
                                <div className="experience-duration mb-3">
                                    <h5>Backend</h5>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xl-9 wow fadeInUp">
                                <div className="experience-details">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4">
                                            <img src={laravelLogo} alt="Laravel" width={150} />
                                        </div>
                                        <div className="col-lg-4">
                                            <img src={expressLogo} alt="Laravel" width={150} />
                                        </div>
                                        <div className="col-lg-4">
                                            <img src={strapiLogo} alt="Laravel" width={150} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-experience">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-xl-3 wow fadeInLeft">
                                <div className="experience-duration mb-3">
                                    <h5>Database</h5>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xl-9 wow fadeInUp">
                                <div className="experience-details">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4">
                                            <img src={mysqlLogo} alt="Laravel" width={150} />
                                        </div>
                                        <div className="col-lg-4">
                                            <img src={mongodbLogo} alt="Laravel" width={150} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
