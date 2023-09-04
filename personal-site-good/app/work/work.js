"use client";
 import { React, useState } from "react";
 import Image from 'next/image'
import Work_Block from "./work_block";



const Work = () => {

    return(
        <div className="sm:mt-20 text-white" id="experience">
            <h2 className="text-3xl font-bold font-poppins">Experience</h2>
            <div className="rounded-xl ">
                <Work_Block 
                    company='Florida International University - EPSi Group' 
                    title='Machine Learning Research Assistant' 
                    date='May 2023 - Aug 2023'
                    description='Used machine learning and software engineering principles to develop smart power systems.
                    Developed energy-allocation decision making controller to be deployed on Florida Power and Light microgrid. 
                    Also developed remotely deployable full stack application for battery forecasting.'
                    technologies='Python, Javascript, React, Tensorflow, Electron.'
                    link='https://eps.fiu.edu/'
                    ></Work_Block>
    
            </div>

        </div>
    )
}

export default Work