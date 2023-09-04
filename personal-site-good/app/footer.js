"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


export const Footer = () => {

    const onResumeClick = () => {
        window.open(res);
      }
    
    return(
        <div className='mt-36 flex flex-col '>
            <div className='sm:w-full w-80 flex justify-center'>
                <a href='/resume.pdf' alt="alt text" target="_blank" rel="noopener noreferrer">
                    <button className='sm:mx-10 mx-2 items-center text-transparent hover:text-teal-400'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  className="sm:w-12 sm:h-12 h-10 w-10 stroke-white hover:stroke-teal-400 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                        </svg>
                        <div className='mt-5'>
                            <p>Resume</p>
                        </div>

                    </button>
                </a>
                

                <a href='https://www.linkedin.com/in/aayaan-naqvi-199087249/' target="_blank" rel="noopener noreferrer">
                    <button className='sm:mx-10 mx-2 text-transparent hover:text-teal-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white hover:fill-teal-400 sm:h-12 sm:w-12 h-10 w-10'  viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        <div className='mt-5'>
                            <p>Linkedin</p>
                        </div>
                    </button>
                </a>
                
                <a href='https://github.com/AayaanN' target="_blank" rel="noopener noreferrer"> 
                    <button className='sm:mx-10 mx-2 text-transparent hover:text-teal-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white hover:fill-teal-400 sm:h-12 sm:w-12 h-10 w-10'  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <div className='mt-5'>
                            <p>GitHub</p>
                        </div>
                    </button>

                </a>
                
                <a href='mailto:aonenaqvee@gmail.com'>
                    <button className='sm:mx-10 mx-2 text-transparent hover:text-teal-400 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="sm:h-12 sm:w-12 h-10 w-10 stroke-white hover:stroke-teal-400">
                            <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        <div className='mt-5'>
                            <p>Email</p>
                        </div>
                        

                    </button>
                </a>
            </div>


            <p className='text-center font-inter mt-5 text-white'>Aayaan Naqvi</p>
            
        </div>
    )
}

export default Footer