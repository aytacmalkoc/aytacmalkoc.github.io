import React, { useState } from 'react';
import { scrollTo } from '../helpers';

export default function BackTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => (window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false));

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      id="toTop"
      onClick={() => scrollTo('top', 0)}
      style={{
        display: isVisible ? 'block' : 'none'
      }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
}
