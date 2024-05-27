import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import './About.css'
import { useRef } from 'react';
import moon from './videoKOV.mp4';
import land from './moon.png';
import cat from './moon.jpeg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';


const About = () => {
//   const location = useLocation();
//   const [prevLocation, setPrevLocation] = useState("");
//   useEffect(() => {
//     setPrevLocation(location.state.data);
//   }, [location]);

  const ref = useRef();
  return (
    <div className=" About max-w-container mx-auto px-4">
      {/* <Breadcrumbs title="About" prevLocation={prevLocation} /> */}

      <Parallax pages={5} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
          >
            <video width='100%' autoPlay loop muted>
              <source src={moon} type="video/mp4" />
            </video>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(${land})`,
              backgroundSize: 'cover',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 0.01  }}
            style={{ textAlign: 'right' }}
          >
            <img src={cat} />
          </ParallaxLayer>

        

          <ParallaxLayer
            offset={0.2}
            speed={0.05}
            onClick={() => ref.current.scrollTo(3)}
          >
            <h2>About Evlmuse</h2>
          </ParallaxLayer>


          <ParallaxLayer
            sticky={{ start: 2, end: 0.01  }}
            style={{ textAlign: 'left' }}
          >
            <img src={cat} />
          </ParallaxLayer>


          <ParallaxLayer
            offset={1}
            speed={2}
            onClick={() => ref.current.scrollTo(0)}
          >
            <h6>We believe that fashion should be accessible to everyone.!</h6>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={3}
            onClick={() => ref.current.scrollTo(0.6)}
          >
            <h6>We  everyone.!</h6>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={2}
            onClick={() => ref.current.scrollTo(0)}
          >
            <h5>We believe that fashion should be accessible to everyone.!</h5>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={3}
            onClick={() => ref.current.scrollTo(0.6)}
          >
            <h5>We  everyone.!</h5>
          </ParallaxLayer>


        </Parallax>
    </div>
  );
};

export default About;

