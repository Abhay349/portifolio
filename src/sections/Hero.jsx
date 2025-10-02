import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { motion } from "framer-motion";

const Hero = () => {
  // GSAP entrance for hero-text headings
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  // Typewriter effect for intro paragraph
  const fullText = `Hi, I’m Abhay, a second-year CSE student at NIT Agartala.`;

const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingSpeed = 35; // ms per character
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            {/* Premium Intro Paragraph with Typewriter + Glow */}
            <motion.p
              className="relative z-10 
                         text-white/90 md:text-2xl text-lg 
                         font-light tracking-wide leading-relaxed
                         bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 
                         bg-clip-text text-transparent
                         drop-shadow-lg
                         hover:scale-[1.02] transition-transform duration-700"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {displayText.split("Abhay").map((part, idx, arr) => (
                <>
                  {part}
                  {idx < arr.length - 1 && (
                    <span className="font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-text-glow">
                      Abhay
                    </span>
                  )}
                </>
              ))}
              <span className="animate-blink">|</span>
            </motion.p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;