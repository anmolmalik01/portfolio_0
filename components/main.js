import Image from "next/image";

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
      <div className="flex flex-row h-100v z-30">
        {/* ========================= Left ======================== */}
        <div className="flex flex-col items-start justify-center">
          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "24px" }}
                icon={faGithub}
                className="opacity-90 transition-all hover:scale-110 hover:text-main hover:opacity-100 duration-75"
              />
            </a>
          </div>

          <div className="p-3 ">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "23px" }}
                icon={faTwitter}
                className="opacity-90 transition-all hover:scale-110 hover:text-main hover:opacity-100 duration-75"
              />
            </a>
          </div>
          <div className=" p-3 ">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faMedium}
                className="opacity-90 transition-all hover:scale-110 hover:text-main hover:opacity-100 duration-75"
              />
            </a>
          </div>
          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "26px" }}
                icon={faInstagram}
                className="opacity-90 transition-all hover:scale-110 hover:text-main hover:opacity-100 duration-75"
              />
            </a>
          </div>
        </div>
        {/* ===================== right ======================== */}
        <div className="flex flex-col p-auto m-auto p-32 text-9xl font-extrabold text-white font-open_Sans bg-black">
          <p className="p-5">Anmol</p>
          <p className="p-5">Malik</p>
        </div>
      </div>
      <div
        className="absolute h-fit w-fit top-[8%] right-[10%] z-20 text-xs	opacity-50"
        style={{
          direction: "rtl",
          unicodeBidi: "bidi-override",
          writingMode: "vertical-lr",
          textOrientation: "upright",
        }}
      >
        LightingSparrowAngryMultiStinsonHoleNon
        <br />
        ProgrammingCaptainLoveWatchGirlVerbal
        <br />
        NightVerseMustangeMosbeHoleHeartSpider
        <br />
        BlackWormDumbleStarSongsSilverReply
        <br />
        WarsStocksBooksSavageRGBRegret
        <br />
        LightGlasses
      </div>
    </div>
  );
};

export default Main;
