const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Year of CSE Journey" },
  { value: 2, suffix: "",  label: "Completed Projects" },
  { value: 1, suffix: "",  label: "Hackathons Participated" },
  { value: 100, suffix: "%", label: "Learning Enthusiasm" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/nit.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-2.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-3.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-4.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-5.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-6.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-7.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-8.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-9.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-10.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-11.png",
  // },
];

const abilities = [
  {
    
    title: "Problem Solving",
    desc: "Building strong foundations in DSA and algorithms with a focus on logical thinking.",
  },
  {
    
    title: "Project Experience",
    desc: "Worked on 2+ projects applying concepts of web development, AI, and databases.",
  },
  {
    
    title: "Continuous Learning",
    desc: "Exploring new technologies and improving coding skills as a second-year CSE student at NIT Agartala.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/spboot.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Java Developer",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Wizard",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1.2,
    rotation: [0, Math.PI / 6, 0],
    tint: "#61dafb", // optional custom prop for a glow or shader
  },
  {
    name: "Python Alchemist",
    modelPath: "/models/python-transformed.glb",
    scale: 0.9,
    rotation: [0, -Math.PI / 8, Math.PI / 12],
    tint: "#ffd343",
  },
  {
    name: "Backend Architect",
    modelPath: "/models/leaf1.glb",
    scale: 5, // slightly smaller for balance
    rotation: [Math.PI / 12, Math.PI / 6, 0],
    tint: "#4caf50",
  },
  {
    name: "3D Interaction Artist",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.07,
    rotation: [0, Math.PI / 4, Math.PI / 8],
    tint: "#ffffff",
  },
  {
    name: "Version Control Maestro",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.07,
    rotation: [0, Math.PI / 3, 0],
    tint: "#f1502f",
  },
];

const expCards = [
  {
    review: "While balancing my board exams with JEE preparation, I secured 98.51 percentile in JEE Mains in my first attempt, a result that reflected my consistency and determination. Later, I also qualified Jee Advance with a decent rank.",
    // imgPath: "/images/exp1.png",
    logoPath: "/images/dsai.png",
    title: "Don Bosco School, Gorakhpur",
    date: "2022,Intermediate",
    responsibilities: [
      "Studied Mathematics, Physics, Chemistry and English as mendatory subjects for course.",
      "Percentage: 90",
      "Won 1st prize in Inter-House Futsal Competition",
    ],
  },
  {
    review: "As a sophomore in Computer Science, I actively pursue coding alongside my academics, exploring Data Structures & Algorithms, Web Development, and AI/ML. I enjoy applying concepts through projects, building practical skills while strengthening my academic foundation.",
    // imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "National Institute of Technology, Agartala",
    date: "Auguest 2024 - Present",
    responsibilities: [
      "Sophomore in Computer Science, exploring core academic interests.",
      "CGPA: 8.98",
      "Completed coursework projects focused on programming, algorithms, and software development basics.",
    ],
  },
  {
    review: "Core Member of the club, focused on strengthening my skills in AI and ML through hands-on projects and collaborative learning. Actively contribute to the PR and Outreach team, helping organize events and engage the community. Participate in workshops and hackathons to apply concepts in real-world scenarios. Mentor and support fellow members in coding and AI initiatives. Continuously exploring emerging technologies to expand my knowledge and practical expertise.",
    // imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Data Science and AI Club, NIT Agartala",
    date: "Augest 2025 - Present",
    responsibilities: [
      "Joined the club as a Core Member to deepen my expertise in AI and ML through hands-on projects and collaboration.",
      "Proactively contribute to the PR and Outreach team, helping expand the club’s reach and engagement.",
      
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
