import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faMicrochip,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import Browser from "../images/Browser.js";

function About() {
  return (
    <div className="bg-gradient-to-br from-[#2e2e2e] via-black to-black text-white">
      <div className="px-72 ">
        <p className="font-extrabold text-4xl">About</p>
        <p className="text-base leading-7 sm:text-lg">
          Hello world, I am Anmol Malik trying to do best as a software
          developer. I have interesete in the fields of data science, machine
          learning and web development besides coding I like human pyschology,
          some magisitic art reading books along with listening to music is what
          I do a lot. Speaking of what I am and what I want to be is little
          intricacie but speaking less is one of me. Side projects are
          revolting,intersting and always takes a lot more than expected but
          gives more than thought. I have worked on different side project from
          Hey, I am Anmol Malik interseted in frontend developer, machine
          learning engineer and data scientist. Currently learning new things
          each day is like the Artifical Intetlligence have always make me
          wonder how pieces of metal thinks and getting close to the humanity. A
          journey from wondering to creating have been and continuously will be.
          I love to work on real life programs and making compiling programs.
          Converting passion to profession is my passion and the ultimate goal
          to make handsome of money.
        </p>
      </div>
          <div class="w-0 h-0 
   border-l-[100px] border-l-transparent
   border-t-[150px] border-t-green-700
   border-r-[100px] border-r-transparent
    "></div>
    </div>
  );
}
export default About;
