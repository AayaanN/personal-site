"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'

const AboutMe= () => {

    return(
        <div className="mb-20 mt-5" id="about">
            {/* <h2 className="text-3xl font-bold font-poppins">About Me</h2> */}

            <p className="sm:mt-20 mt-10 sm:text-lg font-poppins font-semibold text-gray-400 leading-[2.5] text-center sm:w-full  w-80"> Hi! My name is Aayaan and I&apos;m a Computer Engineering student at UWaterloo, passionate about
                software development, physics, embedded systems, and ML. In my free time, I like to watch movies, read, 
                and play basketball!
            </p>

        </div>
    )
}

export default AboutMe