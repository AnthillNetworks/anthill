import React from 'react'
import Styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={`${Styles.footer} items-center justify-around`}>
      <div className={`flex ${Styles.ans}`}>ANS</div>
      <div className={`flex flex-col gap-8 ${Styles.links}`}>
        <div className='cursor-pointer'><pre>ABOUT  / WORKS  / SERVICES  / CONTACT </pre></div>
        <div className='cursor-pointer'><pre>PRIVACY POLICY  / COOKIE POLICY  / FAQ  </pre></div>
      </div>
      <div className={` flex flex-col gap-4 items-center justify-center ${Styles.socialMedia}`}>
        <div>FOLLOW US</div>
        <div className='flex gap-4 items-center justify-center'>
            <Image className={`${Styles.socioImg}`} src='assets/Fb.svg' alt='FaceBook' width={100} height={100}/>
            <Image className={`${Styles.socioImg}`} src='assets/Twitter.svg' alt='Twitter' width={100} height={100}/>
            <Image className={`${Styles.socioImg}`} src='assets/Insta.svg' alt='Instagram' width={100} height={100}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
