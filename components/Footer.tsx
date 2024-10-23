"use client"
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import Button from "./ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full md:mb-5 mb-[100px]" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
        loading="lazy"
        width={0}
        height={0}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="lg:text-5xl text-2xl text-center font-bold tracking-wide lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <Button
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center md:gap-0 gap-7">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Shaheen Developer
        </p>

        <div className="flex items-center md:gap-[14px] gap-9">
          {socialMedia.map((info) => (
            <motion.div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              initial={{y: 0}}
              whileHover={{y:-10}}
              transition={{duration:.2}}
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;