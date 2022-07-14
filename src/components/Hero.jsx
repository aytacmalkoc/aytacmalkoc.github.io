import React from 'react'
import { openFile } from '../helpers'
import resume from '../assets/files/resume.pdf'

export default function Hero() {

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    return (
        <div className="vea-banner vea-banner-2">
            <div className="container">
                <div className="banner-content">
                    <h1 className="banner-title wow fadeInLeft">
                        <span className="color-title">Aytac Malkoc</span>
                        <br />
                        Software Developer
                    </h1>
                    <div className="row">
                        <div className="col-12">
                            <div className="banner-cont-links wow fadeInUp">
                                <a href="https://www.github.com/aytacmalkoc" className="social-link" aria-label="twitter" target={'_blank'}>
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="https://www.twitter.com/jrd_aytacmalkoc" className="social-link" aria-label="dribble" target={'_blank'}>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/aytacmalkoc35" className="social-link" aria-label="behance" target={'_blank'}>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="mailto:aytacmalkoc@protonmail.com" className="social-link" aria-label="aytacmalkoc@protonmail.com">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                                <button onClick={() => openFile(resume)} className="social-link btn btn-outline-dark">Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-dwn d-flex justify-content-center align-items-center" onClick={() => scrollDown()}>
                <i className="fa-solid fa-arrow-down fa-2x"></i>
            </div>
        </div>
    )
}
