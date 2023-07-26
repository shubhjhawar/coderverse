'use client';

import {motion} from "framer-motion";
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" /> 
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25 }}
        className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
      >
        <TypingText title="| About CoderVerse" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">CoverVerse </span>
          is a mesmerizing metaverse, where boundless 
          <span className="font-extrabold text-white"> virtual realms </span>
           blend seamlessly with reality, offering unparalleled opportunities for exploration, creation, and social 
          connection, taking you on an extraordinary journey beyond  
          <span className="font-extrabold text-white"> imagination's limits.</span>
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="./arrow-down.svg"
          alt="arrow-down"
          className="w-[18px] h-[28px] object-contain mt-[20px]"
        />
      </motion.div>
  </section>
);

export default About;
