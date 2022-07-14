import React from 'react';

// components
import { Hero, Repositories, Skills, Educations, Experiences, Footer, BackTop } from './index';

// global styles
import '../assets/css/app.css';

export default function Layout() {
  return (
    <>
      <main className="vea-main-content">
        <Hero />

        <Repositories />

        <Skills />

        <Educations />

        <Experiences />
      </main>

      <Footer />

      <BackTop />
    </>
  );
}
