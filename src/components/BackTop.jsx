import React, { useState } from 'react';

export default function BackTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => (window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false));

  window.addEventListener('scroll', toggleVisible);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      id="toTop"
      onClick={() => goTop()}
      style={{
        display: isVisible ? 'block' : 'none'
      }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
}
