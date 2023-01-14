import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";
import { SiGeeksforgeeks } from "react-icons/si";

import img1 from "./images/anime.png";
import img2 from "./images/pomodoro.png";
import img3 from "./images/cover.png";
import img4 from "./images/figma.png";
import img5 from "./images/blog.png";
import img6 from "./images/mgm-hustlers.png";
import img7 from "./images/piyupix.png";

export const Experience = [
  {
    id: 1,
    date: "2021",
    iconsSrc: <IoCodeWorking />,
    title: "FrontEnd Web-Devloper",
    description: "React.js,Next.js,HTML,Tailwind CSS",
  },
  {
    id: 2,
    date: "2022",
    iconsSrc: <IoCodeWorking />,
    title: "BackEnd Web-Devloper",
    description: "Mongo.DB,Node.js,Express.js",
  },
  {
    id: 3,
    date: "2022",
    iconsSrc: <IoCodeWorking />,
    title: "UI/UX Designer",
    description: "Adobe Photoshop, Figma, Canva,Spline,Sketch",
  },
  {
    id: 4,
    date: "2022",
    iconsSrc: <IoCodeWorking />,
    title: "Blogger",
    description:
      "Blogs on MERN stack,React liabrary,Git and Github and many more",
  },
];
export const Projects = [
  {
    id: 1,
    name: "Anime Song App",
    imageSrc: img1,
    techs: "HTML,CSS,Vanilla JS",
    github: " https://piyush-mahajan.github.io/Anime-Song-app/",
  },
  {
    id: 2,
    name: "PiyuPix App",
    imageSrc: img7,
    techs: "React.js and Unsplash API",
    github: "https://piyupix.netlify.app/",
  },
  {
    id: 3,
    name: "Mgm-hustler's Site",
    imageSrc: img6,
    techs: "HTML CSS and JavaScript",
    github: "https://mgm-hustlers.netlify.app/",
  },
  {
    id: 4,
    name: "Pomodoro App",
    imageSrc: img2,
    techs: "React Js,CSS,React Liabrary ",
    github: "https://piyush-pomodoro.netlify.app/",
  },
  {
    id: 5,
    name: "Framer motion Guide",
    imageSrc: img3,
    techs: "React JS",
    github: "https://github.com/piyush-mahajan/framer-motion-starting-guide",
  },

  {
    id: 6,
    name: "Figma UI Project",
    imageSrc: img4,
    techs: "Adobe PhotoShop,Figma,Canva",
    github:
      "https://www.figma.com/proto/KM5BKpsYmX6MJO7mREDfLY/spotify-like-website?node-id=1%3A2&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    id: 7,
    name: "Blogging Website",
    imageSrc: img5,
    techs: "BlogSpot",
    github: "https://piyushmahajan2004.blogspot.com/",
  },
];
export const SocialLinks = [
  {
    id: 1,
    iconSrc: (
      <IoLogoGithub className="text-[#1302ff] text-3xl cursor-pointer" />
    ),
    name: "GitHub",
    link: "https://github.com/piyush-mahajan",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoLinkedin className="text-[#1302ff] text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/piyush-mahajan-146860229/",
  },

  {
    id: 3,
    iconSrc: (
      <IoLogoInstagram className="text-[#1302ff] text-3xl cursor-pointer" />
    ),
    name: "Instagram",
    link: "https://www.instagram.com/piyush_mahajan_04/",
  },
  {
    id: 4,
    iconSrc: (
      <SiGeeksforgeeks className="text-[#1302ff] text-3xl cursor-pointer" />
    ),
    name: "GeeksForGeeks",
    link: "https://auth.geeksforgeeks.org/user/piyushmahajan/",
  },
  {
    id: 5,
    iconSrc: (
      <IoLogoYoutube className="text-[#1302ff] text-3xl cursor-pointer" />
    ),
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCSdFhHCqx3h5VWeNlR0PXDg",
  },
];
