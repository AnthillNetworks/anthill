"use client";
import React from 'react';
import Styles from './header.module.css';
import Image from 'next/image';

function Header() {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
          behavior: 'smooth'
        });
      };

    return (
    <div>
      <div className={Styles.mainCon}>
        <div className={`${Styles.container} items-center`}>
          <div className="hidden md:block">
            <Image className={Styles.logo} src="/assets/logo1.svg" alt="Logo" width={100} height={100} />
          </div>
          <div className="flex md:hidden">
            <Image src="/assets/logo1.svg" alt="Logo" width={160} height={160} />
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
              <div className={Styles.ids}>CONTACT</div>
            </div>
          </div>
          <div className="text-black px-6 py-1 max-md:px-1 max-md:text-[10px] capitalize border border-black font-medium">
            Let&#39;s Build Together
          </div>
          <div className="max-md:flex hidden">
            <Image src="/assets/hamburger.svg" alt="Hamburger Menu" width={40} height={40} style={{width:"1em"}} />
          </div>
        </div>
      </div>

      <div className={Styles.mainCon1}>
        <div className={Styles.crtDiv}>
          <div className={Styles.crt}>
            <div className={`${Styles.creative} ${Styles.creative1}`} style={{ alignSelf: 'start', alignItems: 'start' }}>
              <div className={Styles.name}>YOUR</div>
              <div className={Styles.name1}>VISION</div>
            </div>
            <div>
              <div className={Styles.creativecon}>Your Trusted Partner in Turning Visionary Ideas into Reality</div>
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
            <div className={`${Styles.ai} text-xl font-medium`}>TRANSFORMING IDEAS INTO DIGITAL SUCCESS</div>
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
              <div className={Styles.name1}>OUR</div>
              <div className={Styles.name}>EXPERTISE</div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.Homemobile}>
        <div className="flex justify-between gap-2 border border-x-gray-400">
          <div className="min-w-[33%] max-w-[33%] max-md:min-h-[20em] min-h-[25em] flex flex-col items-start justify-between border border-r-gray-400">
            <div className="h-[50%] px-4 border-b border-b-gray-400 w-full" style={{ fontSize: '24px' }}>
              <div className={Styles.name}>YOUR</div>
              <div className={Styles.name1}>VISION</div>
            </div>
            <div className="max-md:text-[12px] text-[var(--color-navy)] font-medium pb-4 px-2">
              We provide comprehensive SaaS solutions from concept to launch
            </div>
          </div>
          <div className="max-md:text-[12px] min-w-[25%] max-w-[25%] max-md:min-h-[20em] min-h-[25em] text-[var(--color-navy)] font-medium flex flex-col items-center justify-center">
            TRANSFORMING IDEAS INTO DIGITAL SUCCESS
          </div>
          <div className="min-w-[35%] max-w-[35%] max-md:min-h-[20em] min-h-[25em] flex flex-col items-start justify-between border border-l-gray-400">
            <div className="max-md:text-[12px] text-[var(--color-navy)] border-b border-b-gray-400 w-full font-medium h-[50%] px-4">
              Your Trusted Partner in Turning Visionary Ideas into Reality
            </div>
            <div style={{ fontSize: '25px !important' }} className="pb-4 pl-2">
              <div className={Styles.name1}>OUR</div>
              <div className={Styles.name}>EXPERTISE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
