"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'



const Project_Block = ({project_name, project_description, technologies, project_link, project_image, selected, setSelected}) => {

    const objects = {'Trackr': 1, 'Parago': 2, 'OPF Solver':3, 'SafeGuard': 4, "QuickStat":5}

    const handleMouseEnter = () =>{
        console.log('this is what we want', objects[project_name])
        setSelected(objects[project_name])
        console.log('this is what we got:', selected, project_name)
    }

    const handleMouseExit = () => {
        setSelected(0)
    }

    //style={{ boxShadow: "-5px 0px 20px rgba(0, 0, 0, 0.5)" }}

    return(
        <a href={project_link} target="_blank" rel="noopener noreferrer">
            <div className={`rounded-xl p-4 grid-item h-96 sm:w-full w-80 hover:bg-white/5 hover:shadow-xl px-8 border-[2px] border-white/5 ${(selected === objects[project_name] || selected === 0) ? null:' opacity-40'}`}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                <div>
                <p className={`font-bold text-xl font-poppins  ${(selected === objects[project_name]) ? 'text-teal-400':' text-white'}`}>{project_name}</p>
                {/* <img src={require(project_image)} ></img> */}
                <Image alt='' src={project_image} className="rounded-lg sm:my-8 my-4 border-2 border-black h-32 w-full object-cover"></Image>
                <p className="h-16 font-inter sm:text-sm text-xs text-gray-400">{project_description}</p>
                <p className={`font-thin font-inter sm:text-sm text-xs italic sm:mt-8 mt-12 ${(selected === objects[project_name]) ? 'text-teal-400':'text-teal-400'}`}>{technologies}</p>
                </div>

                {/* <p>{project_image}</p> */}
            </div>
        </a>
    )
}

export default Project_Block