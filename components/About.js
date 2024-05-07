import React from 'react'
import Styles from './about.module.css'
import Image from 'next/image';
function About() {
  return (
    <div className={Styles.lgui}>
      <div className={`${Styles.container} flex justify-between`}>
        <div className={`${Styles.container1} flex flex-col gap-4`}>
          <div>
            <div className={`px-2 ${Styles.about} mt-4`}>ABOUT</div>
            <div className={`${Styles.aboutcon}`}>ANTHILL NETWORKS IS AN INNOVATIVE ai - focused startup dedicated to developing cutting-edge SaaS products tailored for diverse industries. we  leverage artificial intelligence to create   solutions that streamline processed, enhance productivity, and drive growth for businesses worldwide.</div>
          </div>
          <div className={Styles.Img}>
            <div><Image src="/assets/img1.svg" width={100} height={100} className={Styles.img1} alt='Img1'/></div>
          </div>
        </div>
        <div className={Styles.container2}>Personalized approach each project is a unique story. </div>
        <div className={`${Styles.container3} flex flex-col gap-4`}>
          <div className={Styles.Img}>
            <div><Image src="/assets/img2.svg" width={100} height={100} className={Styles.img1} alt='Img1'/></div>
          </div>
          <div>
            <div className={`px-2 ${Styles.ans}`}>ANS</div>
            <div className={`${Styles.aboutcon}`}>We&apos;re not just crafting software solutions; We&apos;re sculpting the future of your business with AI-driven innovation. Harnessing the power of artificial intelligence and cutting-edge technology trends, WE ASSURE THAT YOUR BRAND NOT ONLY LEADS THE PACK BUT ALSO ENGAGES AND RETAINS YOUR TARGET CUSTOMERS EFFECTIVELY. OUR TEAM OF EXPERTS IS COMMITTED TO SURPASSING EXPECTATIONS BY DELIVERING BESPOKE SOLUTIONS THAT HARMONIZE SEAMLESSLY WITH YOUR OVERALL PRODUCT STRATEGY.</div>
          </div>
        </div>
      </div>
      <div className={` ${Styles.container} ${Styles.mobilecontainer}`}>
        <div className={`${Styles.container1} flex flex-col gap-4`}>
          <div>
            <div className={`px-2 ${Styles.about} mt-4`}>ABOUT</div>
            <div className={`${Styles.aboutcon}`}>ANTHILL NETWORKS IS AN INNOVATIVE ai - focused startup dedicated to developing cutting-edge SaaS products tailored for diverse industries. we  leverage artificial intelligence to create   solutions that streamline processed, enhance productivity, and drive growth for businesses worldwide.</div>
          </div>
          <div className={Styles.Img}>
            <div>
              <Image src="/assets/img1.svg" width={100} height={100} className={Styles.img1} alt='Img1'/>
              <div className={Styles.container2}>Personalized approach each project is a unique story. </div>
            </div>
          </div>
        </div>
        <div className={`${Styles.container3} flex flex-col gap-4`}>
          <div className={Styles.Img}>
            <div><Image src="/assets/img2.svg" width={100} height={100} className={Styles.img1} alt='Img1'/></div>
          </div>
          <div>
            <div className={`px-2 ${Styles.ans}`}>ANS</div>
            <div className={`${Styles.aboutcon}`}>We&apos;re not just crafting software solutions; We&apos;re sculpting the future of your business with AI-driven innovation. Harnessing the power of artificial intelligence and cutting-edge technology trends, WE ASSURE THAT YOUR BRAND NOT ONLY LEADS THE PACK BUT ALSO ENGAGES AND RETAINS YOUR TARGET CUSTOMERS EFFECTIVELY. OUR TEAM OF EXPERTS IS COMMITTED TO SURPASSING EXPECTATIONS BY DELIVERING BESPOKE SOLUTIONS THAT HARMONIZE SEAMLESSLY WITH YOUR OVERALL PRODUCT STRATEGY.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
