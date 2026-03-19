"use client"
import React from 'react'
import { useState } from 'react'

type Slide = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;

}
export default function SlideShow() {

  const [slides, setSlides] = React.useState<Slide[]>([
    {
      id: 1,
      title: 'Slide 1',
      description: 'Description for Slide 1',
      imageUrl: '/apps.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'Slide 2',
      description: 'Description for Slide 2',
      imageUrl: '/bg_img.jpg',
      link: '#',
    },
    {
      id: 3,
      title: 'Slide 3',
      description: 'Description for Slide 3',
      imageUrl: '/hero.png',
      link: '#',
    },
    {
      id: 4,
      title: 'Slide 4',
      description: 'Description for Slide 3',
      imageUrl: '/illustration.png',
      link: '#',
    },
    {
      id: 5,
      title: 'Slide 5',
      description: 'Description for Slide 3',
      imageUrl: '/Dicedbaseball.webp',
      link: '#',
    },
  ])
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div>
      <div>
        <h2>{slides[currentSlideIndex].title}</h2>
        <p>{slides[currentSlideIndex].description}</p>
        <img src={slides[currentSlideIndex].imageUrl} alt={slides[currentSlideIndex].title} />
        <a href={slides[currentSlideIndex].link}>Learn More</a>
      </div>
      <div>
        <button onClick={prevSlide}>Previous Slide</button>
        <button onClick={nextSlide}>Next Slide</button>
      </div>
      <div>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              backgroundColor: index === currentSlideIndex ? 'blue' : 'gray',
              color: 'white',
              margin: '0 5px',
              border: 'none',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}