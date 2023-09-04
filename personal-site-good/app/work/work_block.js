"use client";
 import { React, useState } from "react";
 import Image from 'next/image'

 const Work_Block = ({company, title, date, description, technologies, link}) => {

    const [hovering, SetHovering] = useState(false)

    const handleMouseEnter = () =>{
    
        SetHovering(true)
      
    }

    const handleMouseExit = () => {
        SetHovering(false)
    }

    return(
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className={`mt-12 sm:w-full sm:h-60 w-80 border-[2px] border-white/5 p-4 rounded-xl hover:bg-white/5 hover:shadow-xl text-white`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                <p className={`w-full font-bold text-xl font-poppins ${(hovering === true) ? "text-teal-400":null}`}>{title} @ {company}</p>
                <p className="font-inter font-semibold text-gray-400 mt-4">{date}</p>
                <p className="font-inter sm:text-base text-gray-400 mt-4">{description}</p>
                <p className={`font-inter font-base mt-4 italic ${(hovering === true) ? "text-teal-400":"text-white"}`}>{technologies}</p>

            </div>

        </a>
        
    )
}

export default Work_Block