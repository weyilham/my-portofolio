import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "../Elements/Image/Image";
import Button from "../Elements/Button/Button";

export const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "FrondEnd",
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        "BackEnd",
        3000,
        "FullStack",
        3000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default function Landing() {
  return (
    <div className="bg-background shadow-sm md:basis-8/12 basis-9/12">
      {/* <ParticleBackground /> */}
      <div className="bg-white shadow-sm w-full flex justify-between px-5 py-10 md:px-10 md:py-15 lg:px-16 lg:py-20 lg:relative ">
        <div className="landing page lg:w-2/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-secondary">
            I'm Ilham Maulana
          </h1>
          <h1 className="text-2xl md:text-3xl sm:text-3xl xl:text-4xl  font-bold mt-2">
            <span className="text-primary">{<Typing />} </span>
            <span className="text-secondary ">Developer</span>
          </h1>
          <p className=" text-[8px] md:text-xs font-light mt-2 text-samar">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            assumenda! Dolorem, nemo facere. consectetur adipisicing elit.
            Beatae, assumenda! Dolorem, nemo facere.
          </p>
          <Button
            type="button"
            classname="bg-primary hover:bg-yellow-400 hover:text-white text-secondary px-2 md:px-5 py-2 rounded-md md:text-md  mt-2 md:mt-5 lg:mt-10 flex items-center justify-center text-xs md:text-sm lg:text-md lg:text-xl"
          >
            HIRE ME <FaArrowRight className="inline ml-2" />
          </Button>
        </div>
        <div className="lg:w-1/3 lg:block lg:absolute lg:bottom-0 right-4 xl:right-[-2%] hidden">
          <Image src="./img/profile.png" alt="logo" classname="xl:w-[80%]" />
        </div>
      </div>
    </div>
  );
}
