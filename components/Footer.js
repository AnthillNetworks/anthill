import React from 'react'
import Styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={`${Styles.footer} items-center justify-around`}>
      <div className={`flex ${Styles.ans}`}>A N</div>
      <div className={`flex flex-col gap-8 ${Styles.links}`}>
        <div className={`cursor-pointer ${Styles.link}`}><pre>ABOUT  / WORKS  / SERVICES  / CONTACT </pre></div>
        <div className={`cursor-pointer ${Styles.link}`}><pre>PRIVACY POLICY  / COOKIE POLICY  / FAQ  </pre></div>
      </div>
      <div className={` flex flex-col gap-4 items-center justify-center ${Styles.socialMedia}`}>
        <div>FOLLOW US</div>
        <div className='flex gap-4 items-center justify-center'>
          <a href="https://www.instagram.com/anthill_networks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <Image className={`${Styles.socioImg}`} src='/assets/Insta.svg' alt='Instagram' width={100} height={100}/>
          </a>
          <a href="https://www.linkedin.com/company/anthil-networks/?viewAsMember=true">
            {/* LinkedIn Icon */}
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin-in" style={{color: "#ffffff",}} /> */}
          </a>
            <Image className={`${Styles.socioImg}`} src='/assets/Fb.svg' alt='FaceBook' width={100} height={100}/>
            <Image className={`${Styles.socioImg}`} src='/assets/Twitter.svg' alt='Twitter' width={100} height={100}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
