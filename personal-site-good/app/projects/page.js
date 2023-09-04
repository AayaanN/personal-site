"use client";
 import { React, useState } from "react";
 import Project_Block from "../project_block";
import image from '/public/trackr2.png'
import Image from 'next/image'
import parago from '/public/parago.png'
import opf from '/public/opf.png'
import shacks from '/public/shacks3.png'
import quickstat from '/public/quickstat.png'




 
 const Projects = () => {

    const [selected, setSelected] = useState(0)



    return(
        <div className="mt-20 " id="projects-section">
            <h2 className="text-3xl font-bold mb-10 font-poppins text-white">My Projects</h2>
            <div className="sm:grid sm:grid-cols-3 gap-0 rounded-xl ">
                <Project_Block 
                    project_name='Trackr' 
                    project_description = 'A stock portfolio web app using machine learning to make investing easier.' 
                    technologies= 'React, TailwindCSS, Flask, Tensorflow.' project_link = 'https://github.com/AayaanN/trackr' 
                    project_image = {image}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Project_Block 
                    project_name='Parago' 
                    project_description = 'A chrome extension with a new take on the Pomodoro technique, looking to help with productivity! Presented at Hack the North 2020.' 
                    technologies= 'Javascript, React.' 
                    project_link = 'https://github.com/AayaanN/Parago' 
                    project_image = {parago}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Project_Block 
                    project_name='OPF Solver' 
                    project_description = 'A script using Particle Swarm Optimization to solve for the Optimal Power Flow of an n-bus power system.' 
                    technologies= 'Python.' 
                    project_link = 'https://github.com/AayaanN/Optimal-Power-Flow-Solver' 
                    project_image = {opf}
                    selected={selected}
                    setSelected={setSelected}
                />  
                <Project_Block 
                    project_name='SafeGuard' 
                    project_description = 'An AI-powered chatbot system that makes reporting fraud a much quicker process. Presented at Scotia Hacks 2023.' 
                    technologies= 'Javascript, React, TailwindCSS.' 
                    project_link = 'https://github.com/tahazaryab/shacks' 
                    project_image = {shacks}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Project_Block 
                    project_name='QuickStat' 
                    project_description = 'An application using data science and graphing to make advanced basketball statistics intuitive for new fans. 2nd place at Hack the Ridge 2021.' 
                    technologies= 'Python.' 
                    project_link = 'https://github.com/AayaanN/quickStat' 
                    project_image = {quickstat}
                    selected={selected}
                    setSelected={setSelected}
                />
    
            </div>

        </div>
       
    )
 }

 export default Projects