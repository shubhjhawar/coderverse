'use client';

import {motion} from "framer-motion";
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25 }}
        className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}

      >
      </motion.div>
    </div>
        <TypingText title="| About CoderVerse" textStyles="text-center" />
    About Section
  </section>
);

export default About;
