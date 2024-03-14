import {
  FaBook,
  FaBriefcase,
  FaCommentDots,
  FaFileCode,
  FaGraduationCap,
  FaHome,
} from "react-icons/fa";
import NavIcon from "../Elements/Icon/NavIcon";

export default function Navbar() {
  return (
    <>
      <div className="shadow-sm md:basis-1/12 md:block hidden">
        <div className="w-full bg-white flex flex-col items-center gap-3 py-10">
          <div className="navheader">
            <NavIcon>
              <FaHome
                size={20}
                className="text-secondary group-hover:text-white"
              />
            </NavIcon>
          </div>

          <div className="navItem mt-32 flex flex-col gap-5">
            <NavIcon>
              <FaHome
                size={20}
                className="text-secondary group-hover:text-white"
              />
            </NavIcon>

            <NavIcon>
              <FaFileCode
                size={20}
                className="text-secondary group-hover:text-white"
              />
            </NavIcon>

            <NavIcon>
              <FaGraduationCap
                size={20}
                className="text-secondary group-hover:text-white"
              />
            </NavIcon>

            <NavIcon>
              <FaBriefcase
                size={20}
                className="text-secondary group-hover:text-white"
              />
            </NavIcon>

            <NavIcon>
              <FaBook
                size={20}
                className="text-secondary group-hover:text-white"
              />
            </NavIcon>

            <NavIcon>
              <FaCommentDots
                size={20}
                className="text-secondary group-hover:text-white"
              />
            </NavIcon>
          </div>
        </div>
      </div>
    </>
  );
}
