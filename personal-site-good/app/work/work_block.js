"use client";
 import { React, useState } from "react";
 import Image from 'next/image'

 const Work_Block = ({company, title, date, description, technologies, link, selected, setSelected}) => {

    const [hovering, SetHovering] = useState(false)

    const objects = {'Florida International University - EPSi Group': 1, 'Hack the Ridge': 2}



    const handleMouseEnter = () =>{
    
        SetHovering(true)
        setSelected(objects[company])
      
    }

    const handleMouseExit = () => {
        SetHovering(false)
        setSelected(0)
    }

    return(
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className={` sm:w-full sm:h-72 flex justify-center items-center w-80 border-[2px] border-white/5 p-8 rounded-xl hover:bg-white/5 hover:shadow-xl text-white ${(selected === objects[company] || selected === 0) ? null:' opacity-40'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                <div>
                    <p className={`w-full font-bold text-xl font-poppins ${(hovering === true) ? "text-teal-400":null}`}>{title} @ {company}</p>
                    <p className="font-inter font-semibold text-gray-400 mt-4">{date}</p>
                    <p className="font-inter sm:text-base text-gray-400 mt-4">{description}</p>
                    <p className={`font-inter font-base  mt-4 italic pb-5 ${(hovering === true) ? "text-teal-400":"text-teal-400"}`}>{technologies}</p>

                </div>
                
            </div>

        </a>
        
    )
}

export default Work_Block