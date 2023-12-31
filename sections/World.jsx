'use client';

import {motion} from "framer-motion";
import styles from '../styles';
import { staggerContainer,fadeIn } from '../utils/motion';
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center"/>
      <TitleText title={<>Track friends around you and invite them
                          to play together in the same world</>}
                          textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween',0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img 
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div className="md:block hidden absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src="people-01.png" alt="people" className="w-full h-full"
          />
        </div>

        <div className="md:block hidden absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src="people-02.png" alt="people" className="w-full h-full"
          />
        </div>

        <div className="md:block hidden absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src="people-03.png" alt="people" className="w-full h-full"
          />
        </div>

        <div className="md:block hidden absolute top-10 right-[25%] w-[200px] h-[170px] p-[6px] rounded-3xl bg-[#5d6680] z-0 justify justify-center">
          <img 
            src="mask-group.png" alt="people" className="w-full h-full"
          />
          <div className="w-full absolute z-10 top-20 items-center flex flex-row">
            <TypingText title="The Upside Down" textStyles="text-center text-[20px] font-bold"/>
          </div>
        </div>

      </motion.div>
    </motion.div>
    
  </section>
);

export default World;
