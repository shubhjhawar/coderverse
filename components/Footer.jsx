'use client';

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";


const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center gap-5 justify-between">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the CoderVerse</h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain"/>
          <span className="font-normal  text-[10px] sm:text-[16px] text-white">ENTER CODERVERSE</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[30px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">CODERVERSE</h4>
          <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2023 Coderverse. All rights reserved.</p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img 
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  </motion.footer>
);

export default Footer;
