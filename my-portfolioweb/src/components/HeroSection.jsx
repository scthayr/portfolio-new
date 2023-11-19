"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section>
         <div className="grid grid-cols-1 sm:grid-cols-12">
         <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
           <div className="col-span-7 place-self-center text-center sm:text-left">
           <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
                Hello, I&apos;m{" "}
                </span>
                <br></br>
                <TypeAnimation
                 sequence={[
               'Thainá',
                600,
               'Front-End Dev',
                600,
                ]}
                wrapper="span"
               speed={50}
               style={{ fontSize: '1em', display: 'inline-block' }}
               repeat={Infinity}
               />
            </h1>
           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Student Front-End Development
             </p>
             <div>
                 <Link href="https://github.com/scthayr"
                 >
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-sky-500 via-purple-500 to-pink-400 hover:bg-slate-200 text-white">
                 My Projects
                 </button>
                 </Link>
             </div>
            </div>
            </motion.div>
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
            <div className="col-span-5 place-self-center mt-4 lg:nt-0">
                <div className="rounded-full bg=[#181818] w-[200px] h-[200px] lg:w-[600px] lg:h-[600px]">
                <Image
                  src="/images/hero-image.png"
                  alt="hero image"
                  style="position:relative;padding-bottom:100%"
                  width={600}
                  height={600}
                  />
                </div>  
            </div>
            </motion.div>
          </div>
        </section>
    );
};

export default HeroSection;