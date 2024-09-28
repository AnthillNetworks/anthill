import React from 'react';
import Styles from './about.module.css';
import Image from 'next/image';

function About() {
  return (
    <div className={Styles.lgui}>
      <div className={`${Styles.container} flex justify-end`}>
        <div className={`${Styles.container1} flex flex-col gap-4`}>
          <div>
            <div className={`px-2 ${Styles.about} mt-4 text-6xl max-md:text-2xl`}>WHO WE ARE</div>
            <div className={`${Styles.aboutcon} capitalize`}>
              At Anthill Networks, we specialize in{' '}
              <span className='bg-[rgba(150,149,150,40%)]'>
                transforming the ideas of non-tech founders into fully functional SaaS products.
              </span>{' '}
              From concept to launch, we handle all the technical details so you can focus on your vision
            </div>
          </div>
          <div className={Styles.Img}>
            <div>
              <Image src="/assets/img2.svg" width={100} height={100} className={Styles.img1} alt="Img1" />
            </div>
          </div>
        </div>
        {/* <div className={Styles.container2}>Personalized approach each project is a unique story. </div> */}
        <div className={`${Styles.container3} flex flex-col gap-4`}>
          <div className={Styles.Img}>
            <div>
              <Image src="/assets/img1.svg" width={100} height={100} className={Styles.img1} alt="Img1" />
            </div>
          </div>
          <div>
            <div className={`px-2 ${Styles.ans} flex items-start justify-stretch gap-4`}>
              <div className="text-2xl text-[var(--color-navy)]">
                <div>A</div>
                <div>N</div>
              </div>
              <div className="text-xl w-[60%]">Personalized approach each project is a unique story.</div>
            </div>
            <div className={`${Styles.aboutcon}`}>
              Our goal is to offer{' '}
              <span className="bg-[rgba(150,149,150,40%)]">
                reliable and affordable solutions, making us the perfect alternative to freelancers or high-cost agencies.
              </span>{' '}
              We don&#39;t just build software - we craft the technology that powers your business.
            </div>
          </div>
        </div>
      </div>
      <div className={` ${Styles.container} ${Styles.mobilecontainer}`}>
        <div className={`${Styles.container1} flex flex-col gap-4`}>
          <div>
            <div className={`px-2 ${Styles.about} mt-4`}>WHO WE ARE</div>
            <div className={`${Styles.aboutcon}`}>
              At Anthill Networks, we specialize in{' '}
              <span className="bg-[rgba(150,149,150,40%)]">
                transforming the ideas of non-tech founders into fully functional SaaS products.
              </span>{' '}
              From concept to launch, we handle all the technical details so you can focus on your vision
            </div>
          </div>
          <div className={Styles.Img}>
            <div>
              <Image src="/assets/img1.svg" width={100} height={100} className={Styles.img1} alt="Img1" />
              <div className={Styles.container2}>Personalized approach each project is a unique story.</div>
            </div>
          </div>
        </div>
        <div className={`${Styles.container3} flex flex-col gap-4`}>
          <div className={Styles.Img}>
            <div>
              <Image src="/assets/img2.svg" width={100} height={100} className={Styles.img1} alt="Img1" />
            </div>
          </div>
          <div>
            <div className={`px-2 ${Styles.ans} flex items-start justify-stretch gap-4 max-md:items-center`}>
              <div className="text-2xl text-[var(--color-navy)]">
                <div>A</div>
                <div>N</div>
              </div>
              <div className="md:text-xl max-md:text-[12px] max-md:w-[100%] w-[60%]">Personalized approach each project is a unique story.</div>
            </div>
            <div className={`${Styles.aboutcon}`}>
              Our goal is to offer{' '}
              <span className="bg-[rgba(150,149,150,40%)]">
                reliable and affordable solutions, making us the perfect alternative to freelancers or high-cost agencies.
              </span>{' '}
              We don&#39;t just build software - we craft the technology that powers your business.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
