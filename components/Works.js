import React from 'react'
import Styles from './work.module.css'
import Image from 'next/image'
function Works() {
  return (
    <div className={Styles.maincontainer}>
        <div className={`${Styles.workcontainer} max-md:flex-col`}> 
            <div className={`flex ${Styles.workcontainer2} max-md:flex-col`}>
                <div><Image alt='Img4' src="/assets/img6.svg" width={100} height={100} className='w-[60em]'/></div>
            </div>
            <div className={`flex flex-col ${Styles.workcontainer1}`}>
                <div className='capitalize font-medium text-[var(--color-navy)]'>The <span className='bg-[#D9D9D9]'>Real time communication & alert system was developed to bridge the communication gap between villagers and forest officers in the Gudalur Forest Division, Tamil Nadu.</span> This app provides real-time alerts, a reporting system, and contact information to empower swift action during elephant sightings. </div>
            </div>
        </div>
        <div className={`${Styles.workcontainer} max-md:flex-col-reverse`}> 
            <div className={`flex flex-col ${Styles.workcontainer1}`}>
                <div className='capitalize font-medium text-[var(--color-navy)]'>Click AI is an <span className='bg-[#D9D9D9]'>AI-powered platform designed to enhance event experiences by capturing and sharing memorable moments. </span> It streamlines event photo sharing, increases engagement, and provides valuable insights for event organizers, making event management more efficient and enjoyable for both attendees and planners.</div>
            </div>
            <div className={`flex flex-col ${Styles.workcontainer2}`}>
                <div><Image alt='Img4' src="/assets/img4.svg" width={100} height={100} className='w-[40em]'/></div>
            </div>
        </div>
        {/* <div className={Styles.workcontainer}> 
            <div className={`w-full flex flex-col ${Styles.workcontainer3}`}>
                <div><Image alt='Img3' src="/assets/img5.svg" width={100} height={100} className={Styles.img5}/></div>
            </div>
            <div className={`flex flex-col ${Styles.workcontainer4}`}>
                <div className={Styles.content2}>As you browse our work, you  will experience our ability to adapt  to a variety of needs and styles, While maintaining high quality and functionality in every  project.</div>
                <div><Image alt='Img4' src="/assets/img6.svg" width={100} height={100} className={Styles.img6}/></div>
            </div> 
        </div> */}
    </div>
  )
}

export default Works
