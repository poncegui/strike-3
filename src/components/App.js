import "./App.css";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./about/About";
import Counter from "./counter/Counter";
import CounterBtn from "./counter/Counter";
import Cover from "./cover/Cover";
import Experience from "./studies/Experience";
import Footer from "./footer/Footer";
import Info from "./info/Info";
import Navbar from "./navbar/Navbar";
import Slider from "./slider/Slider";
import Studies from "./studies/Studies";
import Tecnologies from "./tecnologies/Tecnologies";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <>
      <Routes>
        <Route path="/formacion" element={<Studies />} />
        <Route path="/experiencia" element={<Experience />} />

        <Route
          path="/"
          element={
            <>
              <Navbar scrolling={scrollHeight} />

              <Cover />
              <About />
              {/* <Slider /> */}
              <Tecnologies />
              <Info />
          
             
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
