import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaRebel,
  FaDownload,
  FaCode,
  FaDatabase,
  FaDesktop,
} from "react-icons/fa";
import Image from "../Elements/Image/Image";
import Icons from "../Elements/Icon/Icons";
import ItemList from "../Fragments/Item/ItemList";
import BarSkill from "../Fragments/BarSkill/BarSkill";
import ExtraSkill from "../Fragments/ExtraSkill/ExtraSkill";
import Button from "../Elements/Button/Button";
export default function Profile() {
  return (
    <div className="bg-white shadow-sm md:basis-3/12 basis-3/12 flex justify-center items-center flex-col">
      <div className="py-12 px-4 menu-list-profile flex items-center justify-center flex-col ">
        <Image
          src="./img/profile.png"
          alt="logo"
          classname="bg-primary rounded-full object-scale-down w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
        />

        <h1 className="text-sm sm:text-md md:text-xl font-bold mt-5">
          Ilham Maulana
        </h1>
        <p className="text-[10px] md:text-[9px] lg:text-sm mt-2 text-samar">
          Fullstack Developer
        </p>

        <div className="sosial media flex gap-2 mt-2">
          <Icons>
            <FaFacebookF className="text-secondary text-sm group-hover:text-white" />
          </Icons>
          <Icons>
            <FaInstagram className="text-secondary text-sm group-hover:text-white" />
          </Icons>
          <Icons>
            <FaGithub className="text-secondary text-sm group-hover:text-white" />
          </Icons>
          <Icons>
            <FaLinkedin className="text-secondary text-sm group-hover:text-white" />
          </Icons>
        </div>
      </div>

      <div className=" border w-2/3 mb-3 border-background"></div>

      <div className="address mb-5 w-2/3">
        <ItemList text="Age" value="26" />
        <ItemList text="Residence" value="Serang City" />
        <ItemList text="Freelancer" value="Available" />
        <ItemList text="Address" value="Banten, Indonesia" />
      </div>

      <div className=" border w-2/3 mb-3 border-background"></div>

      <div className="Languages w-2/3 mb-10">
        <h1 className="text-sm sm:text-md md:text-xl font-bold text-secondary">
          Languages
        </h1>
        <BarSkill title="Indonesia" value="100" />
        <BarSkill title="English" value="45" />
      </div>

      <div className=" border w-2/3 mb-3 border-background"></div>

      <div className="skill w-2/3 mb-10">
        <h1 className="text-sm sm:text-md md:text-xl font-bold text-secondary">
          Skill
        </h1>
        <BarSkill title="HTML" value="95" />
        <BarSkill title="CSS" value="80" />
        <BarSkill title="Javascript" value="85" />
        <BarSkill title="PHP" value="75" />
      </div>

      <div className=" border w-2/3 mb-3 border-background"></div>

      <div className="skill w-2/3 mb-10">
        <h1 className="text-sm sm:text-md md:text-xl font-bold text-secondary">
          Extra Skill
        </h1>
        <div className="mt-3">
          <ExtraSkill
            title="React JS, Tailwind, Bootstrap"
            icon={<FaDesktop />}
          />

          <ExtraSkill title="Laravel, Next JS, Codeigniter" icon={<FaCode />} />
          <ExtraSkill title="MySQL, Firebase, MongoDB" icon={<FaDatabase />} />
        </div>
      </div>
      <div className=" border w-2/3 mb-3 border-background"></div>

      <Button
        type="button"
        classname="btn bg-primary hover:bg-yellow-400 text-secondary hover:text-white py-2 px-3 rounded w-2/3 flex justify-center items-center text-[10px] md:text-xs lg:text-sm"
      >
        Download CV <FaDownload className="ml-2" />
      </Button>

      <div className=" border w-2/3 my-5 border-background"></div>
    </div>
  );
}
