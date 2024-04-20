"use client"
import React from 'react'
import Styles from './header.module.css'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <div className={Styles.mainCon}>
            <div className={Styles.container}>
            <div><Image className={Styles.logo} src="/assets/logo.svg" alt='Logo' width={100} height={100}/></div>
            <div className='flex gap-8'>
                <div className='flex items-center justify-center gap-2 cursor-pointer' onClick={()=>{console.log("")}}>
                    <div>
                        <Image className={Styles.img} src="/assets/rightarrow.svg" alt='Logo' width={100} height={100}/>
                    </div>
                    <div className={Styles.ids}>ABOUT</div>
                </div>
                <div className='flex items-center justify-center gap-2 cursor-pointer' onClick={()=>{console.log("")}}>
                    <div>
                        <Image className={Styles.img} src="/assets/rightarrow.svg" alt='Logo' width={100} height={100}/>
                    </div>
                    <div className={Styles.ids}>WORKS</div>
                </div>
                <div className='flex items-center justify-center gap-2 cursor-pointer' onClick={()=>{console.log("")}}>
                    <div>
                        <Image className={Styles.img} src="/assets/rightarrow.svg" alt='Logo' width={100} height={100}/>
                    </div>
                    <div className={Styles.ids}>SERVICES</div>
                </div>
                <div className='flex items-center justify-center gap-2 cursor-pointer' onClick={()=>{console.log("")}}>
                    <div>
                        <Image className={Styles.img} src="/assets/rightarrow.svg" alt='Logo' width={100} height={100}/>
                    </div>
                    <div className={Styles.ids}>CONTACT</div>
                </div>
            </div>
            </div>
        </div>
        <div className={Styles.mainCon}>
            <div className={Styles.crtDiv}>
                <div className={Styles.crt}>
                    <div className={`${Styles.creative} ${Styles.creative1}`}>
                        <div className={Styles.name}>CREATIVE</div>
                        <div className={Styles.name1}>CREATIVE</div>
                    </div>
                    <div>
                        <div className={Styles.creativecon}>We HAVE BEEN STRENGTHENING THE ONLINE PRESENCE OF BRANDS.  </div>
                    </div>
                </div>
            </div>
        </div>



        <div className={Styles.mainCon}>
            <div className={Styles.crtDiv}>
                <div className={Styles.crt}>
                    <div>
                        <div className={`${Styles.creativecon1} ${Styles.creative2}`}>from STARTUPS TO BIG BRANDS, WE HAVE A GLOBAL IMPACT</div>
                    </div>
                    <div className={Styles.creative}>
                        <div className={Styles.name1}>SOLUTION</div>
                        <div className={Styles.name}>SOLUTION</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header