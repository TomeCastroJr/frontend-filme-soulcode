import React, { useState, useEffect } from "react";
import image1 from "../assets/3.jpg";
import image2 from "../assets/R.jpg";
import image3 from "../assets/2.jpg";
import image4 from "../assets/banner.jpg";

const Home = () => {
  const slides = [
    {
      imagem: image1,
      titulo: "Primeiro Slide",
    },
    {
      imagem: image2,
      titulo: "Segundo Slide",
    },
    {
      imagem: image3,
      titulo: "Terceiro Slide",
    },
    {
      imagem: image4,
      titulo: "Quarto Slide",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === slides.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 4000); // Muda o slide a cada 3 segundos (3000ms)

    return () => clearInterval(interval);
  }, [index, slides.length]);
  return (
    <div className="position-relative">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === index ? "active" : ""}`}
            >
              <img
                className="d-block w-100"
                src={slide.imagem}
                alt={slide.titulo}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Home;
