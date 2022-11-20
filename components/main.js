import Image from "next/image";
import portrait from "../images/portrait.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Main = ({ className }) => {
  return (
    <div className={className}>
      {/* ========================= main ======================= */}
      <div className="realtive flex flex-row h-100v">
        {/* ========================= Left ======================== */}
        <div className="z-40 flex flex-col items-start justify-center pl-5">
          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "24px" }}
                icon={faGithub}
                className="opacity-90 transition-all hover:scale-110 hover:text-[#837A75] hover:opacity-100 duration-75"
              />
            </a>
          </div>

          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "23px" }}
                icon={faTwitter}
                className="opacity-90 transition-all hover:scale-110 hover:text-[#837A75] hover:opacity-100 duration-75"
              />
            </a>
          </div>
          <div className=" p-3 ">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faMedium}
                className="opacity-90 transition-all hover:scale-110 hover:text-black hover:opacity-100 duration-75"
              />
            </a>
          </div>
          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "26px" }}
                icon={faInstagram}
                className="opacity-90 transition-all hover:scale-110 hover:text-black hover:opacity-100 duration-75"
              />
            </a>
          </div>
        </div>
        {/* ===================== right ======================== */}
        {/* <div className="flex flex-col p-auto m-auto p-32 text-9xl font-extrabold text-white font-open_Sans bg-black">
          <p className="p-5">Anmol</p>
          <p className="p-5">Malik</p> */}
        {/* </div> */}
        {/* start */}

        <div className="flex grow justify-center items-center w-content h-content mt-[-10%] ml-[25%]">
          <Image
            src={portrait}
            height={600}
            width={600}
            className="z-10"
          />
        </div>
        {/* end */}
      </div>

      <div className="absolute z-0 w-screen h-[50%] bg-[rgb(131,122,117)] top-[50%]"></div>
      <div className="absolute top-[42%] left-[20%] flex flex-col z-20 justify-center">
        {/* row 1 */}
        <p className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl ml-[10]$ font-bold font-abc text-[#ffffff] ">
          Anmol Malik
        </p>
        {/* row 2 */}
        <p className="mt-[-6%] z-10 text-white text-2xl font-abc">
          development is my sixth sense
        </p>
      </div>
    </div>
  );
};

export default Main;
