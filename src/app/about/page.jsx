'use client';
import Brain from '@/components/brain';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';

const AboutPage = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div className='h-full overflow-scroll lg:flex ' ref={containerRef}>
                {/* Text container */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
                    {/* Bio container */}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
                        <p className='text-lg'>Sacrum Imperium Romanum VI</p>
                        <span className='italic'>We take pride in our role alongside PRODGY GLOBAL FOUNDATION as the standardized specialists of the global blockchain infrastructure</span>
                        <span>- Kaiser Wolfgang I von Hesse-Kassel, Co-Founder, Board Member and CEO</span>
                        {/* Bio scroll SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* Skills container */}
                    <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
                        <motion.h1 initial={{ x: "-300px" }}
              				animate={isSkillRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className='font-bold text-2xl'
						>
							SKILLS
						</motion.h1>
				        {/* Skills list */}
                        <motion.div 
	                        initial={{ x: "-300px" }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							className="flex gap-4 flex-wrap"
						>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                JavaScript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                TypeScript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                React.js
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Next.js
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Tailwind CSS
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                MongoDB
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Solidity
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Rust
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Smart Contract Auditing
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                PenTesting
                            </div>
                        </motion.div>
                        {/* Skills scroll SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* Experience container */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* Experience title */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* Experience list */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* Experience list item */}
                            <div className="flex justify-between h-48">
                                {/* Left */}
                                <div className="w-1/3 ">
                                    {/* Job title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior JavaScript Engineer
                                    </div>
                                    {/* Job desc */}
                                    <div className="p-3 text-sm italic">
                                        I led web development, offering expertise in JavaScript
                                        frameworks.{" "}
                                    </div>
                                    {/* Job date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2024 - Present
                                    </div>
                                    {/* Job company */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Apple
                                    </div>
                                </div>
                                {/* Center */}
                                <div className="w-1/6 flex justify-center">
                                    {/* Line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* Line circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* Experience list item */}
                            <div className="flex justify-between h-48">
                                {/* Left */}
                                <div className="w-1/3 "></div>
                                {/* Center */}
                                <div className="w-1/6 flex justify-center">
                                    {/* Line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* Line circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-1/3 ">
                                    {/* Job title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior React Developer
                                    </div>
                                    {/* Job desc */}
                                    <div className="p-3 text-sm italic">
                                        I spearheaded React-based application development,
                                        leveraging advanced skills.{" "}
                                    </div>
                                    {/* Job date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2019 - 2024{" "}
                                    </div>
                                    {/* Job company */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Microsoft
                                    </div>
                                </div>
                            </div>
                            {/* Experience list item */}
                            <div className="flex justify-between h-48">
                                {/* Left */}
                                <div className="w-1/3 ">
                                    {/* Job title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Freelancer{" "}
                                    </div>
                                    {/* Job desc */}
                                    <div className="p-3 text-sm italic">
                                        I provided web solutions, applying a range of technologies
                                        to address client requirements.{" "}
                                    </div>
                                    {/* Job date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2010 - 2019{" "}
                                    </div>
                                </div>
                                {/* Center */}
                                <div className="w-1/6 flex justify-center">
                                    {/* Line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* Line circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG container */}
                <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2' ref={containerRef}>
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
