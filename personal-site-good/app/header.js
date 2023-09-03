"use client";

import React, { useEffect, useState } from 'react';


export const Header = () => {

    return(
        <div className='items-center justify-center w-full '>
            {/* <h1 className='flex items-center justify-center text-white text-xl font-inter'>Hi! My name is</h1> */}
            <h1 className='flex items-center justify-center text-white text-7xl font-bold mb-10 mt-2 font-poppins'>Aayaan Naqvi</h1>
            <h1 className='flex items-center justify-center text-white text-2xl font-semibold font-inter'>Computer Engineering at the University of Waterloo!</h1>
        </div>
    )
}

export default Header