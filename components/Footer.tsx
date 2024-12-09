'use client'

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '../data'
import { IoCopyOutline } from 'react-icons/io5';
import { useState } from 'react'

const Footer = () => {

  const [copied, setCopied]=useState(false);

  const handleCopy=()=>{
    navigator.clipboard.writeText('fakeyeayo7@gmail.com');
    setCopied(true);
  }


  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
      

      <div className='flex flex-col items-center'> 
        <h1 className='heading lg:max-w-[45vw]'>Ready to take your <span className='text-purple'>digital presence </span> to the next level?</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out today</p>

        <MagicButton
              title={copied?'Email copied':'Copy my Email'}
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses="`bg-[#161a31]"
              handleClick={handleCopy}

            />

        {/* <a href='mailto:fakeyeayo07@gmail.com'>
          <MagicButton 
          title='Get in touch'
          icon={<FaLocationArrow />}
          position='right'
          
          />
        </a> */}
        
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center '>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Fakeye Ayobami</p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile)=>(
             <a key={profile.id} href={profile.link}>
              <div  className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 '>
              
                <img src={profile.img} alt={profile.alt} width={20} height={20}/>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
