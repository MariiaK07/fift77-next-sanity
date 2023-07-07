'use client';

import Image from 'next/image';
// import { useState, useRef } from 'react';

const Gallery = async () => {
  // const [isDown, setIsDown] = useState(false);
  // const [startX, setStartX] = useState(null);
  // const [scrollLeft, setScrollLeft] = useState(0);
  // const galleryRef = useRef(null);

  // const handleMouseDown = (e) => {
  //   setIsDown(true);
  //   setStartX(e.pageX - galleryRef.current.offsetLeft);
  //   setScrollLeft(galleryRef.current.scrollLeft);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - galleryRef.current.offsetLeft;
  //   const walk = (x - startX) * 2;
  //   galleryRef.current.scrollLeft = scrollLeft - walk;
  // };

  // const handleMouseUp = () => {
  //   setIsDown(false);
  // };

  let x = 0;
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // const handleMouseDown = (e) => {
  //   setStartX(e.pageX - e.currentTarget.offsetLeft);
  //   setScrollLeft(e.currentTarget.scrollLeft);
  // };

  // const handleMouseMove = (e) => {
  //   e.preventDefault();
  //   const x = e.pageX - e.currentTarget.offsetLeft;
  //   const walk = (x - startX);
  //   e.currentTarget.scrollLeft = scrollLeft - walk;
  // };

  return (
    <section
      id="gallery"
      className="gallery"
      // ref={galleryRef}
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp}
    >
      <div className="gallery__images">
        {[...Array(11)].map((_, index) => (
          <div className="gallery__image-container" key={`${index + 1}`}>
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
    </section>
  );
};

export default Gallery;
