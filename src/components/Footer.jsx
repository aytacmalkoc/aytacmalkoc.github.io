import React from 'react'

export default function Footer() {
    return (
        <footer className="vea-footer footer-2">
            <div className="container">
                <div className="footer-about text-lg-center">
                    <a href="mailto:aytacmalkoc@protonmail.com" className="wow fadeInUp">
                        <h5>aytacmalkoc@protonmail.com</h5>
                    </a>
                    <div className="footer-social-links wow fadeInUp">
                        <a href="https://www.github.com/aytacmalkoc" className="social-link" aria-label="twitter" target={'_blank'}>
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.twitter.com/jrd_aytacmalkoc" className="social-link" aria-label="dribble" target={'_blank'}>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/aytacmalkoc35" className="social-link" aria-label="behance" target={'_blank'}>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
