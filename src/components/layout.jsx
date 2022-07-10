import React from 'react'

// components
import Hero from './Hero'
import Footer from './Footer'
// import Repositories from './Repositories'
import Experiences from './Experiences'
import Skills from './Skills'
import BackTop from './BackTop'
import Educations from './Educations'

// global styles
import '../assets/css/app.css'

export default function layout({ children }) {

    return (
        <>
            <main className="vea-main-content">
                <Hero />

                {/* <Repositories /> */}

                <Skills />

                <Educations />

                <Experiences />

                {children}
            </main>

            <Footer />

            <BackTop />
        </>
    )
}
