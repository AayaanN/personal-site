"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import {animateScroll as scroll } from "react-scroll";

const Navbar= () => {

    return(
        <div className=" p-0 mb-20 flex text-white">

                <Link href='#' className="sm:mx-32 mx-2 hover:text-teal-400">
                    Home
                </Link>

                <Link href='#about' className="sm:mx-32 mx-2 hover:text-teal-400">
                    About
                </Link>

                <Link href='#experience' className="sm:mx-32 mx-2 hover:text-teal-400">
                    Experience
                </Link>

                <Link href='#projects-section' className="sm:mx-32 mx-2 hover:text-teal-400" activeClass="active" spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
                    Projects
                </Link>


        </div>


    )
}

export default Navbar


