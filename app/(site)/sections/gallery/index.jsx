'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import MarqueeText from '../../components/MarqueeText';

function Gallery() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const galleryRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  return (
    <section id="gallery" className="gallery">
      <Marquee speed={100}>
        <MarqueeText text="fit 77" />
      </Marquee>

      <div className="gallery__container">
        <div
          className="gallery__images"
          ref={galleryRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {[...Array(11)].map((_, index) => (
            <div className="gallery__image-container" key={index + 1}>
              <Image
                src={`/images/gallery/photo-${index + 1}.png`}
                alt={`Photo ${index + 1}`}
                width={400}
                height={400}
                className="gallery__image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
