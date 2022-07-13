import React from 'react'

// components
import {
    Hero,
    Repositories,
    Skills,
    Educations,
    Experiences,
    Footer,
    BackTop,
} from './index'

// global styles
import '@/assets/css/app.css'

export default function layout({ children }) {

    return (
        <>
            <main className="vea-main-content">
                <Hero />

                <Repositories />

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
