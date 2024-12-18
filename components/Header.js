"use client";
import React, { useState } from 'react';
import Styles from './header.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TransformUI from './UI';

function Header() {

    const router = useRouter()
    const [open,setopen] = useState(false);
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
          behavior: 'smooth'
        });
      };

    return (
    <div className='hero-section'>
      <div className={Styles.mainCon}>
        <div className={`${Styles.container} items-center`}>
          <div className="hidden md:block cursor-pointer">
            <Image className={`${Styles.logo} cursor-pointer`} onClick={()=>router.push('/')} src="/assets/logo1.svg" alt="Logo" width={100} height={100} />
          </div>
          <div className="flex md:hidden cursor-pointer">
            <Image className={`cursor-pointer`} onClick={()=>router.push('/')} src="/assets/logo1.svg" alt="Logo" width={160} height={160} />
          </div>
          <div className={`flex gap-8 ${Styles.links}`}>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => scrollToSection('about')}>
              <div>{/* <Image className={Styles.img} src="/assets/rightarrow.svg" alt="Logo" width={100} height={100} /> */}</div>
              <div className={Styles.ids}>ABOUT</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => scrollToSection('works-section')}>
              <div>{/* <Image className={Styles.img} src="/assets/rightarrow.svg" alt="Logo" width={100} height={100} /> */}</div>
              <div className={Styles.ids}>WORKS</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => scrollToSection('anthill')}>
              <div>{/* <Image className={Styles.img} src="/assets/rightarrow.svg" alt="Logo" width={100} height={100} /> */}</div>
              <div className={Styles.ids}>SERVICES</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => scrollToSection('blogs')}>
              <div>{/* <Image className={Styles.img} src="/assets/rightarrow.svg" alt="Logo" width={100} height={100} /> */}</div>
              <div className={Styles.ids}>BLOGS</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => scrollToSection('idea-form')}>
              <div>{/* <Image className={Styles.img} src="/assets/rightarrow.svg" alt="Logo" width={100} height={100} /> */}</div>
              <div className={Styles.ids}>CONTACT</div>
            </div>
          </div>
          <div className='flex items-center gap-4' width={30}>
            <img src="/assets/call.svg" alt="" className='hidden md:block max-md:w-[2em] cursor-pointer' onClick={() => scrollToSection('idea-form')}/>
            <div className="cursor-pointer text-center text-black px-6 py-1 max-md:px-1 max-md:text-[10px] capitalize border border-black font-medium" onClick={() => scrollToSection('idea-form')}>
              Let&#39;s Build Together
            </div>
          </div>
          <div className="max-md:flex hidden cursor-pointer" onClick={()=>setopen(!open)}>
            {
            !open ?
            <Image src="/assets/hamburger.svg" alt="Hamburger Menu" width={40} height={40} style={{width:"1em"}} />
            : <><img src="/assets/closee.svg" alt="" className="w-[20px]"/></>
            }
          </div>
        </div>
      </div>

      {

        open &&  
        <div className={`space-y-2 py-4 max-md:block hidden transform transition-all duration-5000 ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('about');setopen(false)}}>
            <div className={Styles.ids} style={{fontSize:"20px"}}>ABOUT</div>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('works-section');setopen(false)}}>
            <div className={Styles.ids} style={{fontSize:"20px"}}>WORKS</div>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('anthill');setopen(false)}}>
            <div className={Styles.ids} style={{fontSize:"20px"}}>SERVICES</div>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('blogs');setopen(false)}}>
            <div className={Styles.ids} style={{fontSize:"20px"}}>BLOGS</div>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('idea-form');setopen(false)}}>
            <div className={Styles.ids} style={{fontSize:"20px"}}>CONTACT</div>
          </div>
        </div>
      }

      {/* <div className={Styles.mainCon1}>
        <div className={Styles.crtDiv}>
          <div className={Styles.crt}>
            <div className={`${Styles.creative} ${Styles.creative1}`} style={{ alignSelf: 'start', alignItems: 'start' }}>
              <div className={`${Styles.name} League`}>YOUR</div>
              <div className={`${Styles.name1} League`}>VISION</div>
            </div>
            <div>
              <div className={`${Styles.creativecon} uppercase`}>Your Trusted Partner in Turning Visionary Ideas into Reality</div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.mainCon2}>
        <div className={Styles.crtDiv}>
          <div className={Styles.crt}>
            <div>
              <div className={`${Styles.creativecon1} ${Styles.creative2} ${Styles.aipart}`}></div>
            </div>
            <div className={`${Styles.ai} text-xl font-medium uppercase League`}>TRANSFORMING IDEAS INTO DIGITAL SUCCESS</div>
            <div className={`${Styles.creative} ${Styles.creativeai}`}></div>
          </div>
        </div>
      </div>

      <div className={Styles.mainCon1}>
        <div className={Styles.crtDiv}>
          <div className={Styles.crt}>
            <div>
              <div className={`${Styles.creativecon1} ${Styles.creative2}`}>
                We provide comprehensive SaaS solutions from concept to launch
              </div>
            </div>
            <div className={Styles.creative} style={{ alignSelf: 'start', alignItems: 'start' }}>
              <div className={`${Styles.name1} League`}>OUR</div>
              <div className={`${Styles.name} League`}>EXPERTISE</div>
            </div>
          </div>
        </div>
      </div> */}

      <div className={Styles.Homemobile}>
        <TransformUI />
      </div>

      {/* <div className={Styles.Homemobile}>
        <div className="flex justify-between gap-2 border border-x-gray-400">
          <div className="min-w-[33%] max-w-[33%] max-md:min-h-[20em] min-h-[25em] flex flex-col items-start justify-between border border-r-gray-400">
            <div className="h-[50%] px-4 border-b border-b-gray-400 w-full" style={{ fontSize: '24px' }}>
              <div className={`${Styles.name} League !text-[40px]`}> YOUR</div>
              <div className={`${Styles.name1} League`}> VISION</div>
            </div>
            <div className="max-md:text-[9px] text-[var(--color-navy)] font-medium pb-4 px-2 uppercase">
              We provide comprehensive SaaS solutions from concept to launch
            </div>
          </div>
          <div className="League max-md:text-[16px] min-w-[25%] max-w-[25%] max-md:min-h-[20em] min-h-[25em] text-[var(--color-navy)] font-medium flex flex-col items-center justify-center">
            TRANSFORMING IDEAS INTO DIGITAL SUCCESS
          </div>
          <div className="min-w-[35%] max-w-[35%] max-md:min-h-[20em] min-h-[25em] flex flex-col items-start justify-between border border-l-gray-400">
            <div className="max-md:text-[9px] uppercase text-[var(--color-navy)] border-b border-b-gray-400 w-full font-medium h-[50%] px-4">
              Your Trusted Partner in Turning Visionary Ideas into Reality
            </div>
            <div style={{ fontSize: '25px !important' }} className="pb-4 pl-2">
              <div className={`${Styles.name1} League`}> OUR</div>
              <div className={`${Styles.name} League`}> EXPERTISE</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
