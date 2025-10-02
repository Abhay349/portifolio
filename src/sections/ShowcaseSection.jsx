import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
  <div
  id="work"
  ref={sectionRef}
  className="relative app-showcase py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
>
  {/* Left glowing frame */}
  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-md animate-pulse"></div>

  {/* Right glowing frame */}
  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-400 rounded-full blur-md animate-pulse"></div>

  {/* Subtle background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.1),transparent_60%)] pointer-events-none"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,255,0.1),transparent_70%)] pointer-events-none"></div>

  <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
    <div className="showcaselayout space-y-16">
      
      {/* --- First Project --- */}
      <motion.div
        ref={rydeRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="first-project-wrapper flex flex-col md:flex-row gap-10 items-center p-10 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl hover:shadow-cyan-500/40 transition-all hover:scale-[1.03]"
      >
      <div className="image-wrapper w-full md:w-1/2 overflow-hidden rounded-2xl relative group">
  <a
    href="https://dsai.vercel.app/" // <-- your project URL
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
  >
    <span className="text-cyan-300 font-semibold text-lg">
      Explore Project →
    </span>
  </a>
  <img
    src="/images/logos/dsai.png"
    alt="Ryde App Interface"
    className="w-full h-auto rounded-2xl transform group-hover:scale-110 transition duration-700"
  />


          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
           
          </div>
        </div>
        <div className="text-content md:w-1/2 space-y-5">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            Data Science & AI Club Website
          </h2>
          <p className="text-gray-300 md:text-lg leading-relaxed">
            A premium, responsive platform built to showcase the club’s initiatives,
            events, and resources. Developed with{" "}
            <span className="text-cyan-400 font-semibold">React</span>,{" "}
            <span className="text-cyan-400 font-semibold">TypeScript</span>, and{" "}
            <span className="text-cyan-400 font-semibold">TailwindCSS</span> for a
            fast, immersive experience.
          </p>
        </div>
      </motion.div>

      {/* --- Project List --- */}
      <div className="project-list-wrapper grid sm:grid-cols-.05 gap-8">
        {[
          {
            ref: libraryRef,
            bg: "from-amber-200 via-orange-100 to-yellow-200",
            img: "/images/logos/SCM.jpg",
            alt: "Smart Contact Management Platform",
            title: "Smart Contact Management Platform using Spring Boot",
          },
          {
            ref: ycDirectoryRef,
            bg: "from-rose-200 via-pink-100 to-red-200",
            img: "/images/logos/URL.png",
            alt: "URL Shortener",
            title: "URL Shortener using Go",
          },
        ].map(({ ref, bg, img, alt, title }, i) => (
          <motion.div
            key={i}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="project group relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-xl hover:shadow-cyan-400/40 hover:scale-105 transition-all"
          >
            <div className={`image-wrapper bg-gradient-to-br ${bg} p-5`}>
              <img
                src={img}
                alt={alt}
                className="w-full h-70 object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h2 className="p-5 text-lg font-bold text-gray-200 group-hover:text-cyan-300 transition-colors">
              {title}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default AppShowcase;
